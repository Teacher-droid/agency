
import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import philo from '../Data/philo';

  

const Profil =()=>{
  const { name } = useParams();
  const [currentPhilo, setCurrentPhilo] = useState(undefined)
 

  useEffect(() => {
    const foundPhilo = philo.find((title) => title.name === name);
    setCurrentPhilo(foundPhilo);
  }, [name])
if (!currentPhilo){
  return null
}



return (
    
  <div>
     <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 bg-blue-500">
 
  
    <h2 class="text-gray-800 text-3xl font-semibold">{name}</h2>
    <p class="mt-2 text-gray-600"><p> {currentPhilo.content}</p></p>
  </div>
  
</div>
     
  

);

}
export default Profil
