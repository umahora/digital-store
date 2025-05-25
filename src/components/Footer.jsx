import { Facebook, Instagram, Twitter } from "@/assets";

import Logo from "./Logo";
import { informations } from "@/data/informations";
import { Link } from "react-router";

const titles = ["Informção", "Categorias", "Contato"];

const NavFooter = () => {
    return (
        <nav className="flex flex-wrap md:grid grid-cols-2 gap-4 md:grid-cols-3 text-white">
            {informations.map((section, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">{titles[index]}</h2>
                    <ul className="flex flex-col gap-1 text-base">
                        {section.map((item, i) => (
                            <li
                                key={i}
                                className="active:text-primary  hover:text-primary"
                            >
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark-gray">
            <div className="flex flex-col md:flex-row gap-6 md:gap-50 mx-auto md:max-w-[1440px] px-5 pt-8.5 pb-8.5 md:pt-18 md:px-26">
                <div className="flex flex-col gap-5">
                    <Logo image="footer" />

                    <p className="text-white text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex gap-9">
                        <img src={Facebook} />
                        <img src={Instagram} />
                        <img src={Twitter} />
                    </div>
                </div>
                <NavFooter />
            </div>
            <div className="px-6.5 md:max-w-[1440px] mx-auto md:px-26">
                <hr className="border-white/20" />
                <p className="text-white text-center text-[13px] py-5.5">
                    © 2024 Digital Store
                </p>
            </div>
        </footer>
    );
};

export default Footer;
