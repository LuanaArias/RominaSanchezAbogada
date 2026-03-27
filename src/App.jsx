import './App.css'
import './styles/variables.css'
import { Header } from './components/Header/Header'
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal'
import { useState, useEffect } from 'react'
function App() {
  const [theme, setTheme] = useState("light");

   useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
    <div className='app'>
      <Header tema={theme} alternar={toggleTheme}/>
      <main>
        <PaginaPrincipal />
      </main>
      
    </div>
      
    </>
  )
}

export default App
