import { useAppSelector } from "../../hooks/hooks";
import Todo from "./Todo";
import "./todos.scss";

const Todos = () => {
    const {isLoading, todos} = useAppSelector(state => state.todos)

    if (isLoading) {
        <h1>loading</h1>;
      }

    return (
        <div className="todos">
            <div className="header__todos">
                <div className="todo__left"><p>Всего задач</p><span>{todos.length}</span></div>
                <div className="todo__rigth"><p>Выполнено</p><div>{todos.filter(item => item.completed).length}<span>из</span>{todos.length}</div></div>
            </div>
            {todos.map(todo => <Todo key={todo._id} {...todo}/>)}
        </div>
    );
};

export default Todos;