import { ADD, COMPLETE, DEL, UNCOMPLETE } from "./Actions";

export interface IToDo {
  text: string;
  id: string;
}

export type Action =
  | { type: typeof ADD; payload: IToDo }
  | { type: typeof DEL; payload: string }
  | { type: typeof COMPLETE; payload: string }
  | { type: typeof UNCOMPLETE; payload: string };

export interface IStateProps {
  toDos: Array<IToDo>;
  completed: Array<IToDo>;
}

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (
  state: IStateProps = initialState,
  action: Action,
): IStateProps => {
  switch (action.type) {
    case ADD:
      const { text, id } = action.payload;
      return { ...state, toDos: [...state.toDos, { text, id }] };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: state.completed.filter(toDo => toDo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find(toDo => toDo.id === action.payload);

      if (!target) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [...state.completed, target],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(toDo => toDo.id === action.payload);

      if (!aTarget) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        completed: state.completed.filter(toDo => toDo.id !== action.payload),
        toDos: [...state.toDos, aTarget],
      };
    default:
      throw new Error();
  }
};

export default reducer;
