import React, { useState } from 'react';

const BotonPM = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  console.log(error)
  const handleInputChange = (e) => {
    setEmail(e.target.value);
     
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar el correo electrónico
    if (!email ) {
      setError('Ingrese su correo electrónico');
      return;
    }

    // Enviar el correo electrónico
    try {
      const response = await fetch('https://formsubmit.co/jhonieripianoscue@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          subject: 'Solicitud de precios mayoristas',
          message: 'Mensaje adicional o contenido del formulario'
        })
        
      });

      if (response.ok) {
        // Envío exitoso
        setEmail('');
        setError('');
      } else {
        // Error en el envío
        //alert('Error al enviar el correo');
      }
    } catch (error) {
      //alert('Error al enviar el correo');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="styles_form__tbsfD">
        <div className={`styles_form__input__6IeAH ${!email && 'border-red-500'}`}>
          <input
            type="email"
            name="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={handleInputChange}
            className={`border ${!email && 'border-red-500'}`}
          />
        </div>
        <button type="submit" className="styles_form__submit__0cyqe">
          <span>Solicitar Precios Mayoristas</span>
        </button>
      </form>
    </>
  );
};

export default BotonPM;
