import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  let { id } = useParams()
  let picId = parseInt(id) + 1
  let foundItem = props.shoes.find((x) => x.id == id)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={'https://codingapple1.github.io/shop/shoes' + picId + '.jpg'}
            width='100%'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{foundItem.title}</h4>
          <p>{foundItem.content}</p>
          <p>${foundItem.price}</p>
          <button className='btn btn-danger'>ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
