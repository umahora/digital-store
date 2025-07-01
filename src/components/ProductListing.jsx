import { Link } from "react-router";
import ProductCard from "./ProductCard";
import Section from "./Section"
import { TrendingProducts } from "@/data/products";

const MyLink = {
    text: "Ver todos",
    href: "/produtos",
};


const ProductListing = () => {
    return (
        <Section title={"Produtos em alta"}  link={MyLink} >
            <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {TrendingProducts.map((item) => (
                    <Link to={`/produtos/${item.id}`}>
                        <ProductCard key={item.id} product={item} />
                    </Link>
                ))}
            </div>
        </Section>
    );
};
export default ProductListing;
