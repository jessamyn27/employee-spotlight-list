import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './userSlice';


const UserList = () => {
        const users = useSelector(store => store.users);
        const dispatch = useDispatch();
        const handleRemoveUser = (id) => {
            dispatch(deleteUser({id: id}))
        }

        const renderCard = () => users.map(user => ( 
        <div key={user.id} className = 'bg-gray-300 p-5 flex items-center justify-between card'>
            <div>
                <h3 className='font-bold text-lg text-gray-700'> { user.name } </h3>
                <span className='font-normal text-gray-600'> { user.email } </span>
            </div>
            <div className='flex gap-4'>
                <Link to={`edit-user/${user.id}`}>
                    <button className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    </button>
                </Link>
                <button onClick={() => handleRemoveUser(user.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
        </div>

        ))
        return (
            <div className='homepage container p-10'>
                <h1 className='text-center font-bold text-3xl text-white'>Ragant</h1>
                <h2 className='text-center font-bold text-2xl text-white'>Employee Spotlight</h2>
                <Link to='/add-user'><Button>Add Employee</Button></Link>
                <div className = 'grid gap-5 md:grid-cols-2'>
                    {users.length ? renderCard() : <p className = 'text-center col-span-2 text-red-700 font-semibold'> No User Found </p>}
                </div>
            </div>
        );
}
        export default UserList;