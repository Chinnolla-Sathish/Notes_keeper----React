import React from 'react'

function Footer(){

  const year = new Date().getFullYear();

  return(
      <footer>
        <p>Copy right ©  Sathish Chinnolla {year}</p>
      </footer>
  )
}
export default Footer
