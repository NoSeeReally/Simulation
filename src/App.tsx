import Header from './Header'
import Footer from './Footer';
import Body from './Body';
import './App.css'

function App() {
  return (
    <>
      <Header title="My Simulation" />
      <Footer text="© 2026 My Simulation. All rights reserved." />
      <Body message="Welcome to the simulation! This is where the main content will go." />
    </>
  );
}

export default App
