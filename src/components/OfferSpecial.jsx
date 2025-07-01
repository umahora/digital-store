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
            <section className="flex flex-col items-center lg:flex-row gap-6.5  pb-8.5 md:py-8.5">
                {/* left */}
                <section className="md:flex-1 flex justify-center">
                    <div className="relative">
                        <img className="relative py-13 w-75 md:w-143 object-contain z-30" src={image} />
                        <div className="absolute -bottom-40 lg:-bottom-70 lx:-bottom-60 left-1/2 -translate-1/2 h-70 w-70 md:min-h-116.5 md:w-116.5
                        bg-linear-to-t from-white from-40% to-[#4400ff36] 
                        rounded-full z-0"></div>

                    </div>
                </section>

                {/* right */}
                <section className="flex flex-col md:flex-1 items-start gap-5">
                    <span className="text-warning font-bold text-sm">{subtitle}</span>
                    <h4 className="text-[28px] md:text-[48px] font-bold leading-9 md:leading-12.5 tracking-wide text-dark-gray-2 ">{title}</h4>
                    <p className="text-sm md:text-base leading-5.5 text-dark-gray-2 font-medium">{description}</p>
                    <MyButton myStyle={"default"} path="/" >{buttonText}</MyButton>
                </section>
            </section>
        </Section>
    );
};

export default OfferSpecial;
