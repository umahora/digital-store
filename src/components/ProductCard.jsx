const ProductCard = () => {
    return(
        <div className="font-inter flex flex-col items-center leading-6 border border-red-500">
            {/* 292x321 */}
            <img src="public/icon.svg" className="min-w-[292px] min-h-[321px]"/>
            <div className="flex flex-col gap-2 pt-4 self-start">
                <h2 className="text-light-gray text-xs font-bold ">Tenis</h2>
                <h2 className="text-dark-gray-2 text-2xl">K-Swiss V8 - Masculino</h2>
                <div className="flex gap-2"> 
                    <h3 className="text-light-gray line-through">R$:203,20</h3>
                    <h3 className="font-bold">R$:203,20</h3>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;