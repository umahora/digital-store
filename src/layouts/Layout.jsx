import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Definindo o componente de layout
const Layout = ({ children }) => {
    const [altura, setAltura] = useState(0);

    const test = {
        tt: `pt-[${altura}px]`,
    };

    return (
        <>
            <Header onHeight={setAltura} />
            <main className="pt-[70px] lg:pt-[184px]">{children}</main>
            <Footer />
            
            {/* {console.log(altura)} */}
        </>
    );
};

export default Layout;
