import React from 'react'
import ChevronRed from '../Assets/Images/ChevronRed.svg'
import ChevronGreen from '../Assets/Images/ChevronGreen.svg'
import ChevronYellow from '../Assets/Images/ChevronYellow.svg'

function CardMain(props) {
  return (
    <div className="bg-white  w-full desktop3:h-[121px] p-[16px] rounded-[12px]" style={{ boxShadow: '0px 0px 26px #F0F1FF' }}>
      <p className="font-bold text-[16px] text-[#7A7A7A] phone:text-center">{props.title}</p>
      {props.type === 'IDR' ? (
        <p className="text-[30px] font-bold text-black pb-[4px] phone:text-center">{props.value}</p>
      ) : (
        <p className="text-[30px] font-bold text-black pb-[4px] phone:text-center">
          {props.value} <span className="text-[20px]">Transaction</span>
        </p>
      )}
      {props.title === 'Profit' && (
        <div className="flex items-center desktop3:justify-end phone:justify-center tablet:justify-end pb-[14px] ">
          <img src={ChevronRed} className="pr-[3px]" alt="" />
          <p className="text-[14px] font-bold text-[#E94948]">0.3% compared to 7 days ago</p>
        </div>
      )}
      {props.title === 'Sales' && (
        <div className="flex items-center desktop3:justify-end phone:justify-center tablet:justify-end pb-[14px] ">
          <img src={ChevronGreen} className="pr-[3px]" alt="" />
          <p className="text-[14px] font-bold text-[#36D189]">0.5% compared to 7 days ago</p>
        </div>
      )}
      {props.title === 'Transaction' && (
        <div className="flex items-center desktop3:justify-end phone:justify-center tablet:justify-end pb-[14px] ">
          <img src={ChevronYellow} className="pr-[3px]" alt="" />
          <p className="text-[14px] font-bold text-[#FFDC7D]">same as 7 days ago</p>
        </div>
      )}
    </div>
  )
}

export default CardMain
