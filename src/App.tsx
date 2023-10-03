
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import DiamondType from './Routes/SelectType';
import { Header } from './components/Header';
import FilterDiamond from './Routes/FilterDiamond.tsx';

function App() {

  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/diamond-type' element={<DiamondType />} />
        <Route path='/filter-diamond' element={<FilterDiamond />} />
      </Routes>
    </Header>
  )
}

export default App
