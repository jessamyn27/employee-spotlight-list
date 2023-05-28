import { React, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { editEmployee } from './employeeSlice';

const EditEmployee = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const employeeList = store => store.employees
    const employees = useSelector(employeeList);
    const existingEmployee = employees.filter(employee => employee.id === params.id)
    const { name, email, title, food, vacation } = existingEmployee[0]
    const [values, setValues] = useState({
        name,
        email,
        title,
        food,
        vacation
    });
    const validateName = values.name.length > 1;
    const validateTitle = (values.title.length > 3);
    const validateFood = (values.food.length > 3);
    const validateVacation = (values.food.length > 3);
    const validateEmail = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let validateButton = true;

    if (validateName && validateEmail && validateTitle && validateFood && validateVacation) {
        validateButton = false;
    }

    const handleEditEmployee = () => {
        setValues({ name: values.name, email: values.email, title: values.title, food: values.food, vacation: values.vacation });
        dispatch(editEmployee({
            id: params.id,
            name: values.name,
            email: values.email,
            title: values.title,
            food: values.food,
            vacation: values.vacation
        }))
    }

    return (
        <div className='form mt-10 max-w-xl mx-auto flex gap-4 flex-col'>
            <div className='flex flex-col'>
                <label className='mb-2 text-base text-gray-800'>Name</label>
                <input
                className='input py-2 px-3 border-2 outline-none'
                onChange={(e) => setValues({ ...values, name: e.target.value})}
                type='text'
                placeholder='name'
                value={values.name}
                ></input>
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-base text-gray-800'>Email</label>
                <input
                className='input py-2 px-3 border-2 outline-none'
                onChange={(e) => setValues({ ...values, email: e.target.value})}
                type='text'
                placeholder='address@email.com'
                value={values.email}
                ></input>
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-base text-gray-800'>Job Title</label>
                <input
                className='input py-2 px-3 border-2 outline-none'
                onChange={(e) => setValues({ ...values, title: e.target.value})}
                type='text'
                placeholder='Job Title'
                value={values.title}
                ></input>
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-base text-gray-800'>What's your favorite meal?</label>
                <textarea
                className='input py-2 px-3 border-2 outline-none'
                onChange={(e) => setValues({ ...values, food: e.target.value})}
                type='text'
                placeholder='Food'
                value={values.food}
                ></textarea>
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-base text-gray-800'>What's your ideal vacation?</label>
                <textarea
                className='input py-2 px-3 border-2 outline-none'
                onChange={(e) => setValues({ ...values, vacation: e.target.value})}
                type='text'
                placeholder='Ideal Vacation'
                value={values.vacation}
                ></textarea>
            </div>
            <Link to={`/`} className='px-0 my-5 py-1 m-0 w-20 h-10'><button type="button" id="button"
            disabled={validateButton}
            className='button text-white py-2 px-6 my-0 rounded valid-green disabled:opacity-75 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-slate-500'
            onClick={handleEditEmployee}>
            Save</button></Link>
        </div>
    )
}

export default EditEmployee
