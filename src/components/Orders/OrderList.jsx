import React from 'react'
import "./OrderList.css"
import {Modal} from "../Modal.jsx"

const OrderList = () => {
    const productsInModal = [
        {
            id: 1,
            title: "Barbecue Burger",
            price: "$22.99"
        },
        {
            id: 2,
            title: "Schnitzel",
            price: "$22.99"
        }
    ]

  return (
    <div className='modal'>
        <Modal>
        <div className='modal-content'>
            {productsInModal.map((item) => (
                <div key={item.id} className='item-cart'>
                    <h1 className='cart-title'>{item.title}</h1>
                    <div className='div'>
                    <p className='cart-price'>{item.price}</p>
                    <button className='cart-quantity'>x1</button>
                    </div>
                    <hr className='hr'/>
                </div>
            ))}
            
            <div className='total-div'>
                <h2>Total Amount</h2>
            </div>
        </div>
        </Modal>
    </div>
  )
}

export default OrderList
