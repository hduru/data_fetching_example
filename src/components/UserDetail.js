import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UserDetail({ activeUserId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserDetail();
  }, [activeUserId]); 


  const getUserDetail = async () => {
    setLoading(true);

    try {
       const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`);
       setUser(user);
       setLoading(false);
    } catch (error) {
       alert(error.message);
    }
 }

  return (
    <div>
        <h2>Detaylar</h2>
        <hr></hr>
        {loading && <p>Yükleniyor...</p>}
        {!loading && <pre>{JSON.stringify(user,null,2)}</pre>}
    </div>
  )
}

export default UserDetail