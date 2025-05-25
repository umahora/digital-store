import React from "react";
import Layout from "@/layouts/Layout";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { Tennis } from "@/assets";
import { TrendingProducts } from "@/data/products";
const MyLink = {
    text: "Ver todos",
    href: "/produtos",
};
const Home = () => {
    console.log(TrendingProducts);
    
    return (
        <Layout>
            {/* Queima de stoque Nike 🔥 */}
            <Section title={"Produtos em alta"} titleAlign="left" link={MyLink}>
                {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,4fr))]gap-2.5 md:gap-6 justify-center items-center border">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div> */}

                <ProductCard product={TrendingProducts[0]}/>
                <ProductCard product={TrendingProducts[1]}/>
                <ProductCard product={TrendingProducts[2]}/>
                <ProductCard product={TrendingProducts[2]}/>
            </Section>
        </Layout>
    );
};

export default Home;
