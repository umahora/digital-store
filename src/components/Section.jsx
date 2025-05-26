import React from "react";
import { Link } from "react-router";

const Section = ({ title, titleAlign = "left", link, children }) => {
    const aligns = {
        left: "ml-0",
        center: "ml-auto",
    };
    return (
        <section className="max-w-[1440px] mx-auto py-4 px-5 lg:px-25 flex flex-col justify-center gap-5">
            <div className="flex items-center w-full">
                {title ? (
                    <h2
                        className={`${aligns[titleAlign]} text-dark-gray-2 text-base md:text-2xl font-bold`}
                    >
                        {title}
                    </h2>
                ) : null}

                {link ? (
                    <Link
                        to={link.href}
                        className="text-base md:text-lg ml-auto  text-primary"
                    >
                        {link.text}
                    </Link>
                ) : null}
            </div>
            {children}
        </section>
    );
};

export default Section;
