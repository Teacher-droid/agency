 import React   from 'react'
 import {Link} from "react-router-dom"
 

const users = [
  {
    name: `Platon`,
    
  },
  {
    name: `Solane`
  },
  {
    name: `Sedal`
  }
];
const Philosophe = () => {
  return (
  <div>
    Au fil des années, nous avons pu accompagner les meilleurs. <br/>
    Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées. <br/>
      {users.map((user, index) => (
        <h5 key={index}>
           <Link to={`/works/${user.name}-study-case`}>{user.name}'s Page</Link> 

        </h5>
      ))}
    </div>  
  );
};


export default Philosophe