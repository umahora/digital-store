import { Tennis } from "@/assets";
import Section from "./Section";
import MyButton from "./MyButton";

const info = {
    subtitle: "Oferta especial",
    title: "Air Jordan edição de colecionador",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    buttonText: "Ver Oferta",
    image: Tennis.Tennis07,
};

const OfferSpecial = () => {
    const { subtitle, title, description, buttonText, image } = info;
    return (
        <Section className="bg-white">
            <section className="flex flex-col items-center lg:flex-row gap-6.5 pb-9">
                {/* left */}
                <section className="relative">
                    <img className="relative py-13 w-75 object-contain z-30" src={image} />
                    <div className="absolute -bottom-40 left-1/2 -translate-1/2 h-70 w-70 
                    bg-linear-to-t from-white from-40% to-[#4400ff36] 
                    rounded-full z-0"></div>
                </section>

                {/* right */}
                <section className="flex flex-col items-start gap-5">
                    <span className="text-warning font-bold text-sm">{subtitle}</span>
                    <h4 className="text-[28px] font-bold leading-9 tracking-wide text-dark-gray-2">{title}</h4>
                    <p className="text-sm leading-5.5 text-dark-gray-2 font-medium">{description}</p>
                    <MyButton myStyle={"default"} path="/" >{buttonText}</MyButton>
                </section>
            </section>
        </Section>
    );
};

export default OfferSpecial;
