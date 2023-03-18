import React from 'react'

function ProfilAgent(props) {
  return (
    <div>
      <div className="flex items-center pt-[20px]">
        <div className="border-[3px] border-[#989EFF] w-fit p-[6px] rounded-full">
          <img src={props.img} alt="" />
        </div>
        <div className="pl-[16px] w-[100%]">
          <p className="text-[16px] font-bold text-[#545DFF]">{props.title}</p>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-[600] text-[#7A7A7A]">Profit</p>
            <p className="text-[14px]  font-[700] text-[#212121]">{props.profit}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px]  font-[600] text-[#7A7A7A]">Sales</p>
            <p className="text-[14px]  font-[700] text-[#212121]">{props.sales}</p>
          </div>
          <div className="flex items-center w-full justify-between">
            <p className="text-[14px]  font-[600] text-[#7A7A7A]">Transaction</p>
            <p className="text-[14px]  font-[700] text-[#212121]">{props.trans} transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilAgent
