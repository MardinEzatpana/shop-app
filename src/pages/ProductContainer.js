import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../redux/cart/cartAction";
import { fetchProducts } from "../redux/products/productAction";

const ProductContainer = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      title: "Product added",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2  p-5 g-3 ">
          {loading && <h3>Loading ....</h3>}
          {error && <h3>{error}</h3>}
          {products &&
            products.map((product) => (
              <div className="col-md-3 " key={product.id}>
                <div className="card border-3 shadow-lg h-100">
                  <img
                    className="card-img-top"
                    style={{ height: 300 }}
                    src={product.image}
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                    {product.title.length < 15
                          ? product.title
                          : `${product.title.slice(0, 15)} ...`}</h6>
                    <p className="card-text"> {product.description.length < 40
                          ? product.description
                          : `${product.description.slice(0, 40)} ...`}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-sm btn-outline-success"
                    >
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
  );
};

export default ProductContainer;
