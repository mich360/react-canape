import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name.trim() === "") {
      return; // タスク名が空の場合、追加しない
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, completed: false }
    ]);
    todoNameRef.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }; 

  return (
    <>
      <Header />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスク追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div id="task-notdone">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;






// import { useState, useRef } from "react";
// import TodoList from "./TodoList";
// import { v4 as uuidv4 } from 'uuid';
// import Header from './Header';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const todoNameRef = useRef();

//   const handleAddTodo = () => {
//     const name = todoNameRef.current.value;
//     if (name.trim() === "") {
//       return; // タスク名が空の場合、追加しない
//     }
//     setTodos((prevTodos) => [
//       ...prevTodos,
//       { id: uuidv4(), name: name, completed: false }
//     ]);
//     todoNameRef.current.value = "";
//   };

//   const toggleTodo = (id) => {
//     setTodos((prevTodos) => {
//       return prevTodos.map((todo) => {
//         if (todo.id === id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//     });
//   };
//   const handleClear = () => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   }; 
//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input type="text" ref={todoNameRef} />
//       <button onClick={handleAddTodo}>タスク追加</button>
//       <button　onClick={handleClear}>完了したタスクの削除</button>
//       <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
//     </>
//   );


//   return (
//     <>
//       <Header />
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       {/* 以下省略 */}
//     </>
//   );

// }

// export default App;






// // import { useState, useRef } from "react";
// // import TodoList from "./TodoList";
// // import { v4 as uuidv4 } from 'uuid';

// // function App() {
// //   const [todos, setTodos] = useState([]);

// //   const todoNameRef = useRef();

// //   const handleAddTodo = () => {
// //     // タスクを追加する。
// //   const name = todoNameRef.current.value;
// //   setTodos((prevTodos) => {
// //     return[...prevTodos, { id: uuidv4(), name: name, completed: false }];
// //     　　　　　　　　　　　　　
// //   });
// //   todoNameRef.current.value = ""
// //   // todoNameRef.current.value = null;  
  
// //   };

// //   const toggleTodo = (id) => {
// //     const newTodos = [...todos];
// //     const todo = newTodos.find((todo) => todo.id === id);
// //     todo.completed = !todo.completed;
// //     setTodos(newTodos);
// //   };

// //   return (
// //   <>
// //     <TodoList todos={todos} toggleTodo={toggleTodo} />
// //     <input type="text" ref={todoNameRef} />
// //     <button onClick={handleAddTodo} >タスク追加</button>
// //     <button>完了したタスクの削除</button>
// //     　<div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
// // 　</>
// //  ); 
// // }

// // export default App;
