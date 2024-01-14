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

                {/**Navigation */}
                <div className=' p-[12px] m-0 box-border w-full flex flex-wrap'>
                    {/**Tabs */}
                    <div className=' flex-grow-0 max-w-[75%] basis-[75%] m-0 box-border w-full flex flex-wrap'>
                        <div>
                            <button type="button" className='justify-center align-middle items-center border-0 m-0 inline-flex outline-[0] text-[#fff] bg-[#69bcff] relative min-w-[89px] font-normal mr-[16px]  shadow-none py-[6px] pr-[16px] text-[0.875rem] box-border leading-[1.75] rounded-[4px] tracking-[0.02857em] transition-custom duration-250 ease-custom-ease delay-0'>
                                <span className=' w-full'>All</span>
                            </button>

                            <button type="button" className=' align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal mr-[16px] shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0'>
                                <span className=' hover-animate w-full items-center align-middle inline-flex flex-col'>
                                    <span>Home</span>
                                    <span className=' dot text-[#ff9100] bottom-[-.4em] text-[2em] leading-[1] absolute'>•</span>
                                </span>
                            </button>

                            <button type="button" className=' align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal mr-[16px] shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0'>
                                <span className=' hover-animate w-full items-center align-middle inline-flex flex-col'>
                                    <span>Work</span>
                                    <span className=' dot text-[#5c6bc0] bottom-[-.4em] text-[2em] leading-[1] absolute'>•</span>
                                </span>
                            </button>

                            <button type="button" className=' align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal mr-[16px] shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0'>
                                <span className=' hover-animate w-full items-center align-middle inline-flex flex-col'>
                                    <span>Personal</span>
                                    <span className=' dot text-[#66bb6a] bottom-[-.4em] text-[2em] leading-[1] absolute'>•</span>
                                </span>
                            </button>

                            <button type="button" className=' align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal mr-[16px] shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0'>
                                <span className=' hover-animate w-full items-center align-middle inline-flex flex-col'>
                                    <span>Other(s)</span>
                                    <span className=' dot text-[#51336A] bottom-[-.4em] text-[2em] leading-[1] absolute'>•</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/**Add Note Button */}
                    <div className=' flex-grow-0 max-w-[25%] basis-[25%] m-0 box-border'>
                        <button className=' hover:bg-[#69BCFF] justify-center align-middle items-center relative inline-flex m-0 border-0 cursor-pointer uppercase tracking-[0.02857em] rounded-[4px] leading-[1.75] font-medium text-[#fff] float-right bg-[#2196F3] shadow-addButton py-[6px] px-[16px] text-[0.875rem] min-w-[64px] box-border transition-custom duration-250 ease-custom-ease delay-0'>
                            <span className=' w-full items-center align-middle inline-flex'>
                                <span className=' ml-[-4px] mr-[8px] inline-flex'>
                                    <img src={plusIcon} alt="" className=' w-[20px] h-[20px]' />
                                </span>
                                Add note
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
