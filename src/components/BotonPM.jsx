import React, { useState, useEffect } from 'react';
import anime from 'animejs'; 

const BotonPM = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showform, setshowform] = useState(false);
  const [loading, setloading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value.trim());
    if (e.target.value.trim() === '') {
      setError(false);
    } else {
      const emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      setError(!emailPattern.test(e.target.value.trim()));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el correo electrónico
    if (!email) {
      setError(true);
      return;
    }

    // Enviar el correo electrónico
    try {
      if (error === false && email !== '') {
        setloading(true);
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
          setError(false);
          setloading(false);
          setshowform(true);
        } else {
          setError(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Animación para mostrar el formulario de "Gracias"
  const showFormAnimation = () => {
    anime({
      targets: '.form-animation',
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  };


  // Mostrar el "loading" mientras se envía el formulario
  useEffect(() => {
    if (loading) {
      setshowform(false);
    }
  }, [loading]);

  // Mostrar el formulario de "Gracias" después de un envío exitoso
  useEffect(() => {
    if (showform) {
      showFormAnimation();
    }
  }, [showform]);

  return (
    <div className='boton-container'>
      {!showform && !loading && (
        <form onSubmit={handleSubmit} className='styles_form__tbsfD'>
          <div className={`styles_form__input__6IeAH ${error && 'styles_is_invalid__otroi'}`}>
            <input
              type='email'
              name='email'
              placeholder='name@gmail.com'
              value={email}
              onChange={handleInputChange}
              className={`${error ? 'sm:bg-red-100 lg:border lg:border-red-300 bg-transparent' : 'lg:border'}`}
              autoComplete='off'
            />
          </div>
          <button type='submit' className='styles_form__submit__0cyqe'>
            <span>Solicitar Precios Mayoristas</span>
          </button>
        </form>
      )}

      {loading && (
        <div className='flex item-center justify-center loading-animation'>
          <div className='spinner'></div>
        </div>
      )}

      {showform && (
        <div className='bg-gray-200 p-4 rounded-3xl form-animation'>
          <div className='font-bold'>Gracias</div>
          <div>Hemos recibido su solicitud y comenzaremos a procesarla en breve.</div>
        </div>
      )}
    </div>
  );
};

export default BotonPM;


