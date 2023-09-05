// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles/nav.scss';

export namespace Type {
    export interface Props {
        links: {
            text: string;
            path: string;
        }[];
    }
}

const Nav = (props: Type.Props) => {
    const refLocation = useLocation();
    const makeLinks = () => {
        return props.links.map(({ path, text }, idx) => {
            const addProps: any = {};
            if (refLocation.pathname === path) {
                addProps.className = 'nav-selected';
            }
            return (
                <span {...addProps} key={idx}>
                    <Link to={path}>{text}</Link>
                </span>
            )
        })
    };
    return (
        <div className="nav-container">
            <nav className="nav-main">
                {makeLinks()}
            </nav>
            {/* <div className="nav-highlight">
                <div />
            </div> */}
        </div>
    );
}

export default Nav;
