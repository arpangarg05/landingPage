import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Tech from './Services/Tech'
import './App.css'
import Skills from './Technologies/TechStack'
import Contact from './Contact/Contact'

function App() {
  return (
    <>
     <div className='fixed w-svw' style={{
            backgroundImage: `url('https://i.ibb.co/C6qc7N8/Logo.png')`,
            opacity: .08,
            width:'100vw',
            height:'100vh',
            backgroundSize: 'contain',
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}></div>
    <div >
      <Header></Header>
      <Home></Home>
      <Tech></Tech>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    </>
  )
}
export default App
