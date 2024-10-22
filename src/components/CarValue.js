import React from 'react';
import { useSelector } from 'react-redux';  

const CarValue = () => {

  const totalCost = useSelector(({cars: {data, searchTerm}}) => 

    data.filter((car) => 
       car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, car) => acc + car.cost, 0)
    //{
    // const filteredCars = data.filter((car) => {
    //   return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }

    // return cost;
  //});
  );
  return (
    <div className='car-value'>
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue
