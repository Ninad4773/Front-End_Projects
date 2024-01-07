import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); // Will stop page from reloading whenever the button is clicked

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    setName((name) => (name = ""));
    setCost((cost) => (cost = ""));

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            className="form-control"
            required="required"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            className="form-control"
            required="required"
            id="cost"
            type="text"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
