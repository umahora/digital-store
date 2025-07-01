import FilterBar from "../components/FIlterBar";
import ProductCard from "../components/ProductCard";
import Layout from "../layouts/Layout";
import { TrendingProducts } from "@/data/products";
import { useState } from "react";
import { Filter } from "@/assets";

const ProductListingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <Layout>
            <section className="relative max-w-[1440px] mx-auto px-3 py-10 md:px-5 lg:px-25 flex flex-col gap-10">
                <div className="flex flex-col justify-center gap-2.5 lg:flex-row lg:justify-between lg:items-end">
                    <h3 className="font-bold text-dark-gray-2 order-2 lg:order-1">
                        Resultados{" "}
                        <span>{TrendingProducts.length} produtos</span>
                    </h3>

                    <div className="flex justify-between order-1 gap-4 lg:order-2">
                        <div className="flex-1 lg:w-[332px] flex justify-between p-4 border border-dark-gray-2/60 rounded-md">
                            <label
                                htmlFor="filterM"
                                className="font-bold text-dark-gray-2"
                            >
                                Ordenar por:
                            </label>
                            <select name="filterM" className="text-dark-gray-2">
                                <option value="maior preco">Maior preço</option>
                                <option value="menor preco">Menor preço</option>
                                <option value="mais relevantes">
                                    Mais relevantes
                                </option>
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={toggleOpen}
                            className="grid lg:hidden place-content-center p-4 bg-primary rounded-sm
                        hover:bg-primary/90
                        active:bg-primary"
                        >
                            <Filter className="fill-white size-6" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-7 justify-center">
                    <FilterBar isOpen={isOpen} toggleOpen={toggleOpen} />
                    <div className="grid justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TrendingProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProductListingPage;
