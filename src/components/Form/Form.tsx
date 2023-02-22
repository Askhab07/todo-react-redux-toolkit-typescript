import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo, getTodos } from "../../store/reducers/todoAction";
import "./form.scss";

const Form = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    if (search.length) {
      dispatch(addTodo(search));
      setSearch("");
    }
  };
  return (
    <div className="form">
      <input className="form__input" type="text" value={search} onChange={handleChange} placeholder="Что вы планируете сделать?"/>
      <button onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default Form;
