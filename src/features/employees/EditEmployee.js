import { React, useState, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { editEmployee } from './employeeSlice';

const EditEmployee = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const errorNameRef = useRef();
    const errorEmailRef = useRef();
    const errorTitleRef = useRef();
    const errorFoodRef = useRef();
    const errorVacationRef = useRef();
    const employeeList = store => store.employees;
    const employees = useSelector(employeeList);
    const existingEmployee = employees.filter(employee => employee.id === params.id);
    const { 
        name, 
        email, 
        title, 
        food, 
        vacation 
    } = existingEmployee[0];
    const [values, setValues] = useState({
        name,
        email,
        title,
        food,
        vacation
    });
    const validateName = (values.name.length > 3 && values.name.match(/^[A-Za-z\s]+$/));
    const validateTitle = (values.title.length > 3);
    const validateFood = (values.food.length > 3);
    const validateVacation = (values.vacation.length > 3);
    const validateEmail = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let validateButton = true;

    if (validateName && validateEmail && validateTitle && validateFood && validateVacation) {
        validateButton = false;
    }

    const handleEditEmployee = () => {
        window.scrollTo(0,0);
        setValues({ 
            name: values.name, 
            email: values.email, 
            title: values.title, 
            food: values.food, 
            vacation: values.vacation 
        });
        dispatch(editEmployee({
            id: params.id,
            name: values.name,
            email: values.email,
            title: values.title,
            food: values.food,
            vacation: values.vacation
        }));
    };

    return (
        <div className='form mt-5 mb-20 max-w-xl mx-auto px-10 flex gap-4 flex-col'>
            <div className='flex flex-col'>
                <label className='mb-1   text-xs'>Name</label>
                <input
                    className='input py-2 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, name: e.target.value})}
                    type='text'
                    placeholder='Employee Name'
                    value={values.name}
                    tabIndex="0"
                    onMouseLeave={(e) => {if (e.target === e.currentTarget && !validateName) {
                        errorNameRef.current.classList.add('show-error');
                    } else if (e.target === e.currentTarget && validateName) {
                        errorNameRef.current.classList.remove('show-error');
                    }}}
                ></input>
                <div className='error-message'
                    ref={errorNameRef}>
                    Please enter a valid name with more than 3 characters and only letters.
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='mb-1   text-xs'>Email</label>
                <input
                    className='input py-2 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, email: e.target.value})}
                    type='text'
                    placeholder='Employee@.com'
                    value={values.email}
                    tabIndex="0"
                    onMouseLeave={(e) => {if (e.target === e.currentTarget && !validateEmail) {
                        errorEmailRef.current.classList.add('show-error');
                    } else if (e.target === e.currentTarget && validateEmail) {
                        errorEmailRef.current.classList.remove('show-error');
                    }}}
                ></input>
                <div className='error-message'
                    ref={errorEmailRef}>
                    Please enter a valid email address.
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='mb-1   text-xs'>Job Title</label>
                <input
                    className='input py-2 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, title: e.target.value})}
                    type='text'
                    placeholder='Job Title'
                    value={values.title}
                    tabIndex="0"
                    onMouseLeave={(e) => {if (e.target === e.currentTarget && !validateTitle) {
                        errorTitleRef.current.classList.add('show-error');
                    } else if (e.target === e.currentTarget && validateTitle) {
                        errorTitleRef.current.classList.remove('show-error');
                    }}}
                ></input>
                <div className='error-message'
                    ref={errorTitleRef}>
                    Please enter a valid title with more than 3 characters.
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='mb-1   text-xs'>What's your favorite meal?</label>
                <textarea
                    className='input py-2 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, food: e.target.value})}
                    type='text'
                    maxLength='150'
                    placeholder='Favorite Meal'
                    value={values.food}
                    tabIndex="0"
                    onMouseLeave={(e) => {if (e.target === e.currentTarget && !validateFood) {
                        errorFoodRef.current.classList.add('show-error');
                    } else if (e.target === e.currentTarget && validateName) {
                        errorFoodRef.current.classList.remove('show-error');
                    }}}
                ></textarea>
                <div className='error-message'
                    ref={errorFoodRef}>
                    Please enter a valid response with more than 3 characters.
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='mb-1   text-xs'>What's your ideal vacation?</label>
                <textarea
                    className='input py-1 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, vacation: e.target.value})}
                    type='text'
                    maxLength='150'
                    placeholder='Ideal Vacation'
                    value={values.vacation}
                    tabIndex="0"
                    onMouseLeave={(e) => {if (e.target === e.currentTarget && !validateVacation) {
                        errorVacationRef.current.classList.add('show-error');
                    } else if (e.target === e.currentTarget && validateVacation) {
                        errorVacationRef.current.classList.remove('show-error');
                    }}}
                ></textarea>
                <div className='error-message'
                    ref={errorVacationRef}>
                    Please enter a valid response with more than 3 characters.
                </div>
            </div>
            <div className='flex justify-between flex-row-reverse'>
                <Link to={`/`} className='px-0 my-3 py-1 m-0 w-20 flex col'>
                    <div className='flex items-center'>
                        <button type="button" id="button"
                            disabled={validateButton}
                            className='button btn-edit bg-gray-600  py-2 px-6 my-0 rounded disabled:opacity-75 disabled:bg-slate-300 disabled:border-slate-400 button valid-success disabled:bg-gray-150 disabled:border-gray-150 disabled:text-slate-500'
                            onClick={handleEditEmployee}>Save
                        </button>
                    </div>
                </Link>
                <Link to={`/`} className='px-0 my-3 py-1 m-0 w-20 flex col'>
                    <button className='button button-cancel bg-gray-600  py-2 px-6 my-0 rounded items-center'>Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default EditEmployee;
