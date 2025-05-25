import React from "react";
import { Link } from "react-router";


const Section = ({ title, titleAlign = "left", link, children }) => {
    const aligns = {
        left: "ml-0",
        center: "ml-auto",
    };
    return (
        <section className="max-w-[1440px] mx-auto px-5 md:px-26 flex flex-col justify-center gap-5">
            <div className="flex w-full">
                <h2
                    className={`${aligns[titleAlign]} text-dark-gray-2 text-2xl font-bold`}
                >
                    {title}
                </h2>

                {link
                    ? <Link to={link.href} className="text-lg ml-auto  text-primary">{link.text}</Link>
                    : ""}
            </div>
            {children}
            
        </section>
    );
};

export default Section;
