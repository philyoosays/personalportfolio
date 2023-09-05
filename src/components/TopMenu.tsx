import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import './styles/topMenu.scss';

export namespace Type {
    export interface Props {
        items: string[];
    }
}

const TopMenu = ({ items }: Type.Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth0();
    const menuItems = items.map((item, idx) => {
        if (item === 'logout') {
            return <span onClick={() => logout({ returnTo: window.location.origin })} key={idx}>{item}</span>
        }
        return <span onClick={() => navigate(`/planner/${item}`)} key={idx}>{item}</span>
    })
    return (
        <div className="planner-topMenu">
            {menuItems}
        </div>
    )
}

export default TopMenu;
