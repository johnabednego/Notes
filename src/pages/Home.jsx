import React, { useState } from 'react'
import searchIcon from './assets/search.svg'
import plusIcon from './assets/plus.svg'
import noNoteIcon from './assets/no_note.svg'

const Home = () => {
    const [switchTab, setSwitchTab] = useState(0)

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
                <div className=' p-[12px] m-0 box-border w-full flex flex-col-reverse md:flex-row'>
                    {/**Tabs */}
                    <div className=' md:flex-grow-0 md:max-w-[75%] md:basis-[75%] mt-3 md:mt-0 md:m-0 box-border w-full flex flex-wrap'>
                        <div className=' w-full flex items-center justify-evenly flex-wrap gap-4'>
                            <button onClick={()=>setSwitchTab(0)} type="button" className={` ${switchTab===0?'text-[#fff] bg-[#505050] cursor-not-allowed':' cursor-pointer hover:opacity-40'} justify-center align-middle items-center border-0 m-0 inline-flex outline-[0]  relative min-w-[89px] font-normal   shadow-none py-[6px] pr-[16px] text-[0.875rem] box-border leading-[1.75] rounded-[4px] tracking-[0.02857em] transition-custom duration-250 ease-custom-ease delay-0`}>
                                <span className=' w-full'>All</span>
                            </button>

                            <button onClick={()=>setSwitchTab(1)}  type="button" className={` ${switchTab===1?'text-[#fff] bg-[#ff9100] cursor-not-allowed':'cursor-pointer'} align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal  shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0`}>
                                <span className={` ${switchTab !==1?'hover-animate':''} w-full items-center align-middle inline-flex flex-col`}>
                                    <span>Home</span>
                                    <span className={` ${switchTab===1?' mb-1 text-[4em] animate-ping':'text-[2em]'} dot text-[#ff9100] bottom-[-.4em] text-[2em] leading-[1] absolute`}>•</span>
                                </span>
                            </button>

                            <button onClick={()=>setSwitchTab(2)}  type="button" className={` ${switchTab===2?'text-[#fff] bg-[#5c6bc0] cursor-not-allowed':'cursor-pointer'} align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal  shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0`}>
                                <span className={` ${switchTab !==2?'hover-animate':''} w-full items-center align-middle inline-flex flex-col`}>
                                    <span>Work</span>
                                    <span className={` dot text-[#5c6bc0] bottom-[-.4em] ${switchTab===2?' mb-1 text-[4em] animate-ping':'text-[2em]'} leading-[1] absolute`}>•</span>
                                </span>
                            </button>

                            <button onClick={()=>setSwitchTab(3)}  type="button" className={` ${switchTab===3?'text-[#fff] bg-[#66bb6a] cursor-not-allowed':'cursor-pointer'} align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal  shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0`}>
                                <span className={` ${switchTab !==3?'hover-animate':''} w-full items-center align-middle inline-flex flex-col`}>
                                    <span>Personal</span>
                                    <span className={` dot text-[#66bb6a] bottom-[-.4em] ${switchTab===3?' mb-1 text-[4em] animate-ping':'text-[2em]'} leading-[1] absolute`}>•</span>
                                </span>
                            </button>

                            <button onClick={()=>setSwitchTab(4)}  type="button" className={` ${switchTab===4?'text-[#fff] bg-[#51336A] cursor-not-allowed':'cursor-pointer'} align-middle items-center outline-[0] m-0 cursor-pointer border-0 tracking-[0.02857em] rounded-[4px] leading-[1.75] bg-transparent relative min-w-[89px] font-normal  shadow-none py-[6px] px-[8px] text-[#000000de] text-[0.875rem] transition-custom duration-250 ease-custom-ease delay-0`}>
                                <span className={` ${switchTab !==4?'hover-animate':''} w-full items-center align-middle inline-flex flex-col`}>
                                    <span>Other(s)</span>
                                    <span className={` dot text-[#51336A] bottom-[-.4em] ${switchTab===4?' mb-1 text-[4em] animate-ping':'text-[2em]'} leading-[1] absolute`}>•</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/**Add Note Button */}
                    <div className=' md:flex-grow-0 md:max-w-[25%] md:basis-[25%]  m-0 box-border'>
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

                {/**Various Categories */}

            </div>
        </div>
    )
}

export default Home
