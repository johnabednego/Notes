import React from 'react'

const AddNote = ({ setAddNoteModal }) => {
  const hideModal = (event) => {
    const modal = document.getElementById('modal');
    // Check if the clicked element is outside of the modal
    if (event.target !== modal && !modal.contains(event.target)) {
      setAddNoteModal(false); // Call the function to close the modal
    }
  }
  return (
    <div onClick={hideModal} className='cursor-pointer fixed z-50 inset-0'>
      <div className='bg-[#00000080] left-0 top-0 right-0 bottom-0 flex z-[-1] fixed items-center justify-center transition-opacity duration-225 ease-custom'></div>
      <div className=' flex items-center justify-center outline-[0] h-full transition-opacity duration-225 ease-custom'>
        <div id='modal' className=' cursor-default flex flex-col bg-[#fff] text-[#000000de] relative overflow-y-auto max-h-[calc(100%-64px)] w-full m-[15px] max-w-[824px] shadow-searchShadow rounded-[4px] transition-shadow duration-300 ease-custom'>
          <div className=' text-[#00000099] text-[1.5em] font-normal border-b-[#0000001a] border-solid border-b-[0.5px] flex-grow-0 flex-shrink-0 basis-auto m-0 py-[16px] px-[24px]'>Add note</div>
          {/**form */}
          <form>
            <div className=' pt-[20px] pb-[8px] px-[24px] overflow-hidden'>
              <div className=' w-[calc(100%+24px)] m-[-12px] flex flex-wrap box-border'>
                {/**Title and Description */}
                <div className=' p-[12px] w-full sm:w-auto sm:flex-grow-0 sm:max-w-[66.666667%] sm:basis-[66.666667%] m-0 box-border'>
                  {/**Add title */}
                  <div className='inline-flex min-h-[44px] items-center bg-[#F4F4F4] text-[#00000099] w-full border-none text-[1.25em] leading-[1.5] mb-[1.5em] rounded-tl-[4px] rounded-tr-[4px] cursor-text relative box-border tracking-[0.00938em]'>
                    <input required name='title' id='title' type="text" placeholder='Add title…' className='py-[0.2em] px-[1em] text-[18px] bg-transparent outline-[0] block shadow-none w-full min-w-0 h-[1.1876em] m-0 pt-[6px] pb-[7px] border-0 box-content' />
                  </div>
                  {/**Add description */}
                  <textarea required name="description" id="description" rows="8" placeholder='Add description…' className=' outline-[0] bg-[#F4F4F4] w-full h-[268px] min-h-[44px] border-none resize-none text-[18px] text-[#00000099] leading-[1.5] mb-0 p-[1em] pb-[2em] rounded-tl-[4px] rounded-tr-[4px]'></textarea>
                </div>
                {/**Categories */}
                <div className=' p-[12px] w-full sm:w-auto sm:flex-grow-0 sm:max-w-[33.333333%] sm:basis-[33.333333%] m-0 box-border'>
                  <div className='inline-flex min-h-[44px] items-center bg-[#F4F4F4] text-[#00000099] w-full border-none px-[1em] text-[1.25em] leading-[1.5] mb-[1.5em] rounded-tl-[4px] rounded-tr-[4px] relative box-border tracking-[0.00938em]'>
                    <select required name="category" id="category" className=' py-[0.2em] cursor-pointer outline-[0] w-full bg-transparent text-[18px]'>
                      <option value='' disabled>Select category</option>
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                      <option value="Personal">Personal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/**Action Buttons */}
            <div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNote
