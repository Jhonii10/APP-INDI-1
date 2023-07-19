import React, { useEffect, useRef } from 'react';

const LoginForm = () => {

    const formRef = useRef(null);
        useEffect(() => {
            const labels = formRef.current.querySelectorAll(".form-control label");
            labels.forEach((label) => {
              label.innerHTML = label.innerText
                .split("")
                .map(
                  (letter, idx) =>
                    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
                )
                .join("");
            });
          }, []);
        

    return (
        <>
              <form ref={formRef} className='lg:max-w-lg'>
                <div className="form-control  ">
                  <input type="text" required />
                  <label>Nombre</label>
                </div>
        
                <div className="form-control">
                  <input type="email" required />
                  <label>Email</label>
                </div>
        
                <div className="form-control">
                  <input type="tel" required />
                  <label>Numero</label>
                </div>

                <div className='flex items-baseline justify-center  flex-col'>

                
                {" "}
                Adjuntar tu HV en formato PDF
                <br />
                <span className="wpcf7-form-control-wrap" data-name="file-231">
                    <input
                    type="file"
                    name="file-231"
                    size={40}
                    className="text-xs lg:text-md"
                    accept=".pdf"
                    aria-required="true"
                    aria-invalid="false"
                    required
                    />
                 </span>



        
<button type="submit" name="enviar_formulario" id="enviar" className='mt-4 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>
        <p>Enviar</p>
      </button>
      </div>
              </form>

            
        </>
    );
}

export default LoginForm;
