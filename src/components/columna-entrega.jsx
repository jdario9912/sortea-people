import React from 'react'

export default function ColumnaEntrega({amigosInvisibles}) {
  return (
    <div className="tmain">
      <div className="thead">Entrega</div>
      <div className='nombres'>
      {
        amigosInvisibles.map(({entrega}) => 
          <div className="nombre" key={entrega}>
            { entrega }
          </div>
        )
      }
      </div>
    </div>
  )
}
