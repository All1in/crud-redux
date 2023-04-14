import './styles/App.css'
import { Input, Button } from 'antd';
import { useSelector } from "react-redux";
import UserCard from "./components/UserCard/UserCard";
import { useState } from "react";
const { Search } = Input;

const App = () => {
  const userList = useSelector((state) => state.users.value)
  const onSearch = (value) => console.log(value)

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const restPropsUserCard = {
      setNewUsername: setNewUsername,
      newUsername: newUsername
  }

  return (
    <div className="App">
        <div className='addUser'>
            <Search
                placeholder='Name...'
                onSearch={onSearch}
                enterButton
            />
            <Search
                placeholder='Username...'
                onSearch={onSearch}
                enterButton
            />
            <Button type="primary" danger> Add User </Button>
        </div>
        <div className='displayUsers'>
            {userList.map((user) => {
                const { name, username, id } = user
                return (
                     <UserCard
                        key={id}
                        setNewUsername={setNewUsername}
                        newUsername={newUsername}
                        name={name}
                        username={username}
                        id={id}
                    />
                )
            })}
        </div>
    </div>
  );
}

export default App;
