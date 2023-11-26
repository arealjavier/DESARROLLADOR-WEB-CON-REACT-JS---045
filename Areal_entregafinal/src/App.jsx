// App.js

import React, { useState, useEffect } from 'react';
import './app.css'; // Importamos el archivo de estilos de la aplicación
import './index.css'; // Importamos el archivo de estilos global

// Componente de Tarea
const TaskItem = ({ task, onComplete, onDelete }) => {
  // Estado local para gestionar la apariencia de la tarea (completada o no)
  const [isCompleted, setIsCompleted] = useState(task.completed);

  // Maneja el evento de completar una tarea
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onComplete(task.id);
  };

  return (
    <div className="task-item">
      {/* Muestra el nombre de la tarea con posible tachado si está completada */}
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      {/* Botón para completar o desmarcar la tarea */}
      <button onClick={handleComplete}>
        {isCompleted ? 'Desmarcar' : 'Completar'}
      </button>
      {/* Botón para eliminar la tarea */}
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

// Componente de Lista de Tareas
const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className="task-list">
      {/* Mapea la lista de tareas y renderiza un componente TaskItem para cada tarea */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

// Componente de Formulario
const TaskForm = ({ onAddTask }) => {
  // Estado local para gestionar la entrada del usuario (nombre de nueva tarea)
  const [newTask, setNewTask] = useState('');

  // Maneja el cambio en la entrada del usuario utilizando onChange
  const handleInputChange = (e) => {
    // Actualiza el estado local con el valor del input
    setNewTask(e.target.value);
  };

  // Maneja el envío del formulario para agregar una nueva tarea
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Verifica que la nueva tarea no esté vacía antes de agregarla
    if (newTask.trim() !== '') {
      // Llama a la función proporcionada desde el componente principal para agregar la nueva tarea
      onAddTask({ id: Date.now(), name: newTask, completed: false });
      // Limpia el campo de entrada después de agregar la tarea
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="task-form">
      {/* Input para el nombre de la tarea con onChange para manejar cambios en la entrada del usuario */}
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      {/* Botón para agregar la tarea */}
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

// Componente Principal
const App = () => {
  // Estado principal para almacenar las tareas
  const [tasks, setTasks] = useState([]);

  // Efecto para cargar las tareas desde localStorage al inicio de la aplicación
  useEffect(() => {
    // Obtiene las tareas almacenadas en localStorage o un array vacío si no hay nada
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Verifica si las tareas cargadas son diferentes de las actuales antes de actualizar el estado
    if (JSON.stringify(storedTasks) !== JSON.stringify(tasks)) {
      setTasks(storedTasks);
    }
  }, []);

  // Efecto para guardar las tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Maneja el evento de completar una tarea
  const handleCompleteTask = (taskId) => {
    // Actualiza el estado de las tareas marcando o desmarcando la tarea como completada
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Maneja el evento de eliminar una tarea
  const handleDeleteTask = (taskId) => {
    // Actualiza el estado de las tareas eliminando la tarea correspondiente
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Maneja el evento de agregar una nueva tarea
  const handleAddTask = (newTask) => {
    // Actualiza el estado de las tareas agregando la nueva tarea
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      {/* Componente que muestra la lista de tareas */}
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
      {/* Componente que contiene el formulario para agregar nuevas tareas */}
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
