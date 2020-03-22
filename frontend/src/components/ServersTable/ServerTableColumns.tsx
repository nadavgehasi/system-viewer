import React from "react";
import {Tag} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-regular-svg-icons/faEdit";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons/faTrashAlt";
import {faRedoAlt} from "@fortawesome/free-solid-svg-icons/faRedoAlt";

const serversTableColumns = [
    {
        title: 'שם השרת',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'שם המערכת',
        dataIndex: 'system',
        key: 'system',
    },
    {
        title: 'מבצעי/טסטים',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: Array<string>)  => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'Tests') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'סטטוס',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record:any) => (
            <span>
                <FontAwesomeIcon icon={faRedoAlt} />
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
),},
];

export default serversTableColumns;
