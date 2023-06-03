import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './employeeSlice';
import QuestionList from "../questions/QuestionList";
import AddQuestion from "../questions/AddQuestion";

const EmployeeList = () => {
    const employees = useSelector(store => store.employees);
    const dispatch = useDispatch();
    const handleRemoveEmployee = (id) => {
        dispatch(deleteEmployee({id: id}));
    };
    const renderCard = () => employees.map(employee => ( 
    <div key={employee.id} className = 'bg-gray-300 p-5 flex justify-between card'>
        <div>
            <h3 className='card-name font-bold text-lg text-gray-700'> { employee.name } </h3>
            <h2 className='card-title font-normal text-base '> { employee.title } </h2>
            <h6 className='card-email font-normal mb-3 text-sm '> { employee.email } </h6>
            <h2 className='card-questions font-bold text-sm  mb-2 '>Questions:</h2>
            <h6 className='card-question font-normal text-sm italic '>What's your favorite meal?</h6>
            <h6 className='card-answer font-bold text-sm mb-2 '> { employee.food } </h6>
            <h6 className='card-question font-normal text-sm italic '>What's your ideal vacation?</h6>
            <h6 className='card-answer font-bold text-sm mb-2 '> { employee.vacation } </h6>
        </div>
        <div className='flex gap-2 max-h-5'>
            <Link to={`edit-employee/${employee.id}`}>
                <button className='button-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9787e7df" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </button>
            </Link>
            <button className="button-delete flex" onClick={() => handleRemoveEmployee(employee.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    ))
    return (
        <div className='homepage container p-10'>
            <h1 className='homepage-title text-center font-bold text-4xl'>Employee Spotlight</h1>
            <h6 className='home-age-subtitle text-center p-t-1 text-sm italic'>Fill out a card and post answers to this month's questions!</h6>
            <Link to='/add-employee'><Button>Add Employee</Button></Link>
            <div className = 'grid gap-5 md:grid-cols-2'>
                {employees.length ? renderCard() : <p className = 'text-center col-span-2 text-red-700 font-semibold'> No Employee Found </p>}
            </div>
            <AddQuestion/>
            <QuestionList/>
        </div>
    );
}

export default EmployeeList;