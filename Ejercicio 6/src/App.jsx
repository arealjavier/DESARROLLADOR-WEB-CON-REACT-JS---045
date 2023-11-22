import React, { useState } from 'react';
import './App.css';

const Registro = () => {
  // Estado para almacenar los valores de los campos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: '',
  });

  // Estado para almacenar el registro enviado
  const [registroEnviado, setRegistroEnviado] = useState(null);

  // Manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Actualizar el estado con el nuevo valor del campo
    setFormulario({ ...formulario, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar la lógica para enviar los datos al servidor si es necesario

    // Simulación de envío exitoso, actualizar el estado de registroEnviado
    setRegistroEnviado(formulario);
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      {/* Formulario con campos controlados */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="tel"
            name="telefono"
            value={formulario.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="password"
            name="password"
            value={formulario.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirmar Password:</label>
          {/* Campo controlado: valor y cambio controlado por el estado */}
          <input
            type="password"
            name="confirmarPassword"
            value={formulario.confirmarPassword}
            onChange={handleChange}
          />
        </div>
        {/* Botón para enviar el formulario */}
        <button type="submit">Registrar</button>
      </form>

      {/* Mostrar el registro enviado si existe */}
      {registroEnviado && (
        <div className="registro-enviado">
          <h3>Registro Enviado:</h3>
          {/* Mostrar los datos del registro en un formato legible */}
          <pre>{JSON.stringify(registroEnviado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Registro;
