import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-12 bg-[#f2f2f2]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                <div className=' bg-gray-400 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="single-user" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                        <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    </div>
                    <button className='bg-[#00df9a] md:w-[160px] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl bg-gray-800 text-white flex flex-col p-4 md:0 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="single-user" />
                    <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
                    <p className='text-center text-4xl font-bold'>$299</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>2 Granted Users</p>
                        <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                        <p className='py-2 border-b mx-8'>750 GB Storage</p>
                    </div>
                    <button className='bg-[#004d6e] text-[#00df9a] md:w-[160px]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'>Start Trial</button>
                </div>

                <div className='bg-gray-400 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="single-user" />
                    <h2 className='text-2xl font-bold text-center py-8'>Three Users</h2>
                    <p className='text-center text-4xl font-bold'>$399</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>3 Granted Users</p>
                        <p className='py-2 border-b mx-8'>Send up to 6 GB</p>
                        <p className='py-2 border-b mx-8'>1000 GB Storage</p>
                    </div>
                    <button className='bg-[#00df9a] md:w-[160px]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
                </div>

            </div>
        </div>
    )
}

export default Cards
