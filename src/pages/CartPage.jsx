import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { axiosBase } from "../hooks/useAxios";

const CartPage = () => {
    const { user } = useAuth()
    const [cart, setCart] = useState([])

    //send filter via post method
    const filterEmail = user.email
    useEffect(() => {
        axiosBase(`/cart/${filterEmail}`)
            .then(res => {
                console.log(res.data)
                setCart(res.data)
            })
    }, [filterEmail])


    const handleDeleteCart = (id) => {
        axiosBase.delete(`/cart/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Product deleted from cart.',
                        'success'
                    )
                    const remaining = cart.filter(x => x._id !== id)
                    setCart(remaining)
                }
            })

        console.log('clicked: ', id)
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20">
                <h2>My Cart</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(x =>
                                    <tr key={x._id}>
                                        <th>{x._id}</th>
                                        <td>{x.productName}</td>
                                        <td>{x.quantity}</td>
                                        <td>{x.productPrice}</td>
                                        <td>
                                            <button onClick={() => handleDeleteCart(x._id)} className="btn btn-xs">X</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartPage;