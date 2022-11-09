import { browserRouter, Route, Routes } from 'react-router'
import {
  lazy,
  Suspense
} from 'react'
import './App.css';

const Navbar = lazy(()=> import('./pages/Navbar'))
const App = () => {
  return (
    <div>
      hola mundo
    </div>
  )
}

export default App;
