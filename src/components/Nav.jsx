import React from 'react'
import {AiFillHeart , AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='w-11/12 xl:w-4/5 my-4 m-auto flex justify-between py-5'>
      <h1 className='text-3xl -mt-2 font-bold'>Loja<span className='text-rose-600'>Virtual</span></h1>
      <div>
        <ul className='flex space-x-8 text-base md:flex'>
          <li className="font-bold">Home</li>
          <li className="font-bold">Produtos</li>
          <li className="font-bold">Serviços</li>
          <li className="font-bold">Contato</li>
        </ul>
      </div>
      <div className='flex space-x-8'>
        <AiOutlineSearch size={"1.5rem"}/>
        <AiFillHeart size={"1.5rem"}/>
        <AiOutlineShoppingCart size={"1.5rem"}/>
      </div>
    </nav>
  )
}

export default Nav