import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { UserAuthContext } from '../context/UserContext';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useContext(UserAuthContext);
    const location = useLocation();

    if(isLoading) {
        return <Loader />
    }

    if(user) {
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;