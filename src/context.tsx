import React, { createContext, Dispatch, useContext, useReducer } from "react";
import reducer, { initialState, Action, IStateProps } from "./reducer";

interface IContext {
  state: IStateProps;
  dispatch: Dispatch<Action>;
}

const ToDosContext = createContext<IContext | null>(null);

const ToDosProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const context = useContext(ToDosContext);
  if (!context) throw new Error("Cannot find Provider");
  return context.dispatch;
};

export const useState = () => {
  const context = useContext(ToDosContext);
  if (!context) throw new Error("Cannot find Provider");
  return context.state;
};

export default ToDosProvider;
