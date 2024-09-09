import './App.css';
import Button from './components/Buttons';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejoDeClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <>
      <div className='contenedor-principal'>
        <h1>Contador de Clics</h1>
        <Contador
          numClics={numClics}
        />
        <div className='contenedor-botones'>
          <Button
            texto='Clic'
            esBotonDeClic={true}
            manejoDeClic={manejoDeClic}
          />
          <Button
            texto='Reiniciar'
            esBotonDeClic={false}
            manejoDeClic={reiniciarContador}
          />
        </div>
      </div>
    </>
  );
}

export default App;
