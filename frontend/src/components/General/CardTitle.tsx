import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons/faEdit";
import { Link } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons/faTrashAlt";
import React, { ReactElement } from "react";

interface CardTitleProps {
  id: string;
  title: ReactElement;
  deleteCard: (cardId: string) => void;
}

const CardTitle: React.FC<CardTitleProps> = ({ id, title, deleteCard }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faEdit} style={{ float: "right" }} />
      {title}
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => {
          deleteCard(id);
        }}
        style={{ float: "left" }}
      />
    </div>
  );
};

export default CardTitle;
