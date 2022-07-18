import React from 'react'
import './principal.css';
import { Cuadrícula } from '@giphy/react-components'     
import { GiphyFetch } from '@giphy/js-fetch-api'  

export const principal = () => {
  const gf = new GiphyFetch ('Pd0yLP6Fp1cZJBmylk6DotMEN2CnT8RS');
  // const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
  
  return (
    <div>principal</div>
  )
}
