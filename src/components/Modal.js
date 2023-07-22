import React from 'react'
const Modal = ()=>{
  return <aside className='modal-container'>
    <div className = 'modal'>
      <h4>Remove all the Items from the cart ?</h4>
      <div className = 'btn-container'>
        <button type ='button' className = 'btn confirm-btn'>Confirm</button>
        <button type ='button' className = 'btn clear-btn'>Clear</button>
      </div>
    </div>



  </aside>
}

export default Modal;