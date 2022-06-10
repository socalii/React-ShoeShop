import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

// const Box = styled.div`
//   background: grey;
//   padding: 20px;
// `

// const Btn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
//   padding: 10px;
// `

function Detail(props) {
  let { id } = useParams()
  let picId = parseInt(id) + 1
  let foundItem = props.shoes.find((x) => x.id == id)

  // const [alert, setAlert] = useState(true)
  const [num, setNum] = useState('')

  useEffect(() => {
    // setTimeout(() => {
    //   setAlert(false)
    // }, 2000)

    if (isNaN(num) === true) {
      alert('Not a number')
    }
  }, [num])

  return (
    <div className='container'>
      {/* <Btn bg='blue'>Button</Btn>
      <Btn bg='orange'>Button</Btn>
      <Btn bg='yellow'>Button</Btn> */}

      {/* {alert === true ? (
        <div className='alert alert-warning'>
          Get coupon code once bought in 2 secs
        </div>
      ) : null} */}

      <input
        onChange={(e) => {
          setNum(e.target.value)
        }}
      />

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
