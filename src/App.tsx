
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import '@mantine/core/styles.css';
import DiamondType from './Routes/SelectType';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diamond-type' element={<DiamondType/>} />
   </Routes>
  )
}

export default App
