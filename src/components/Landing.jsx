import React from 'react'
import ItemListContainer from './itemListContainer/ItemListContainer'
import NavBar from './navBar/NavBar'
import Logo from './navBar/Logo.png'

const Landing = () => {
  return (
    <div>
      <NavBar/>
      <div style={{display:"grid", placeItems:"center", marginTop:"40px"}}>
        <ItemListContainer greeting="Bienvenidos al OliDidacticos"/>
        <img src={Logo} alt="Logo"/>
      </div>
    </div>
  )
}

export default Landing
