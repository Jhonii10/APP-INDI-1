import React from 'react';
import { NavLink } from 'react-router-dom';

const CardLocation = () => {
    return (
        <div>
            
  <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">
   
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-full w-full rounded-xl object-cover"
      />
      <div>
        <h2 className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <p className="mt-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          eos. Inventore dolor delectus commodi laudantium adipisci, illum amet
          itaque optio!
        </p>
        <div className="mt-6 sm:text-right">
          <NavLink
            href="#"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Find out more
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default CardLocation;
