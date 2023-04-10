import { useAppDispatch } from "../../hooks/hooks";
import { toggleTodo, deleteTodo } from "../../store/reducers/todoAction";
import { ITodos } from "../../types/ITodos";

import "./todo.scss";

const Todo: React.FC<ITodos> = ({ id, title, completed, created_at }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo">
      <input
        className="form_check"
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch(toggleTodo({ id, title, completed, created_at }))
        }
      />
      <p>{title}</p>
      <button type="button" className="btn__loading">
        <span className="delete" onClick={handleDelete}>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      </button>
    </div>
  );
};

export default Todo;
