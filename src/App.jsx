import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Layouts/Header/Header'
import { Navbar } from './components/Layouts/Navbar/Navbar'

import { NotFound } from './components/NotFound/NotFound'
import { ContadorClics } from './components/Pages/ContadorClics/ContadorClics'

import { UserActive } from './components/Pages/UserActive/UserActive'
import { DigitalClock } from './components/Pages/DigitalClock/DigitalClock'
import { TimerClock } from './components/Pages/TimerClock/TimerClock'


function App() {

  return (
    <>
      <Header>
        <h1 className='text-5xl w-1/4 ml-12 text-white font-extrabold'>Practicando useEffect</h1>
        <Navbar />
      </Header>
      <Routes>
        <Route path='/' element={<ContadorClics />} />        
        <Route path='/route1' element={<TimerClock />} />        
        <Route path='/route2' element={<UserActive />} />        
        <Route path='/route3' element={<DigitalClock />} />       
        <Route path='*' element={<NotFound />} />        
      </Routes>      
    </>
  )
}

export default App
