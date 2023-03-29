import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours' 

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [batatinha, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = batatinha.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true) /* enquanto pego a info dos tours, quero mostrar uma tela de Loading */
    try{
      const response = await fetch(url);
      const batatinha = await response.json();
      setLoading(false);
      setTours(batatinha);
    } catch (error){
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }

  if(batatinha.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours batatinha={batatinha} removeTour={removeTour}/> {/* tours prop is equal to a tours' state value */}
    </main>
  );  
}

export default App
