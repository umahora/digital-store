import imgMenuBtn from "../assets/menu-btn.svg";
import { Menu, X } from "lucide-react";
const MenuButton = ({ isOpen, toggleOpen }) => {
    return (
        <button
            className="lg:hidden"
            onClick={toggleOpen}
        >
            {isOpen ? <X size={24} /> : <img className="min-w-[24px]" src={imgMenuBtn} />}
            {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
            {/* <img className="min-w-[24px]" src={imgMenuBtn} /> */}
        </button>
    );
};

export default MenuButton;
