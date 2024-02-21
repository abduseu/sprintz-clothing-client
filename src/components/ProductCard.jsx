import { Link } from "react-router-dom";

const ProductCard = ({ obj }) => {
    const { _id, name, brand, type, price, description, rating, image } = obj
    return (
        <div className="p-3 rounded flex flex-col border border-gray bg-white">
            <div className="pb-4">
                <img className="rounded h-60 mx-auto" src={image} />
            </div>
            <h1 className="font-bold text-lg">{name}</h1>
            <div className="font-medium">
                <h4>Brand: {brand}</h4>
                <h4>Type: {type}</h4>
            </div>
            <p className="pt-3 grow">{description}</p>
            <div className="flex justify-between px-1">
                <p className="py-3 font-bold">Price: <span>${price}</span></p>
                <p className="py-3 font-bold">Rating: <span>{rating || 'none'}</span></p>
            </div>

            <div className="flex flex-col gap-1">
                <Link to={`/update-product/${_id}`}><button className="btn btn-neutral btn-sm w-full rounded">Update</button></Link>
                <Link to={`/products/${_id}`}><button className="btn btn-neutral btn-sm w-full rounded">Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;