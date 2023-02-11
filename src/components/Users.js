import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Users({ setActiveUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     getUsers();
  }, []);

  const getUsers = async () => {
     try {
        const { data : users } = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(users);
        setLoading(false);
     } catch (error) {
        alert(error.message);
     }
  }

  return (
    <div>
        <h2>Kullanıcılar</h2>
        <hr></hr>
        {loading && <p>Yükleniyor...</p>}
        <ul className='user-list'>
            {
                users.map((user) => (
                    <li key={user.id} onClick={() => setActiveUserId(user.id)}> {user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Users