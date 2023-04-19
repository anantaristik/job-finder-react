import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold
      w-[400px] block'>The value that holds us true and to account</h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8]
            h-[40px] w-[40px] flex items-center justify-center">
              <img src="src/Assets/tailwind.png" alt="love" className='w-[70%]' />
            </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Simplicity
              </span>
          </div>
            <p className='text[13px] text-textColor opacity-[.7] py-[1rem]'>
            Things should be made as simple as possible, but not simpler.
            </p>
        </div>

        
        <div className="singleGrid rounded-[10px] hover:bg-[#FFFA96] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#F3E99F]
            h-[40px] w-[40px] flex items-center justify-center">
              <img src="src/Assets/bunga.png" alt="love" className='w-[70%]' />
            </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Flower
              </span>
          </div>
            <p className='text[13px] text-textColor opacity-[.7] py-[1rem]'>
            The flower can bloom even in the darkest night.
            </p>
        </div>
        

        <div className="singleGrid rounded-[10px] hover:bg-[#FFEBEB] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#F2E6F7]
            h-[40px] w-[40px] flex items-center justify-center">
              <img src="src/Assets/love.png" alt="tailwind" className='w-[70%]' />
            </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Love
              </span>
          </div>
            <p className='text[13px] text-textColor opacity-[.7] py-[1rem]'> 
              Love is the answer, and you know that for sure
            </p>
        </div>
      </div>

    </div>
  )
}

export default Value