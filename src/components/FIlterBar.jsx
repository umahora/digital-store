import { TrendingProducts } from "@/data/products";
import { useState } from "react";
const info = {
    titleFilter: ["Marca", "Categoria", "Gênero", "Estado"],
    marca: ["Adidas", "Calencinga", "K-Swiss", "Nike", "Puma"],
    categoria: ["Esporte e Lazer", "Casual", "Utilitário", "Corrida"],
    genero: ["Masculino", "Feminino", "Unisex"],
    estado: ["Novo", "Usado"],
};



const MyForm = ({className = ""}) => {
    return (
        <form
            action=""
            className={`bg-white p-7.5 flex flex-col gap-2 text-dark-gray-2 ${className}`}
        >
            <h3 className="font-bold">Filtrar por</h3>
            <hr className="border-light-gray-2" />
            <div className="flex flex-col gap-5">
                {info.titleFilter.map((item, index) => {
                    const key = item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");

                    const options = info[key];
                    const isRadio = key === "estado";
                    return (
                        <div key={index} className="flex flex-col gap-2.5">
                            <h3 className="font-bold">{item}</h3>
                            {options?.map((option, i) => (
                                <p
                                    key={i}
                                    className="flex items-center gap-2.5"
                                >
                                    <input
                                        type={isRadio ? "radio" : "checkbox"}
                                        name={key}
                                        value={option.toLowerCase()}
                                        className={`relative peer w-5.5 h-5.5 border-1 
                                            ${
                                                isRadio
                                                    ? "rounded-full"
                                                    : "rounded-sm"
                                            }
                                            checked:border-0 shrink-0
                                            border-dark-gray-3/70
                                            checked:bg-primary
                                            appearance-none mt-1`}
                                    />
                                    {!isRadio ? (
                                        <svg
                                            className="absolute w-4 h-4 mt-1 ml-1 hidden pointer-events-none stroke-white fill-none peer-checked:block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    ) : null}
                                    <label htmlFor={option.toLowerCase()}>
                                        {option}
                                    </label>
                                </p>
                            ))}
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

const FilterBarMobile = ({ isOpen }) => {
    return (
        <MyForm
            className={`absolute h-full left-0 top-0 z-40 duration-300 ease-in-out 
                ${
                    isOpen ? "translate-x-0 " : "-translate-x-full"
                } w-[80%] lg:hidden rounded-0`}
        />
    );
};


const FilterBar = ({ isOpen, toggleOpen }) => {
    return (
        <>
            <MyForm className="lg:w-[408px] hidden lg:flex h-full rounded-md"/>
            <FilterBarMobile isOpen={isOpen}/>

            
            {/* OVERLAY  */}
            <button
                onClick={toggleOpen}
                className={`h-screen inset-0 absolute left-0 top-0 z-10 duration-300 ease-in-out 
                ${isOpen ? "bg-dark-gray/40" : "hidden"}`}
            ></button>
        </>
    );
};
export default FilterBar;
