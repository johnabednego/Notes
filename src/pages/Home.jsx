import React from 'react'
import searchIcon from './assets/search.svg'
import plusIcon from './assets/plus.svg'

const Home = () => {
    return (
        <div className=' w-full mt-[1em] mb-[4em] mx-auto p-[15px] max-w-[854px]'>
            <div className=' w-[calc(100%+24px)] m-[-12px] flex flex-col flex-wrap box-border'>
                {/**Search bar */}
                <div className=' p-[12px] flex-grow-0 basis-full max-w-full m-0 box-border'>
                    <div className=' w-full m-0 relative inline-flex flex-col align-top min-w-0 shadow-searchShadow border-0 p-0'>
                        <img src={searchIcon} alt="" className=' translate-y-[-50%] top-[50%] left-[0.5em] absolute z-[1] w-[24px] h-[24px]' />
                        <div className=' text-[#000000de] cursor-text inline-flex relative text-[1.2em] box-border items-center font-normal leading-[1.1876em] tracking-[0.00938em]  '>
                            <input type="text" placeholder="Search notes…" className=' text-[18px] box-content outline-none py-[0.7em] px-[2.5em] w-full border-0 h-[1.1876em] min-w-0' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
