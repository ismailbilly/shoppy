
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {LoginPage,
        SignUpPage
} from './Routes.js'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
