import React, { useState } from "react";
import { Input, Modal } from "antd";
import "antd/lib/modal/style/index.css";
import "antd/lib/button/style/index.css";
import "./AddModal.css";

interface AddModalProps {
  title: string;
  visible: boolean;
  onOk: (e: React.MouseEvent<HTMLElement>, newObject: any) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>, newObject: any) => void;
  newObj: any;
}

const AddModal: React.FC<AddModalProps> = ({
  title,
  visible,
  onOk,
  onCancel,
  newObj
}) => {
  const [newObject, setNewObject] = useState(newObj);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    onOk(e, newObject);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    onCancel(e, newObject);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={"הוסף"}
      cancelText={"בטל"}
    >
      {Object.entries(newObject).map(objectEntry => (
        <h3>
          <span>{objectEntry[0]}: </span>
          <Input
            placeholder={String(objectEntry[1])}
            onChange={e => {
              newObj[objectEntry[0]] = e.target.value;
              setNewObject(newObj);
            }}
          />
        </h3>
      ))}
    </Modal>
  );
};

export default AddModal;
