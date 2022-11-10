import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return <div>
        {
            user.email ? <Outlet /> : <Navigate to='/signin' />
        }

    </div>
};

export default PrivateRoute;