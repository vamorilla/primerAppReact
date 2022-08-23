import './App.css';
import Opinion from './componentes/Opinion.js';

function App() {
  return (
    <div className="App">
      <div className="main-container-app">
        <h1>Esto es lo que opinan aquellos que visitan Mendoza</h1>
        <Opinion 
        img='1'
        fullname='Lucia Cortez'
        country='España'
        opinion='Para los amantes del vino recomiendo la visita a las bodegas emplazadas en las cercanías, donde es posible ver el proceso de elaboración del vino y degustar algunos de ellos.
        La ciudad tiene un centro comercial de muy buen nivel, confortables hoteles y numerosos restaurantes de precios accesibles.
        Además se pueden realizar realizar variadas excursiones.
        Los mendocinos son amables y muy educados.' />
        <Opinion 
        img='2'
        fullname='Emiliano Ramazzotti'
        country='Italia'
        opinion='Está ubicada en una zona árida. En sus calles hay acequias que reciben agua de deshielo y dan a la ciudad una característica muy particular.
        Su Parque San Martín es un predio de 400 hectáreas verdes, diseñado por Carlos Thays, con un gran lago artifical y un hermoso rosedal. En su interior se encuentra el Cerro de la Gloria y el monumento que conmemora el cruce de los Andes.' />
        <Opinion 
        img='3'
        fullname='Franco García'
        country='Francia'
        opinion='Partiendo de Mendoza capital,recorriendo primeros los barrios perifericos ,en la zona rural encontarmos Las Ruinas de CARNOTA , que marcann un hito historico en la campaña Sanmartianiana-
        Luego el centro de guardaparques,con muy buen material de informacion ,pequeño zoo,sanitarios y lugares para fotos.' />
      </div>
    </div>
  );
}

export default App;
