import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addToCart1 } from "../redux/cart/cartAction";
import { fetchProducts } from "../redux/products/productAction";

const ProductContainer = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart1 = (product) => {
    dispatch(addToCart1(product));
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
                   <span>{product.price}</span>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      onClick={() => handleAddToCart1(product)}
                      className="btn btn-sm btn-outline-success"
                    >
                      Add to cart
                    </button>

                    <Link to={`/products/${product.id}`}>
                      <button className="btn btn-sm btn-outline-danger">
                        Details
                      </button>
                    </Link>
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
