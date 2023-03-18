import React from 'react'

function ProductCard(props) {
  return (
    <div className="border-[3px] desktop3:relative p-[16px] desktop3:h-[158px] rounded-[12px] border-[#989EFF] phone:h-full tablet:h-full">
      <div className="flex justify-center">
        <img src={props.logo} alt="" />
      </div>
      <p className="text-[#545DFF] text-center pt-[4px] pb-[3px] font-bold text-[14px] w-full">{props.title}</p>
      <p className="font-bold text-[14px] text-center text-[#7A7A7A]">{props.value}</p>
      <p className={`text-[18px] ${props.value === '' ? 'desktop3:absolute phone:left-[33%] tablet:left-[33%] desktop3:bottom-1' : ''}  flex items-center phone:justify-center tablet:justify-center font-bold`}>
        {props.transactions} <span className="text-[12px] pl-[5px]">transactions</span>
      </p>
    </div>
  )
}

export default ProductCard
