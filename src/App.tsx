import { useEffect } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import Todos from "./components/Todos/Todos";
import { useAppDispatch } from "./hooks/hooks";
import { getTodos } from "./store/reducers/todoAction";

import "./app.scss";


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <Logo />
      <Form />
      <Todos />
    </div>
  );
};
export default App;
