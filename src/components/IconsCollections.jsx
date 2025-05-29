import { Component } from "lucide-react";
import Section from "./Section";
import { Cap, Calca, Sapato, Headset, Camiseta } from "@/assets";

const MyDiv = ({ text, children }) => {
    return (
        <div className="flex flex-col items-center gap-3  cursor-pointer">
            <div className="flex place-items-center p-4 rounded-full bg-white hover:shadow-md duration-300 ease-in-out">
                {children}
            </div>
            <p className="font-bold text-dark-gray-2">{text}</p>
        </div>
    );
};
const info = [
    {
        component: Camiseta,
        text: "Camisetas",
    },
    {
        component: Calca,
        text: "Calças",
    },
    {
        component: Cap,
        text: "Bonés",
    },
    {
        component: Headset,
        text: "Headsets",
    },
    {
        component: Sapato,
        text: "Tênis",
    },
];

const IconsCollections = () => {
    return (
        <Section
            title={"Coleções em destaque"}
            titleAlign={"center"}
            className="py-20 md:py-25"
        >
            <div className="flex items-center justify-center gap-4.5 md:gap-12 overflow-x-auto">
                {info.map((item, id) => {
                    const Component = item.component;
                    return (
                        <MyDiv key={id} text={item.text}>
                            <Component className="hover:fill-primary hover:stroke-primary"/>
                        </MyDiv>
                    );
                })}
            </div>
        </Section>
    );
};

export default IconsCollections;
