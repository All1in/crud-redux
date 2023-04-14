import './styles/App.css'
import { Input, Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import UserCard from "./components/UserCard/UserCard";
import { useState } from "react";
import { addUser } from "./redux/reducers/Users/Users";
const { Search } = Input;

const App = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const onSearch = (event) =>  setUsername(event.target.value)

  const handleButton = () => {
      dispatch(
          addUser({
              id: userList[userList.length - 1].id + 1,
              name,
              username,
          })
      )
      console.log('User created')
  }

  return (
    <div className="App">
        <div className='addUser'>
            <Search
                placeholder='Name...'
                onChange={onSearch}
                enterButton
            />
            <Search
                placeholder='Username...'
                onChange={onSearch}
                enterButton
            />
            <Button onClick={handleButton} type="primary" danger> Add User </Button>
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
