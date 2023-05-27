import {React, useState, useRef} from 'react'
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { editEmployee } from './userSlice';

const EditEmployee = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const buttonRef = useRef()
    const userList = store => store.users
    const users = useSelector(userList);
    const existingUser = users.filter(user => user.id === params.id)
    const { name, email } = existingUser[0]
    const [values, setValues] = useState({
        name,
        email
    });
    const validateName = values.name.length > 3;
    const validateEmail = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let validateButton = true;

    if (validateName && validateEmail) {
        validateButton = false;
    }

    const handleEditEmployee = () => {
        setValues({ name: values.name, email: values.email });
        dispatch(editEmployee({
            id: params.id,
            name: values.name,
            email: values.email
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
            <Link to={`/`} className='px-0 my-5 py-1 m-0 w-20 h-10'><button type="button" id="button"
            ref={buttonRef}
            disabled={validateButton}
            className='button text-white py-2 px-6 my-0 rounded valid-green disabled:opacity-75 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-slate-500'
            onClick={handleEditEmployee}>
            Save</button></Link>
        </div>
    )
}

export default EditEmployee
