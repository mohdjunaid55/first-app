import React from 'react'

// inline css use 
// export default function App() {
//   return (
//    <p style={{
//     backgroundColor: "red",
//     color: "white",
//     padding: "10px",
//    }}>
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//     Earum quis aperiam tempore amet, esse iusto, beatae repellat dicta facilis laboriosam deleniti sunt, 
//     deserunt assumenda iure. Amet, aut! Voluptatum, ea ducimus!
//    </p>
//   )
// }

// App.css
// import "./App.css"
// export default function App() {
//     return (
//      <p className='container'>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//       Earum quis aperiam tempore amet, esse iusto, beatae repellat dicta facilis laboriosam deleniti sunt, 
//       deserunt assumenda iure. Amet, aut! Voluptatum, ea ducimus!
//      </p>
//     )
//   }
  
// ------------------App.module.css
import style from "./App.module.css";

export default function App() {
  console.log(style);
  return (
    <p className={style.container}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Earum quis aperiam tempore amet, esse iusto, beatae repellat dicta facilis laboriosam deleniti sunt,
      deserunt assumenda iure. Amet, aut! Voluptatum, ea ducimus!
    </p>
  );
}
