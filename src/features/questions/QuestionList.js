import { useSelector } from 'react-redux';

const QuestionList = () => {
    const questions = useSelector(store => store.questions);
    const renderCard = () => questions.map(question => ( 
        <div key={question.id} className = 'p-5 flex justify-between'>
            <div>
                <h6 className='question text-sm'> { question.question } </h6>
            </div>
        </div>
    ));
    return (
        <div className='questions p-1'>
            <div className = 'grid sm:grid-cols-1'>
                {questions.length ? renderCard() : <p className = 'text-center col-span-2 font-semibold'> No Questions Yet! </p>}
            </div>            
        </div>
    );
}

export default QuestionList;