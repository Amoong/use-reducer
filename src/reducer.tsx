export const DEL = "del";
export const ADD = "add";

type Action =
  | { type: typeof ADD; payload: ToDo }
  | { type: typeof DEL; payload: string };

export interface ToDo {
  text: string;
  id: string;
}

interface IStateProps {
  toDos: Array<ToDo>;
  completed: Array<ToDo>;
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
      return { toDos: [...state.toDos, { text, id }], completed: [] };
    case DEL:
      return {
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [],
      };
    default:
      throw new Error();
  }
};

export default reducer;
