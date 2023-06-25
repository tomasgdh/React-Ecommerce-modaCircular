# React-Ecommerce-modaCircular

Este proyecto es una demo de ecommerce de Moda Circular (o mal llamado Feria Americana), realizado con React + Vite para el curso de ReactJs de Coderhouse.

Primer Entrega:

- Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar).
- Crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
- Crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js.
- Link al último commit de tu repositorio en Github. Debe tener el nombre “PreEntrega1+Apellido”

Segunda Entrega:

- Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
- Rutas a configurar:
  - ‘/’ navega a <ItemListContainer /> en mi caso <CardList />
  - ‘/category/:id’ <ItemListContainer /> en mi caso <CardList />
  - ‘/item/:id’ navega a <ItemDetailContainer /> en mi caso <ClothingCard />
- Links a configurar
  - Clickear en el brand debe navegar a ‘/’
  - Clickear un Item.js debe navegar a /item/:id
  - Clickear en una categoría del navbar debe navegar a /category/:categoryId
- Notas:

  - No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
  - Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
  - Utilizar el id del item como URL param

  Entrega Final:

  - Consigna:

    - Desarrollarás una app de un e-commerce para poder vender productos de un rubro a elección

  - Componentes:
    - Navbar
    - Catálogo
    - Detalle de producto
    - CartContext
    - CartWidget

- Se debe entregar

  - NavBar
  - CartWidget
  - ItemListContainer
  - ItemList
  - ItemDetailContainer
  - ItemDetail
    - ItemQuantitySelector
    - Description
    - AddItemButton
  - Checkout
    - Brief (detalle de compra)

Puede acceder al live demo en este [link](https://react-ecommerce-moda-circular.vercel.app/)

# Instalación

En la terminal, posicionarse en el directorio del proyecto y ejecutar los siguientes comandos:

Para instalar las dependencias.

```bash
  npm install
```

Para iniciar el servidor en modo desarrollo.

```bash
  npm run dev
```

Esta acción abre una ventana en su browser con la url http://localhost:5173
