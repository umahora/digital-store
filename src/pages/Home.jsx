import React from "react";
import Layout from "@/layouts/Layout";
import ProductListing from "../components/ProductListing";
import OfferSpecial from "../components/OfferSpecial";
import TopCollections from "../components/TopCollections";

const Home = () => {    
    return (
        <Layout>
            <TopCollections/>
            <ProductListing />
            <OfferSpecial/>
        </Layout>
    );
};

export default Home;
