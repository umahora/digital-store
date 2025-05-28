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

const IconsCollections = () => {



    return (
        <Section title={"Coleções em destaque"} titleAlign={"center"} className="py-20 md:py-25">
            <div className="flex items-center justify-center gap-4.5 md:gap-12 overflow-x-auto">
                <MyDiv text="Camisetas">
                    <Camiseta className="hover:fill-primary"/>
                </MyDiv>
                <MyDiv text="Camisetas">
                    <Calca className="hover:fill-primary"/>
                </MyDiv>
                <MyDiv text="Bonés">
                    <Cap className="hover:fill-primary"/>
                </MyDiv>
                <MyDiv text="Headsets">
                    <Headset className="hover:fill-primary hover:stroke-primary "/>
                </MyDiv>
                <MyDiv text="Tênis">
                    <Sapato className="hover:fill-primary"/>
                </MyDiv>
            </div>
        </Section>
    );
};

export default IconsCollections;
