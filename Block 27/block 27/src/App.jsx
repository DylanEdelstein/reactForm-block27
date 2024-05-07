import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
const [token, setToken] = useState(null);


export default function App() {
  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

function App() {
 

}

