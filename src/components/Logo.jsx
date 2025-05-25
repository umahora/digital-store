import { LogoHeader, LogoFooter } from "@/assets";

const Logo = ({ className = "", image}) => {
    const ImgsLogo = {
        header:LogoHeader,
        footer:LogoFooter
    }
    
    return <img className="max-w-[170px] lg:min-w-[253px]" src={`${ImgsLogo[image]}`} />;
};

export default Logo;
