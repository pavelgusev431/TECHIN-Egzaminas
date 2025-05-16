import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { getProductsById } from "../../../helpers/getProduct.js";
import MyProduct from "./MyProduct.jsx";

const MyProductList = ({ update, setUpdate }) => {
  const {
    auth: { id },
  } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProductsById(id);
        setProducts(response.data || []);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setProducts([]);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProducts();
  }, [id, update]);

  return (
    <div className="max-w-full mx-auto">
      <div className="flex items-center gap-3 mb-6"></div>

      {(loading & <p className="text-gray-500">Loading...</p>) ||
        (error & <p className="text-red-500">{error}</p>) ||
        (
          <>
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <MyProduct
                    key={product.id}
                    product={product}
                    setUpdate={setUpdate}
                  />
                ))}
              </div>
            )}
          </>
        )}
    </div>
  );
};

export default MyProductList;
