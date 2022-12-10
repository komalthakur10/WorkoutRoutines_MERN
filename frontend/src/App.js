//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



//Pages and Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element = { user ? <Home /> : <Navigate to='/login/'></Navigate>}
            />
            <Route
              path="/aboutus"
              element = {<AboutUs />}
            />

            <Route
              path="/signup"
              element = { !user ? <Signup /> : <Navigate to='/'></Navigate>}
            />
            <Route
              path="/login"
              element = { !user ? <Login /> : <Navigate to='/'></Navigate>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
