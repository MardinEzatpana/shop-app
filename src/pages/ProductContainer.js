import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../redux/products/productAction"

const ProductContainer = () => {
    const { products, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    return (
        <>
        <div className="container">
            <div className="row mt-2  p-5 g-3">
                {loading && <h3>Loading ....</h3>}
                {error && <h3>{error}</h3>}
                {products && products.map(product => (
                    <div className="col-md-3 " key={product.id} >
                        <div className="card">
                            <img className="card-img-top" style={{height: 300}} src={product.image} alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{product.title}</h6>
                                <p className="card-text">
                                    {product.category}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button  className="btn btn-sm btn-outline-success">
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </>
    )
}

export default ProductContainer;