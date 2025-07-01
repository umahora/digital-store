import Layout from "../layouts/Layout";
import MyButton from "./MyButton";

const NotFoundPage = () => {
    return (
        <div className="h-screen bg-light-gray-3 flex flex-col justify-center items-center gap-10 py-20 text-dark-gray-2">
            <h2 className="font-bold text-7xl text-center">404</h2>
            <h2 className="text-3xl text-center ">Página em Construção 🚧</h2>
            <MyButton myStyle={"default"} path="/" >Go Home</MyButton>
        </div>
    );
};

export default NotFoundPage;
