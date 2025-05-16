import { useNavigate } from 'react-router';
import {AuthContext} from "../../contexts/AuthContext.jsx";
import {useContext} from "react";

const NotFound = () => {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => auth ? navigate("/home") : navigate('/')}>Go back</button>
        </div>
    );
};

export default NotFound;
