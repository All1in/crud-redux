import './styles/App.css'
import { Input, Button } from 'antd';
import { useSelector } from "react-redux";
const { Search } = Input;

const App = () => {
  const userList = useSelector((state) => state.users.value)
  const onSearch = (value) => console.log(value);

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
            {userList.map((user) => (
                <h1> { user.name } </h1>
            ))}
        </div>
    </div>
  );
}

export default App;
