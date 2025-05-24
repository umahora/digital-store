import React from "react";
import Layout from "../layouts/Layout";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

const MyLink = {
    "text": "Ver todos",
    "href": "/produtos",
};
const Home = () => {
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
            </Section>
        </Layout>
    );
};

export default Home;
