import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './employeeSlice';


const EmployeeList = () => {
        const employees = useSelector(store => store.employees);
        const dispatch = useDispatch();
        const handleRemoveEmployee = (id) => {
            dispatch(deleteEmployee({id: id}))
        }

        const renderCard = () => employees.map(employee => ( 
        <div key={employee.id} className = 'bg-gray-300 p-5 flex justify-between card'>
            <div>
                <h3 className='font-bold text-lg text-gray-700'> { employee.name } </h3>
                <h2 className='font-normal text-base text-gray-600'> { employee.title } </h2>
                <h6 className='font-normal mb-3 text-sm text-gray-600'> { employee.email } </h6>
                <h2 className='font-bold text-sm  mb-2 text-gray-600'>Questions:</h2>
                <h6 className='font-normal text-sm italic text-gray-600'>What's your favorite meal?</h6>
                <h6 className='font-bold text-sm mb-2 text-gray-600'> { employee.food } </h6>
                <h6 className='font-normal text-sm italic text-gray-600'>What's your ideal vacation?</h6>
                <h6 className='font-bold text-sm mb-2 text-gray-600'> { employee.vacation } </h6>
            </div>
            <div className='flex gap-4'>
                <Link to={`edit-employee/${employee.id}`}>
                    <button className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    </button>
                </Link>
                <button className="flex" onClick={() => handleRemoveEmployee(employee.id)}>
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
                <h2 className='text-center font-bold text-2xl text-white'>Employee Spotlights</h2>
                <Link to='/add-employee'><Button>Add Employee</Button></Link>
                <div className = 'grid gap-5 md:grid-cols-2'>
                    {employees.length ? renderCard() : <p className = 'text-center col-span-2 text-red-700 font-semibold'> No Employee Found </p>}
                </div>
            </div>
        );
}
        export default EmployeeList;