const Logo = ({ className = "", image}) => {
    const ImgsLogo = {
        header:"src/assets/logo-header.svg",
        footer:"src/assets/logo-footer.svg"
    }
    
    return <img className="max-w-[170px] lg:min-w-[253px]" src={`${ImgsLogo[image]}`} />;
};

export default Logo;
