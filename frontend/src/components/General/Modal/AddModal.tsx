import React, { useState } from "react";
import { Dropdown, Input, Menu, Modal } from "antd";
import "antd/lib/modal/style/index.css";
import "antd/lib/button/style/index.css";
import "antd/lib/menu/style/index.css";
import "antd/lib/dropdown/style/index.css";
import "./AddModal.css";
import BasicModal from "./BasicModal";
import { System } from "../../../types/system";

interface AddModalProps {
  title: string;
  visible: boolean;
  isAdd: boolean;
  onUpdate: (e: React.MouseEvent<HTMLElement>, newObject: any) => void;
  onAdd: (e: React.MouseEvent<HTMLElement>, newObject: any) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>, newObject: any) => void;
  newObj: any;
  setNewObj: (newObj: any) => void;
}

const AddModal: React.FC<AddModalProps> = ({
  title,
  visible,
  isAdd,
  onUpdate,
  onAdd,
  onCancel,
  newObj,
  setNewObj,
}) => {
  const getContent = (objectEntry: [string, unknown]) => {
    if (objectEntry[1] === "") {
      return (
        <Input
          placeholder={String(objectEntry[1])}
          onChange={(e) => {
            newObj[objectEntry[0]] = e.target.value;
            setNewObj(newObj);
          }}
        />
      );
    } else if (objectEntry[1] instanceof Array) {
      let menuValues = objectEntry[1];
      const menu = (
        <Menu
          onClick={(e) => {
            newObj[objectEntry[0]] = e.key;
            setNewObj(newObj);
          }}
        >
          {menuValues.map((value) => (
            <Menu.Item key={value}>{value}</Menu.Item>
          ))}
        </Menu>
      );
      return (
        <Dropdown overlay={menu} trigger={["click"]}>
          <span
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            בחר {objectEntry[0]}
          </span>
        </Dropdown>
      );
    }
    return <span>{String(objectEntry[1])}</span>;
  };

  return (
    <BasicModal
      title={title}
      visible={visible}
      onOk={(e) => {
        if (isAdd) {
          onAdd(e, newObj);
        }
        onUpdate(e, newObj);
      }}
      onCancel={(e) => onCancel(e, newObj)}
    >
      {Object.entries(newObj).map((objectEntry) => (
        <h3 key="add-modal">
          <span>{objectEntry[0]}: </span>
          {getContent(objectEntry)}
        </h3>
      ))}
    </BasicModal>
  );
};

export default AddModal;
