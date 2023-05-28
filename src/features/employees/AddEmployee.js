import {React, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addEmployee } from './employeeSlice';
import { v4 as uuidv4 } from 'uuid';

const AddEmployee = () => {
    const dispatch = useDispatch();
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputTitleRef = useRef()
    const inputFoodRef = useRef()
    const inputVacationRef = useRef()
    const buttonRef = useRef()
    const [values, setValues] = useState({
        name: '',
        email: '',
        title: '',
        food: '',
        vacation: ''
    });
    const validateName = (values.name.length > 1);
    const validateTitle = (values.title.length > 2);
    const validateFood = (values.food.length > 3);
    const validateVacation = (values.food.length > 3);
    const validateEmail = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let validateButton = true;
    
    if (validateName) {
        inputNameRef.current.classList.add('valid-green')
    }

    if (validateEmail) {
        inputEmailRef.current.classList.add('valid-green')
    }

    if (validateTitle) {
        inputTitleRef.current.classList.add('valid-green')
    }

    if (validateFood) {
        inputTitleRef.current.classList.add('valid-green')
    }

    if (validateVacation) {
        inputVacationRef.current.classList.add('valid-green')
    }

    if (validateName && validateEmail && validateTitle && validateFood && validateVacation) {
        buttonRef.current.classList.add('valid-green')
        validateButton = false;
    }

    const handleAddEmployee = () => {
            dispatch(addEmployee({
                id: uuidv4(),
                name: values.name,
                email: values.email,
                title: values.title,
                food: values.food,
                vacation: values.vacation
            }))
            setValues({ name: '', email: '' , title: '', food: '', vacation: '' });
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
                ref={inputNameRef}
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
                ref={inputEmailRef}
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
                ref={inputTitleRef}
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
                ref={inputFoodRef}
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
                ref={inputVacationRef}
                value={values.vacation}
                ></textarea>
            </div>
            <Link to={`/`} className='px-0 my-5 py-1 m-0 w-20 h-10'>
            <button type="button" id="button"
            ref={buttonRef}
            disabled={validateButton}
            className='button bg-gray-600 text-white py-2 px-6 my-0 rounded disabled:opacity-75'
            onClick={handleAddEmployee}>
            Save</button>
            </Link>
        </div>
    )
}

export default AddEmployee
