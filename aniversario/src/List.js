import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person; {/* esses atributos tem q ser o msm nome dos q eu criei no data, senão n funciona. afinal eu to chamando eles */}
        return (
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
