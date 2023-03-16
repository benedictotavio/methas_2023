import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../context/UserContext';

interface PropType {
    component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
    const { authenticated } = useContext(Context)
    
    if (authenticated) return <Component />;
    return <Navigate to='/login' />;
};

export default PrivateRoute;