import { useState, useEffect } from "react"
import Head from 'next/head'
import Header from "../components/Header";
import TodoList from "../components/TodoList";

export default function Home() {
  const [darkModeStatus, setDarkModeStatus] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if(todos){
      setTodos(JSON.parse(todos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const dayInlineStyle = {
    backgroundImage: 'url("/img/day1.jpeg")'
  }

  const nightInlineStyle = {
    backgroundImage: 'url("/img/night1.jpeg")'
  }

  const updateTodo = id => {
    // complete and uncomplete toggle of todo (update)
    const newTodos = todos.map(t => t.id == id ? { ...t, completed: !t.completed } : t);
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(t => t.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className={`${darkModeStatus ? 'dark' : ''} h-screen font-josefin`}>
      <div className="bg-white dark:bg-gray-900 h-full overflow-x-auto">
        <Head>
          <title>TodoList</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Top header of light and dark images */}
        <div className="h-72 bg-cover" style={darkModeStatus ? nightInlineStyle : dayInlineStyle}>
          <div className="h-full bg-purple-500 bg-opacity-50"></div>
        </div>

        {/* overlaying div of top background header */}
        <div className="h-52 -mt-72 sm:-mt-60 py-8 px-4 sm:px-16 max-w-screen-sm mx-auto">
          <Header darkModeStatus={darkModeStatus} setDarkModeStatus={setDarkModeStatus} todos={todos} setTodos={setTodos} />

          {/* Todo list components */}
          <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
      <a href="https://github.com/Sai-Manikanta/todolist-nextjs">Code: https://github.com/Sai-Manikanta/todolist-nextjs</a>
    </div>
  )
}
