
const Button = ( { onClick, children } ) => {
    return (
    <button className='py-2 px-6 my-10 rounded button' onClick={onClick}>
        {children}
    </button>
    )
}

export default Button
