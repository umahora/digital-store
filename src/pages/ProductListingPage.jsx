import Layout from '../layouts/Layout'
const ProductListingPage = () => {
    return (
        <Layout>
            <div className='h-screen bg-light-gray-3 flex flex-col justify-center items-center gap-10 py-20 border-amber-300 border-10'>
                <h2 className="font-bold text-7xl text-center">Produtos</h2>
            </div>
        </Layout>
    );
}

export default ProductListingPage;