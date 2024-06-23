import React from 'react'
import pho from "./img/pho.jpg"

export default function App() {
  return (
    <div>
        {/* public folder se  */}
        <img src="/img/1.jpg" alt="" />
        <hr/>

{/* import->  hm funcion ke andar hi img  */}
     <img src={pho} alt="" />

<hr />

{/* dynamic import */}
  <img src={require('./img/3.jpg')} alt="" />

    </div>
  )
}

// http://localhost:3002/