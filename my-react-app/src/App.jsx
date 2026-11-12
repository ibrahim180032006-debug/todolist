import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todolist from './Todolist/Todolist';
import { TodosUseContext } from './Context/Todocontext';

const initialtodos = [
  {
    id: uuidv4(),
    title: 'write your first mission',
    details: 'ex: i need sleep at 20:00',
    isconfirme: false,
  },
];

function App() {
  // نحمّل من localStorage مرة واحدة بأمان
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos');
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) ? parsed : initialtodos;
    } catch {
      return initialtodos;
    }
  });

  // مزامنة واحدة فقط
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        background: '#191d1f',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <TodosUseContext.Provider value={{ todos, setTodos }}>
        <Todolist />
      </TodosUseContext.Provider>
    </div>
  );
}

export default App;