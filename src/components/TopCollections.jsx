import MyButton from "./MyButton";
import Section from "./Section";
import { Camisa, Tenis, Headphones } from "@/assets";


const info = [
    {
        discount: 30,
        title: "Novo drop\nSupreme",
        image: Camisa,
    },
    {
        discount: 30,
        title: "Coleção\nAdidas",
        image: Tenis,
    },
    {
        discount: 30,
        title: "Novo\nBeats Bass",
        image: Headphones,
    },
];

const TopCollections = () => {
    return (
        <Section title={"Coleções em destaque"} >
            <div className="grid grid-cols-(--my-grid-template) justify-items-center gap-3">
                {info.map((item, id) => (
                    <div key={id} className="flex items-center bg-[#D8E3F2] relative w-full h-53 md:h-63 p-5 md:px-7.5 rounded-md overflow-hidden duration-300 ease-in-out hover:shadow-md">
                        <div className="grid justify-items-start gap-2.5 relative z-10">
                            {item.discount && (
                                <div className="px-4 py-1.5 leading-5.5 tracking-wide font-bold text-xs md:text-sm text-dark-gray-2 rounded-full bg-[#E7FF86]">
                                    {item.discount}% OFF
                                </div>
                            )}
                            <h3 className="text-[28px] text-dark-gray font-bold" style={{ whiteSpace: "pre-line" }}>
                                {item.title}
                            </h3>
                            <MyButton myStyle={"theme2"} path="/">
                                Comprar
                            </MyButton>
                        </div>
                        <img src={item.image} className="object-cover absolute right-0 -bottom-1 h-full z-0"/>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TopCollections;
