import React from "react";
import Layout from "@/layouts/Layout";
import ProductListing from "../components/ProductListing";
import OfferSpecial from "../components/OfferSpecial";

const Home = () => {    
    return (
        <Layout>
            <ProductListing />
            <OfferSpecial/>
        </Layout>
    );
};

export default Home;
