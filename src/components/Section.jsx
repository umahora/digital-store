import React from "react";
import { Link } from "react-router";

const Section = ({
    title,
    titleAlign = "left",
    link,
    className = "",
    children,
}) => {
    const aligns = {
        left: "justify-start",
        center: "justify-center",
    };
    return (
        <section className={`${className}`}>
            <section className="max-w-[1440px] mx-auto py-4 px-5 lg:px-25 flex flex-col justify-center gap-5">
                <div className="flex items-center w-full">
                    {title ? (
                        <h2
                            className={`${aligns[titleAlign]} flex flex-1 text-dark-gray-2 text-base md:text-2xl font-bold`}
                        >
                            {title}
                        </h2>
                    ) : null}

                    {link ? (
                        <Link
                            to={link.href}
                            className="text-base md:text-lg ml-auto text-primary"
                        >
                            {link.text}
                        </Link>
                    ) : null}
                </div>
                {children}
            </section>
        </section>
    );
};

export default Section;
