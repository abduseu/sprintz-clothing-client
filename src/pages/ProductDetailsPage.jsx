import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios, { axiosBase } from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const ProductDetailsPage = () => {
    const {id} = useParams()
    const product = useAxios(`/products/${id}`)
    const { _id, name, brand, type, price, description, rating, image } = product
    const {user} = useAuth()

    const handleAddCart = ()=>{
        const userId = user.email
        const productId = _id
        const productName = name
        const quantity = 1
        const productPrice = price

        const cart = {userId, productId, productName, quantity, productPrice}

        
        axiosBase.post('/cart', cart)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire(
                    'Product Added!',
                    'Your Product added to shopping cart!',
                    'success'
                )
            }
        })
    }


    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-xl md:text-4xl p-10 md:p-20">
                <h2>Product Details</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="max-w-2xl mx-auto md:flex">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="px-5 text-xl">
                        <div className="font-bold text-2xl">
                            {name}
                        </div>
                        <div>
                            {brand}
                        </div>
                        <div>
                            {type}
                        </div>
                        <div>
                            {description}
                        </div>
                        <div>
                            <div className="rating">
                                {(parseInt(rating)==0 || !rating) && <input type="radio" name="rating-1" className="rating-hidden" checked readOnly />}
                                {parseInt(rating)==1 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked readOnly /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==2 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked readOnly /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==3 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked readOnly /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==4 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked readOnly /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==5 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked readOnly /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                            </div>
                            <div>Rating: {rating || 'none'}</div>
                        </div>
                        <div className="font-bold py-2">Price: ${price}</div>
                    </div>
                </div>
                <div className="text-center pt-10">
                    <button onClick={handleAddCart} className="btn btn-neutral">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;