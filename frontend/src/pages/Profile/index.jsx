import "./styles.scss"
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom"

export function Profile() {
    const user = useSelector((state) => state.user.currentUser);

    const name = user.name;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div>
            <div className="profile">
                <div className="wrapper">
                    <div className="profile-session">
                        <div className="profile-cover">

                            <img className="profile-cover-img" src="https://img.freepik.com/fotos-premium/paisagem-bonita_157744-1239.jpg" />
                            <img className="profile-user-img" src="https://www.arauco.cl/brasil/wp-content/uploads/sites/17/2021/08/CINZA-PURO-185x275--scaled.jpg"/>

                        </div>
                        <div className="profile-info">
                            <div className="profile-info-itens">
                                <h1 className="name">{name}</h1>
                                <button className="button-logout" onClick={handleLogout}><LogoutIcon style={{marginRight: '15px'}}/>Sair</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};