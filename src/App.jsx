import './App.css'
import ResponsiveAppBar from './components/NavBar/NavBar'
import MediaCard from './components/Card/MediaCard'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <br/>
      <ItemListContainer greeting={"Hola Mundo, este es un saludos!"}/>
      <div className='Cards'>  
        <MediaCard
        img= "./public/example.webp"
        title= {"Example".toUpperCase()}
        name= "Sweater" 
        description ='piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body'
        description2 = 'SUPER OFERTA'
        />
      </div> 
    </>
  )
}

export default App
