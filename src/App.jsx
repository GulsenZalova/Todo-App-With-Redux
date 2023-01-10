import AddToDo from "./pages/AddToDo"
import ToDoList from "./pages/ToDoList"
import AboutPage from "./pages/AboutPage"
import { Link, Route, Routes } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <>
      <header>
        <nav className="navList">
          <ul>
            <Link className="link" to='/'>Add ToDo</Link>
            <Link className="link" to='/todolist'>ToDo List</Link>
            <Link className="link" to='/aboutpage'>About Page</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<AddToDo />}></Route>
        <Route path='/todolist' element={<ToDoList />}></Route>
        <Route path='/aboutpage' element={<AboutPage />}></Route>
      </Routes>
    </>
  )
}

export default App
