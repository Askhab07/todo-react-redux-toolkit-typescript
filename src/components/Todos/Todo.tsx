import { useAppDispatch } from "../../hooks/hooks";
import { toggleTodo, deleteTodo } from "../../store/reducers/todoAction";
import { ITodos } from "../../types/ITodos";

import "./todo.scss";

const Todo: React.FC<ITodos> = ({ _id, title, completed, created_at }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(_id));
  };

  return (
    <div className="todo">
      <input
        className="form_check"
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch(toggleTodo({ _id, title, completed, created_at }))
        }
      />
      <p>{title}</p>
      <span className="delete" onClick={handleDelete}>
        &#10005;
      </span>
    </div>
  );
};

export default Todo;
