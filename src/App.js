import { BrowserRouter ,  //Necessario para declaração de URLs
   Routes, //Container para havber uma arqvore de rotas, se houver mais de uma é necessario
   Route as Rota //Local que informa a rota / path que sera usada no URL e o element que sera o componente.
  } from "react-router-dom";
import { Home } from './pages/home'
import { Login } from './pages/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Rota path="/" element={ <Home/>}/>
          <Rota path="/login" element={ <Login/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
