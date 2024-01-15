import React from 'react'
import no_other_note from './assets/no_other_note.svg'

const OtherNote = ({notes}) => {
  return (
    <div className=' w-full flex items-center justify-center flex-col'>
      {notes?.length < 1 ?
        <div className=' w-full items-center flex flex-col'>
          <h1 className='text-center text-[24px] sm:text-[2.125rem] mt-[0.5em] text-[#00000099] opacity-60 leading-[1.235] tracking-[0.00735em]'>Currently, there are no notes in the Other category.</h1>
          <img src={no_other_note} alt="" className=' mt-[4em] w-[259px]  h-[258px]' />
        </div>
        :
        <div>
          fjddhj
        </div>
      }
    </div>
  )
}

export default OtherNote
