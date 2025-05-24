import { Link } from "react-router";

export const MyButton = ({
    myStyle,
    children,
    path = "/login"
}) => {
    const btnTypes = {
        default: "bg-primary text-light-gray-3 hover:bg-primary/90 active:bg-tertiary",
        // colocar mais temas de btns, se tiver
    };
    return (
        <button
            className={`${btnTypes[myStyle]} px-9 py-2.5 tracking-[0.75px] text-sm leading-5 font-bold cursor-pointer rounded-sm`}
        >
            <Link to={path}>{children}</Link>
        </button>
    );
}

export default MyButton;
