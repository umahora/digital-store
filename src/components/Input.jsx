const Input = ({bgColor,hoverColor,activeColor, children}) => {
    return (
        <button className={ bgColor + ` text-sm px-9 py-3 font-bold text-light-gray-3 cursor-pointer rounded-lg hover:`+hoverColor+`/90 active:`+ activeColor}>
            <Link>
                {children}
            </Link>
        </button>
    );
}
export default Input;