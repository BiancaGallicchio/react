import React from 'react';
import Tour from './Tour';
const Tours = ({batatinha, removeTour}) => { {/* esse tours se refere ao atributo q eu cirei em App.js pro useState (no caso, [tours, setTours]) */}
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      {/* o map serve pra vc iterar em uma lista */}
      <div>
        {batatinha.map((tour)=> {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        }
        )}
      </div>
    </section>
  )
};

export default Tours;
