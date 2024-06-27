import { Input } from '@/components/ui/input'
import React from 'react'
import HomePage from './useText/page'

const Home = () => {
  return (
    <main className=' h-screen bg-yellow-300 '>
      <div className=' flex justify-center items-center'>
        <div className=' grid grid-cols-3 p-5 gap-[50px] items-center '>
          <div className=' flex flex-col justify-center items-center border border-black w-[300px] bg-green-400 '>
            <div>Lorem, ipsum</div>
            <div className=' text-6xl'>03</div>
          </div>
          <div className=' flex flex-col justify-center items-center border border-black w-[300px] bg-pink-500 '>
            <div>Lorem, ipsum</div>
            <div className=' text-6xl'>11</div>
          </div>
          <div className=' flex flex-col justify-center items-center border border-black w-[300px] bg-orange-400 '>
            <div>Lorem, ipsum</div>
            <div className=' text-6xl'>52</div>
          </div>
          <div className=' flex w-[1200px] justify-center items-center space-x-2 '>
            <Input placeholder='Type something...' />
            <button type='submit' >Create</button>
          </div>
        </div>
      </div>
      <HomePage />
    </main>
  )
}

export default Home