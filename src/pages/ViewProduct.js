import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addToCart2 } from "../redux/cart/cartAction";
import { fetchProduct } from "../redux/viewProduct/viewProductAction";
import { Link, useParams } from "react-router-dom";

const ViewProduct = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const {productId} = useParams();

  

  useEffect(() => {
    dispatch(fetchProduct(productId));
  },[dispatch, productId ] );

  function handleAddToCart2(product) {
    dispatch(addToCart2(product));
    Swal.fire({
      title: "Product added",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  }

  return (
    <div>
      {loading && <h3>Loading ....</h3>}
      {error && <h3>{error}</h3>}
      {product &&  (
        <div className="col-md-8 " key={product.id}>
          <div className="card border-3 shadow-lg h-100">
            <img
              className="card-img-top"
              style={{ height: 250, width:250 }}
              src={product.image}
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">{product.title}</h6>
              <p className="card-text"> {product.description}</p>
              <span>{product.price}</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                onClick={() => handleAddToCart2(product)}
                className="btn btn-sm btn-outline-success"
              >
                Add to cart
              </button>
              <Link to={"/products"}>
              <button className="btn btn-sm btn-outline-danger">
                Go to Products
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
