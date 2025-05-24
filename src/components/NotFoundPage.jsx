import Layout from '../layouts/Layout'

const NotFoundPage = () => {
    return (
        <Layout>
            <div className='h-screen bg-light-gray-3 flex flex-col justify-center items-center gap-10 py-20'>
                <h2 className="font-bold text-7xl text-center">❌ 404 ❌</h2>
            </div>
        </Layout>
    );
}

export default NotFoundPage;