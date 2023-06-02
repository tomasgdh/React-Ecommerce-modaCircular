import './App.css'
import ResponsiveAppBar from './components/NavBar/NavBar'
import MediaCard from './components/Card/MediaCard'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const datos = [{key: "1",
                  img:"./src/assets/example.webp",
                  title:"Example".toUpperCase(),
                  name:"Sweater",
                  description:'piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
                  description2: 'SUPER OFERTA'},
                  {key: "2",
                  img:"./src/assets/example.webp",
                  title:"Example".toUpperCase(),
                  name:"Sweater",
                  description:'piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
                  description2: 'SUPER OFERTA'},
                 {key: "3",
                  img:"./src/assets/example.webp",
                  title:"Example".toUpperCase(),
                  name:"Sweater",
                  description:'piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
                  description2: 'SUPER OFERTA'},
                  {key: "4",
                  img:"./src/assets/example.webp",
                  title:"Example".toUpperCase(),
                  name:"Sweater",
                  description:'piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
                  description2: 'SUPER OFERTA'},
                  {key: "5",
                  img:"./src/assets/example.webp",
                  title:"Example".toUpperCase(),
                  name:"Sweater",
                  description:'piece of clothing, typically with long sleeves, made of knitted or crocheted material, that covers the upper part of the body',
                  description2: 'SUPER OFERTA'},]
  return (
    <>
      <ResponsiveAppBar/>
      <br/>
      <ItemListContainer greeting={"¡Bienvenidos a la Tienda!"}/>
      <div className='Cards'> 
      {datos.map( x =>{
          return  <MediaCard
                        key={x.key}
                        img= {x.img}
                        title= {x.title}
                        name=  {x.name}
                        description =  {x.description}
                        description2 =  {x.description2}
                        />
                })};
      </div> 
    </>
  )
}

export default App
