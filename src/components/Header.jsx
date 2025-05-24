import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import { Link } from "react-router";
import MyButton from "./MyButton";

// import imgHeader from "../assets/logo-header.svg";
import imgMiniCart from "../assets/mini-cart.svg";
import imgLupa from "../assets/lupa.svg";
import NavBar from "./Navbar";
import MenuButton from "./MenuButton";

const InputSearch = () => {
    return (
        <div className="relative flex-1 max-w-[559px] hidden lg:flex">
            <input
                className="bg-dark-gray-2/4 px-4 py-4 rounded-lg
                            placeholder-dark-gray-3/60 w-full
                            outline-0 focus:outline-primary focus:outline-2"
                type="text"
                placeholder="Pesquisar produto..."
            />
            <button className="absolute left-[calc(100%_-_2rem)] top-[50%] -translate-y-1/2">
                <img src={imgLupa} alt="" />
            </button>
        </div>
    );
};

const Login = () => {
    return (
        <div className="hidden lg:flex gap-7.5 items-center">
            <Link className="text-base text-dark-gray-2 underline">
                Cadastre-se
            </Link>
            <MyButton myStyle={"default"}>Entrar</MyButton>
        </div>
    );
};

const MiniCart = () => {
    return (
        <div className="relative">
            <img className="min-w-[24px] aspect-auto" src={imgMiniCart} />

            <div className="hidden place-content-center bg-error rounded-full absolute w-[17px] h-[17px] text-xs text-center text-white font-bold -top-1 -right-2">
                2
            </div>
        </div>
    );
};

const Header = ({ onHeight }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const divRef = useRef();

    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleOpenSearch = () => setIsOpenSearch(!isOpenSearch);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        // pega a altura do header
        if (divRef.current) {
            const height = divRef.current.offsetHeight;
            onHeight(height);
        }

        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [onHeight]);

    return (
        <header
            ref={divRef}
            className={`fixed bg-white font-inter top-0 left-0 w-full z-50 transform transition-transform duration-300 ease-in-out 
                ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="relative flex gap-10 mx-auto lg:max-w-[1440px] px-5 py-5 lg:pt-8.5 lg:px-26 z-50 bg-white">
                <div className="flex flex-1 items-center gap-6 justify-between">
                    <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
                    <Logo image="header" />
                    {/* <img src={imgHeader} alt="" /> */}
                    <InputSearch />
                    <Login />

                    <div className="flex items-center gap-3">
                        <button
                            className="lg:hidden"
                            onClick={toggleOpenSearch}
                        >
                            <img
                                className="max-w-[24px] aspect-auto"
                                src={imgLupa}
                                alt=""
                            />
                        </button>
                        <MiniCart />
                    </div>
                </div>
            </div>

            <div
                className={`fixed bg-white w-full pb-4 pt-1 px-4 lg:hidden z-0
                        transform transition-transform duration-300 ease-in-out
                        top-[100%]
                    ${isOpenSearch ? "translate-y-0" : "-translate-y-full"}
                    ${isVisible ? "block" : "hidden"}
                `}
            >
                <div className="relative flex">
                    <input
                        className="bg-dark-gray-2/4 px-4 py-4 rounded-lg
                            placeholder-dark-gray-3/60 w-full
                            outline-0 focus:outline-primary focus:outline-2"
                        type="text"
                        placeholder="Pesquisar produto..."
                    />
                    <button className="absolute left-[calc(100%_-_2rem)] top-[50%] -translate-y-1/2">
                        <img src={imgLupa} alt="" />
                    </button>
                </div>
                
            </div>
            <NavBar isOpen={isOpen} toggleOpen={toggleOpen} />
        </header>
    );
};

export default Header;
