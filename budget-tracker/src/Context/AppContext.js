import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id != action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 1000,
  expenses: [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
    { id: 5, name: "Child Care", cost: 500 },
  ],
};

// This is the thing components import and get the state
export const AppContext = createContext(); // Context created

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
