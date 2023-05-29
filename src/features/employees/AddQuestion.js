import {React, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addQuestion } from './questionSlice'

const AskQuestion = () => {
    const dispatch = useDispatch();
    const questionRef = useRef();
    const buttonRef = useRef();
    const [values, setValues] = useState({
        question: ''
    });
    const validateQuestion = (values.question.length > 3);
    let validateButton = true;
    if (validateQuestion) {
        questionRef.current.classList.add('valid-success');
        buttonRef.current.classList.add('valid-success');
        validateButton = false;
    }

    const handleQuestion = () => {
        dispatch(addQuestion({
            id: uuidv4(),
            question: values.question,
        }));
        setValues({ 
            question: '', 
        });
    };

    return (
        <div className='questions-container card p-5'>
            <h6 className="text-center font-bold text-2xl text-orange-500">Submit More Questions!</h6>
            <h6 className="text-center font-bold text-sm mb-5 italic text-white">If your question gets chosen you win Rajant Merch!</h6>
            <div className='flex flex-col'>
                <input
                    className='input questions-input py-2 px-3 border-2 outline-none'
                    onChange={(e) => setValues({ ...values, question: e.target.value})}
                    type='text'
                    placeholder='What question should we ask next?'
                    ref={questionRef}
                    value={values.question}
                    tabIndex="0"
                ></input>
                </div>
                <div className='flex justify-between flex-row-reverse'>
                    <div className='flex items-center'>
                        <button type="button" id="button"
                            ref={buttonRef}
                            disabled={validateButton}
                            className='button questions-button py-2 px-6 my-0 rounded disabled:bg-neutral-400'
                            tabIndex="0"
                            onClick={handleQuestion}>
                            Submit
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default AskQuestion;
