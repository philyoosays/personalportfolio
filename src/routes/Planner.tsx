import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector, } from 'react-redux';
import { TopMenu } from '../components';
import { PlannerStore } from '../redux';
import axios from 'axios';
import config from '../config';

import './styles/planner.scss';

const MENU_ITEMS = ['dates', 'places', 'picks', 'logout'];

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;

class Auth0ToUser {
    email: string;
    email_verified: boolean;
    fname: string;
    lname: string;
    locale: string;
    name: string;
    nickname?: string;
    access: string[];
    picture?: string;
    sub?: string;
    updated_at?: Date;
    constructor({
        email,
        email_verified,
        family_name,
        given_name,
        locale,
        name,
        nickname,
        access,
        picture,
        sub,
        updated_at,
    }: any) {
        this.email = email || '';
        this.email_verified = email_verified || false;
        this.fname = given_name || '';
        this.lname = family_name || '';
        this.locale = locale || '';
        this.name = name || '';
        this.nickname = nickname || '';
        this.picture = picture || '';
        this.sub = sub || '';
        this.updated_at = updated_at;
        this.access = access || [];
    }
}

function Planner() {
    const dispatch = useDispatch();
    const { user: authUser } = useAuth0();
    const { user } = useSelector((state: any) => state.user)

    useEffect(() => {
        if (authUser && !user.id) {
            const userToSend = new Auth0ToUser(authUser);
            axios.post(`${config.serverURL}/api/users`, userToSend)
            .then(res => res.data)
            .then(res => {
                PlannerStore.setToken(res.token)(dispatch)
                return res;
            })
            .then(res => PlannerStore.setUser(res)(dispatch))
            .catch(console.error)
        }
    }, [authUser, user, dispatch]);

    return (
        <div className="planner">
            <TopMenu items={MENU_ITEMS} />
            <div className="planner-content">
                <Outlet />
            </div>
        </div>
    );
};

const PlannerComponent = () => (
    <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN || ''}
        clientId={REACT_APP_AUTH0_CLIENT_ID || ''}
        redirectUri={window.location.origin + '/planner/dates'}
    >
        <Planner />
    </Auth0Provider>
);

export default PlannerComponent
