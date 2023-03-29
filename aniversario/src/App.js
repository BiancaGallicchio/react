import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data) /* vou receber o que eu criei em data e colocar em people */
  return <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3> {/* colocar entre chaves e chamar algo do JS. vou ter acesso ao tamanho da lista */}
      <List people={people}/> {/* pegando a Lista q eu criei em outro arq .js; isso é uma tática de componentização que deixa o código mais compacto e reutilizável */}
      <button onClick={() => setPeople([])}>Clear List</button> {/* dentro do setPeople crio uma lista vazia */}
    </section>
  </main>;
}

export default App;
