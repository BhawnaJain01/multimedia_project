import logo from './logo.svg';
import './App.css';
// import Sidebar from './components/Sidebar/Sidebar';
import Mainpage from './pages/Mainpage/Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardpage from './pages/CardPage/Cardpage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path='/' element ={<Mainpage/>} >
          <Route path='/:pid/:pname' element={<Cardpage/>}/>
        </Route> 
     </Routes>
    </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
