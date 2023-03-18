import React, { useState } from 'react'
import Dashboard from '../Assets/Images/LogoSidebar/Dashboard.svg'
import Balance from '../Assets/Images/LogoSidebar/Balance.svg'
import Channel from '../Assets/Images/LogoSidebar/Channel.svg'
import Product from '../Assets/Images/LogoSidebar/Product.svg'
import Transaction from '../Assets/Images/LogoSidebar/Transaction.svg'
import Chevron from '../Assets/Images/Chevron.svg'
import Logout from '../Assets/Images/LogoSidebar/Logout.svg'

function LeftBar() {
  const [dropdown, setDropdown] = useState(true)
  return (
    <div className="pt-[45px] ">
      <p className="font-bold text-center text-[29px] text-[#545DFF]">SalesDash</p>
      <div className=" pt-[52px]">
        <div className="flex mb-[30px] pl-[48px] items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <img src={Dashboard} alt="" className="pr-[16px]" />
            <p className="text-[18px] font-bold text-[#545DFF]">Dashboard</p>
          </div>
          <div className="bg-[#545DFF] w-[6px] h-[35px] rounded-tl-[8px] rounded-bl-[8px]"></div>
        </div>
        <div className="flex mb-[30px] pl-[48px] cursor-pointer  items-center">
          <img src={Balance} alt="" className="pr-[16px]" />
          <p className="text-[18px] text-[#7A7A7A] font-[600]">Balance</p>
        </div>
        <div className="flex mb-[30px] pl-[48px] cursor-pointer  items-center">
          <img src={Transaction} alt="" className="pr-[16px]" />
          <p className="text-[18px] text-[#7A7A7A] font-[600]">Transaction</p>
        </div>
        <div className="flex mb-[30px] pl-[48px] cursor-pointer  items-center">
          <img src={Product} alt="" className="pr-[16px]" />
          <p className="text-[18px] text-[#7A7A7A] font-[600]">Product</p>
        </div>
        <div onClick={() => setDropdown(!dropdown)} className="flex items-center  pl-[48px] cursor-pointer justify-between">
          <div className="flex  items-center">
            <img src={Channel} alt="" className="pr-[16px]" />
            <p className="text-[18px] text-[#7A7A7A] font-[600]">Channel</p>
          </div>
          {dropdown ? <img src={Chevron} className="pr-[24px]" alt="" /> : <img src={Chevron} className="pl-[24px] rotate-180" alt="" />}
        </div>
        {/* DROPDOWn */}
        {dropdown && (
          <div className="mt-[30px] px-[24px]">
            <p className="text-[18px] pl-[25%] text-[#7A7A7A] font-[600]">Agent</p>
            <p className="text-[18px] pl-[25%] my-[30px] text-[#7A7A7A] font-[600]">Balance</p>
            <p className="text-[18px] pl-[25%] text-[#7A7A7A] font-[600]">Transaction</p>
            <div className="bg-[#C4C4C4] w-full mt-[30px]  h-[2px]"></div>
          </div>
        )}

        {/* DROPDOWn */}
        <div className="flex mt-[30px] pl-[48px] cursor-pointer  items-center">
          <img src={Logout} alt="" className="pr-[16px]" />
          <p className="text-[18px] text-[#7A7A7A] font-[600]">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
