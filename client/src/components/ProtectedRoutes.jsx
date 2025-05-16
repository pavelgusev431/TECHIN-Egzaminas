import { Route } from 'react-router';
import Protected from './Protected.jsx';
import Home from './protected/Home.jsx';
import MyProducts from "./protected/MyProducts/MyProducts.jsx";

const ProtectedRoutes = () => {
    return (
        <Route element={<Protected />}>
            <Route path="home" element={<Home />}></Route>
            <Route path='myproducts' element={<MyProducts />}></Route>
        </Route>
    );
};

export default ProtectedRoutes;