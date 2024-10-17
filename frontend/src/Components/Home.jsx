import React from 'react'
import PicDatas from './PicData'
import Picard from './Picard';



const Home=()=> {

  return (
        <div className='flex flex-col gap-4'>
            <div className='mt-4 sm:ml-2 ml-4'>
              <h1 className='font-mono text-xl font-bold'>PixPortal Image Gallary</h1>
            </div>
            <div className='sm:grid sm:grid-cols-3 flex flex-col gap-5' >
              {PicDatas.map((card, index) =>(
                    <Picard key={index} imgurl={card.imgurl} title={card.title} publi={card.publi} price={card.price} />
                  ))}
            </div>
        </div>
  )
}

export default Home