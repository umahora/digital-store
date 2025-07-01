import { NavLink, Link } from "react-router";
import MyButton from "./MyButton";
import { itemNav } from "../data/itemNav";

const ListLinks = () => {
    return itemNav.map((item) => {
        return (
            <NavLink
                key={item.id}
                className={"tracking-[0.75px] hover:text-primary"}
                to={item.path}
            >
                {item.title}
            </NavLink>
        );
    });
};

const NavBarMobile = ({ isOpen }) => {
    return (
        <div
            className={`absolute bg-white h-dvh left-0 top-0 z-40 duration-300 ease-in-out 
                ${
                    isOpen ? "translate-x-0 " : "-translate-x-full"
                } w-[80%] lg:hidden`}
        >
            <div className="flex flex-col h-[calc(100dvh_-_2.5rem)] justify-between gap-5 px-7.5 py-7.5">
                <div className="flex flex-col gap-5">
                    <h2 className="font-bold text-dark-gray-2 tracking-[0.75px]">
                        Páginas
                    </h2>
                    <ul className="flex flex-col items-start gap-2.5 text-gray-700 ">
                        <ListLinks />
                    </ul>
                </div>
                <div className="flex flex-col py-5 gap-4 border-t-1 border-light-gray-2">
                    <MyButton myStyle={"default"}>Entrar</MyButton>
                    <Link className="text-base text-center text-dark-gray-2 underline">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ isOpen, toggleOpen }) => {
    return (
        <nav className="bg-white text-base relative">
            <div className="lg:block mx-auto lg:max-w-[1440px] lg:px-26 lg:pt-5 lg:pb-7.5">
                <ul className="hidden lg:flex gap-8 text-dark-gray-2 text-base">
                    <ListLinks />
                </ul>
            </div>

            <NavBarMobile isOpen={isOpen} />

            {/* OVERLAY  */}
            <button
                onClick={toggleOpen}
                className={`h-screen inset-0 absolute left-0 top-0 z-10 duration-300 ease-in-out 
                ${isOpen ? "bg-dark-gray/40" : "hidden"}`}
            ></button>
        </nav>
    );
};

export default Navbar;
