
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './assets/componants/Header'

function App() {
  

  return (
    <>
     <Header/>
      <Outlet/>
    </>
  )
}

export default App
