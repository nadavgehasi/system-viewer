import {Tag} from "antd";
import React from "react";

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
                <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                <a>Delete</a>
            </span>
),},
];

export default serversTableColumns;
