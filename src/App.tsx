import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import TodoItemPage from './components/TodoItempage';
import TodosPages from './components/TodosPages';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

function App() {


  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to='/users'>Пользователь</Link>
          <Link to='/todos'>Список дел</Link>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPages />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          {/* <Route path='/todos/:id' element={<TodoItemPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
