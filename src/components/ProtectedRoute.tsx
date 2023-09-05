import { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

import './styles/protectedRoute.scss';

export namespace Type {
    export interface Props {
        view: ReactElement;
    }
}

const ProtectedRoute = (props: Type.Props) => {
    const { isAuthenticated } = useAuth0();
    // if (isAuthenticated) return props.view;
    // else return <></>;
    return props.view;
}

export default ProtectedRoute;
