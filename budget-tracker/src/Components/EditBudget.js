import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <div>
      <input
        className="form-control"
        required="required"
        id="name"
        type="number"
        value={parseInt(value)}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
