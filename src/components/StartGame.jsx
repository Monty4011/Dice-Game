import React from 'react'

const StartGame = ({toogle}) => {
  return (
    <>
    <div className='container flex justify-center items-center pt-36 gap-7'>
    <div className='container w-1/3'><img src="/dice.png" alt="" /></div>
    <div className='flex flex-col gap-2 justify-end items-end'>
        <h1 className='font-bold text-8xl'>DICE GAME</h1>
        <button onClick={toogle}  className='bg-black text-white w-36 h-7 rounded flex justify-center items-center'>Play Now</button>
    </div>
    </div>
    </>
  )
}

export default StartGame