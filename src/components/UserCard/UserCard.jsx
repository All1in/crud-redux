import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../../redux/reducers/Users/Users";

const UserCard = ({ name, username, id, setNewUsername, newUsername }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1> { name }</h1>
            <h1> { username }</h1>
            <input
                type='text'
                placeholder='New Username...'
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    dispatch(
                        updateUsername({ id: id, username: newUsername })
                    );
                }}
            >
                Update Username
            </button>
            <button
                onClick={() => {
                    dispatch(deleteUser({ id: id }));
                }}
            >
                Delete User
            </button>
        </div>
    );
};

export default UserCard;
