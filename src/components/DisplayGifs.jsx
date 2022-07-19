import React from 'react'
import useApi from '../hooks/useApi';
import { Image } from './Image';

export const DisplayGifs = ({category}) => {
  const url= `https://api.giphy.com/v1/gifs/search?api_key=Pd0yLP6Fp1cZJBmylk6DotMEN2CnT8RS&q=${category}&limit=5`;
  const{loading, data}= useApi(url);
  return (
    <div className='container-gifs'>
      {
        loading?
        data.map(img =>(
          <Image key={img.id} title={img.title} url={img.images.downsized_medium.url}></Image>
        ))
        :''
      }
    </div>
  )
}
