import {Link} from "react-router-dom";
import React from "react";

import "./Menu.css";


const Menu = () => {
    return (
        <Menu defaultSelectedKeys={["/table"]}>
            <Menu.Item key="/table">
                <Link to="table">טבלה</Link>
            </Menu.Item>
            <Menu.Item key="/teams">
                <Link to="/teams">צוותים</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Menu;