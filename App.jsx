import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from "./components/navigation"
import HeroSection from './components/hero'
const App=() => {
   return (
    <>
<div>
  <Navigation/>
  <HeroSection/>
</div>
    </>
  );
};

export default App
