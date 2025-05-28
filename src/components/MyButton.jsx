import { Link } from "react-router";

export const MyButton = ({
    myStyle,
    children,
    path = "/login"
}) => {
    const btnTypes = {
        default: "bg-primary text-light-gray-3 hover:bg-primary/90 active:bg-tertiary",
        theme2: "bg-light-gray-3 text-primary hover:bg-gray-200 active:bg-gray-400",
        // colocar mais temas de btns, se tiver
    };
    return (
        <button
            className={`${btnTypes[myStyle]} px-9 py-2.5 tracking-[0.75px] text-sm leading-5 font-bold cursor-pointer rounded-sm`}
        >
            <Link to={path} className="font-bold">{children}</Link>
        </button>
    );
}

export default MyButton;
