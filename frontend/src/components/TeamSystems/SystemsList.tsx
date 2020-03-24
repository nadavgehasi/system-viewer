
import React, {useState} from "react";
import {getSystems} from "../../api/SystemApi";
import {List} from "antd";
import "./systemsList.css"
import systemCard from "./SystemCard";
import SystemCard from "./SystemCard";

const systemsList = () =>  {
    const [systems, setSystems] = useState(getSystems());

    return (
        <List
            dataSource={systems}
            renderItem={system => (
                <SystemCard system={system}/>
            )}
        />
    );
};


export default systemsList;