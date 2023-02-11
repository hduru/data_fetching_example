import React, { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import Users from './components/Users';

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      <div>
        <Users setActiveUserId={setActiveUserId}></Users>
      </div>
      <div>
        {activeUserId && <UserDetail activeUserId={activeUserId}></UserDetail>}
      </div>
    </div>
  );
}

export default App;
