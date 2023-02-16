import React from 'react'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const Products = () => {
  return (
    <div className='w-4/5 m-auto space-y-10'>
        <div className='flex justify-between items-center p-2'>
            <ul className='flex items-center space-x-8'>
                <li>Masculino</li>
                <li>Feminino</li>
                <li>Sapatos</li>
                <li>Óculos</li>
                <li>Variedades</li>
            </ul>
            <div className='flex items-center space-x-8'>
            <button><BsArrowLeft size={"1.5rem"}/></button>
            <button className='bg-rose-400 rounded-full p-2 text-white drop-shadow-x1'><BsArrowRight size={"1.5rem"}/></button>
            </div>
        </div>
        <div className='products grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-content-center'>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/moda-feminina.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Bolsa Feminina</p>
                <h1 className='font-semibold text-xl'>R$399,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/homem-moda.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Camisa masculina</p>
                <h1 className='font-semibold text-xl'>R$189,00,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/oculos-feminino.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>öculos feminino</p>
                <h1 className='font-semibold text-xl'>R$149,00,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/jeans-homem.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Camisa jeans</p>
                <h1 className='font-semibold text-xl'>R$249,00,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/sapatos-masculino-marrom.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Sapato masculino</p>
                <h1 className='font-semibold text-xl'>R$199,00,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/feme-shorts-.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Blusa feminina</p>
                <h1 className='font-semibold text-xl'>R$99,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/sapato-feminino.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Sapato feminino</p>
                <h1 className='font-semibold text-xl'>R$399,00</h1>
            </div>
            <div className='product h-[350px] mb-8 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/oculos-unisex.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>öculos unisex</p>
                <h1 className='font-semibold text-xl'>R$179,00</h1>
            </div>
            <div className='product h-[350px] mb-5 space-y-2'>
                <img className='w-full h-4/5 object-cover' src="images/men-short.jpg" alt=""/>
                <p className='font-semibold text-blue-500'>Bermuda masculina</p>
                <h1 className='font-semibold text-xl'>R$149,00</h1>
            </div>
        </div>
        <div className='w-full h-[300px] relative'>
        <img className='w-full absolute top-0 rounded-xl h-full object-cover' src="images/phone.jpeg" alt="" />
        <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
          <h1 className='text-4xl text-semibold'>Promoções e novidades para todos os gostos.</h1>
          <p>Clique aqui e saiba mais sobre nossas novidades e variedades de produtos, diariamente com produtos novos</p>
          <button className='w-28 bg-rose-400 p-2 rounded-md'>Saiba mais</button>
        </div>
      </div>
    </div>
  )
}

export default Products;