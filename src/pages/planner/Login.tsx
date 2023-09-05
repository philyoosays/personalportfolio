import Button from 'yoo-lib/dist/components/Button';
import { useAuth0 } from '@auth0/auth0-react';

import './styles/login.scss';

export namespace Type {
    export interface Props {

    }
}

const Login = (props: Type.Props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="login-container">
            <div className="login-midsection">
                <Button text="Login" onClick={() => loginWithRedirect()} />
            </div>
        </div>
    )
}

export default Login;
