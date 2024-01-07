import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-item-center justify-content-between">
      {isEditing ? (
        <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget budget={budget} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Budget;
