import React from 'react';

import { housesData } from '../data'

import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
const PropertyDetails = () => {

  const { id } = useParams();
  console.log(id);

  const house = housesData.find(house => {
    return house.id === parseInt(id);
  })

  return <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div>
        <h2>{house.name}</h2>
        <h2>{house.address}</h2>
      </div>
      <div>

        <div>{house.type}</div>
        <div>{house.country}</div>
      </div>
      <div>$ {house.price}</div>
    </div>
  </section>;
};

export default PropertyDetails;
