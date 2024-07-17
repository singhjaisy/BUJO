import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/navbar/Navbar1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './components/tasks/Tasks';
import Home from './components/home/Home';
import Goals from './components/goals/Goals';
import Loginform from './components/login/Loginform';
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import Footerhome from './components/home/Footerhome';

export default function App() {
  return <MantineProvider>{
    <section>
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/components/Tasks' element={<Tasks/>}/>
        <Route path='/components/Goals' element={<Goals/>}/>
        <Route path='/Login' element={<Loginform/>  }/>
      </Routes>
      <Footerhome/>
      </BrowserRouter>
    </section>
    }</MantineProvider>;
}