import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";
import ProductCard from "../components/ProductCard";
import Sale from "../components/Sale";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
    const products = useAxios('/products')
    return (
        <div>
            <Banner></Banner>
            <Sale></Sale>
            <div>
                <div className="my-14 flex justify-center rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {products.length > 0 ?
                            products.slice(0, 8).map(x => <ProductCard key={x._id} obj={x}></ProductCard>) :
                            <>
                                <h2 className="font-bold text-5xl">Products Unavailable</h2>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Faq></Faq>
            <ContactForm></ContactForm>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;