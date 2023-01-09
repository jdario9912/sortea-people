import React from 'react'

export default function ColumnaRecibe({amigosInvisibles}) {
  return (
    <div className="tmain">
      <div className="thead">Recibe</div>
      <div className='nombres'>
      {
        amigosInvisibles.map(({recibe}) => 
          <div className="nombre" key={recibe}>
            { recibe }
          </div>
        )
      }
      </div>
    </div>
  )
}
