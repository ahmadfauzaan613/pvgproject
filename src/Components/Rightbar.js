import React, { useState } from 'react'
import Profil from '../Assets/Images/Profile.svg'

function Rightbar() {
  const [dropdown, setDropdown] = useState(true)
  return (
    <div className="mt-[32px]">
      <div className="mb-[30px]  px-[28px]">
        <div className="flex items-center gap-x-[8px]">
          <div className="border-[3px] border-[#989EFF] p-[5px] rounded-full w-fit ">
            <div className="bg-[#FFA800] rounded-full w-fit">
              <img src={Profil} className="w-[40px]" alt="" />
            </div>
          </div>
          <div onClick={() => setDropdown(!dropdown)} className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-[#212121] text-[18px] font-bold">Budi Budiman</p>
              <p className="text-[16px] font-bold text-[#7A7A7A]">Owner at PT Suka Maju</p>
            </div>
            <span className="material-symbols-outlined text-[#212121] font-bold">expand_more</span>
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="bg-white mx-[16px] rounded p-[16px]">
          <div className="flex relative mb-[3rem]">
            <div className="absolute right-[30%]">
              <p className="text-center">Total balance</p>
            </div>
            <div className="absolute right-0">
              <span className="material-symbols-outlined text-right">more_vert</span>
            </div>
          </div>
          <p className="text-center text-[24px] font-bold mb-[24px]">Rp 1.580.000.000</p>
          <button className="w-full text-white font-bold h-[57px] rounded-[12px] outline-none bg-[#545DFF]">Top Up</button>
        </div>
      )}
    </div>
  )
}

export default Rightbar
