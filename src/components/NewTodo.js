import React, { useState } from "react";
import style from "./newtodo.module.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: " ", desc: " " });

  // distructuring
  const { title, desc } = todo;

  const handleInputChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:" " ,desc:" "})

  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label html For="title">
          Title:{" "}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label html For="desc">
          Title:{" "}
        </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;

// import React, { useState } from "react";

// const NewTodo = (props) => {

//     const [todo, setTodo] = useState("");

//   const handleInputChange =(event) =>
//   {

//   setTodo(event.target.value);

//   };

//   const handleSubmit=(event) =>
// {
// event.preventDefault();
// props.onTodo(todo);

// };

//     return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="todo">New Todo :</label>
//       <input type="text" id="todo" name="todo" value={todo} onChange={handleInputChange} />
//       <button>add Todo</button>
//     </form>
//   );
// };

// export default NewTodo;
