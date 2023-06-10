import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Cartcontext } from '../context/Context'


const CartList = () => {
  const GlobalState = useContext(Cartcontext)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch

  const total = state.reduce((total, item) => {
    return (total + item.price * item.quantity)
  }, 0)

  return (
    <>
      {
        state.length > 0 ?
          <div className='cart'>
            {state?.map((item, index) => {
              return <div className="card" key={index}>
                <img src={item.image.type} />
                <p><b>نام محصول :</b> {item.name}</p>
                <p><b>تعداد محصول :</b> {item.quantity}</p>
                <p><b>قیمت محصول :</b> ${item.quantity * item.price}</p>
                <div className="quantity">

                  <button
                    className="rounded-circle bg-success text-white fs-3"
                    onClick={() => dispatch({ type: 'INCREASE', payload: item })}>+</button>
                  <p>{item.quantity}</p>

                  <button
                    className="rounded-circle bg-danger text-white fs-3"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: 'DECREASE', payload: item })
                      } else {
                        dispatch({ type: 'REMOVE', payload: item })
                      }
                    }}>-</button>

                </div>
                <button
                  className="rounded-1 border-0 p-2 bg-danger text-white fs-3"
                  onClick={() => dispatch({ type: 'REMOVE', payload: item })}>X</button>
              </div>
            })}
            {state.length > 0 && <div className='total pt-3'><h2>مبلغ کل : ${total}</h2></div>}
          </div >
          :
          <div className='empty-cart'>
            <h1>ثبت خرید خالی است</h1>
            <NavLink to='/products' className='btn btn-outline-warning mt-3'>
              <div className="button d-flex mx-4 my-3">
                <div class="spinner-grow text-white mx-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                لیست محصولات
              </div>
            </NavLink>
          </div>
      }

    </>
  )
}

export default CartList