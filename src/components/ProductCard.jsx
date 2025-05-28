const ProductCard = ({ product }) => {
    const { id, name, category, originalPrice, currentPrice, discount, image } =
        product;

    const formatPrice = (price) => {
        const currencyFormat = price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return currencyFormat;
    };

    return (
        <div className="flex flex-col items-center leading-6">
            {/* 292x321 */}
            <div
                className="flex place-items-center p-5 bg-white rounded-md relative
                h-[180px]
                md:h-[250px]
                lg:h-[270px]
                xl:h-[321px]
                duration-300 ease-in-out
                hover:-translate-y-[4px]
                hover:shadow-md
                cursor-pointer"
            >
                {discount && (
                    <div
                        className="absolute 
                        top-3.5
                        left-3.5
                        px-4 py-1.5 
                        leading-5.5 
                        tracking-wide 
                        font-bold text-xs md:text-sm 
                        text-dark-gray-2 
                        rounded-full bg-[#E7FF86]"
                    >
                        {discount}% OFF
                    </div>
                )}
                <img className="h-full object-contain" src={image} />
            </div>
            <div className="flex flex-col gap-2 pt-4.5 pb-10 self-start">
                <h2 className="text-light-gray text-xs font-bold ">
                    {category}
                </h2>
                <h2 className="text-dark-gray-2 flex">{name}</h2>
                <div className="flex gap-2">
                    <h3 className="text-light-gray line-through ">
                        {formatPrice(originalPrice)}
                    </h3>
                    <h3 className="font-bold text-base">{formatPrice(currentPrice)}</h3>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
