import React, { useState } from 'react'
import CardMain from './CardMain'
import Chartdata from './Chartdata'
import ProfilAgent from './ProfilAgent'
import ProfileOne from '../Assets/Images/Profileone.svg'
import ProfileTwo from '../Assets/Images/ProfileTwo.svg'
import ProfileThree from '../Assets/Images/ProfileThree.svg'
import ProfileFour from '../Assets/Images/ProfileFour.svg'
import ProfileFive from '../Assets/Images/ProfileFive.svg'
import ProductCard from './ProductCard'
import Maxim from '../Assets/Images/Logo/Maxim.svg'
import Ovo from '../Assets/Images/Logo/Ovo.svg'
import Pln from '../Assets/Images/Logo/Pln.svg'
import Telkomsel from '../Assets/Images/Logo/Telkomesel.svg'
import Three from '../Assets/Images/Logo/Three.svg'
import Dashboard from '../Assets/Images/LogoSidebar/Dashboard.svg'
import Balance from '../Assets/Images/LogoSidebar/Balance.svg'
import Channel from '../Assets/Images/LogoSidebar/Channel.svg'
import Product from '../Assets/Images/LogoSidebar/Product.svg'
import Transaction from '../Assets/Images/LogoSidebar/Transaction.svg'
import Chevron from '../Assets/Images/Chevron.svg'
import Logout from '../Assets/Images/LogoSidebar/Logout.svg'
import { Fade } from 'react-reveal'
import Profil from '../Assets/Images/Profile.svg'

function Main() {
  const data = {
    labels: ['04 Apr 22', '06 Apr 22', '08 Apr 22', '10 Apr 22'],
    datasets: [
      {
        fill: true,
        label: '',
        lineTension: 0.5,
        data: [3800, 3300, 4000, 4000, 4500],
        borderColor: '#545DFF',
        backgroundColor: 'rgba(84, 93, 255, 0.3)',
      },
    ],
  }

  const [mobile, setMobile] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return (
    <>
      {mobile && (
        <div className="desktop3:hidden absolute bg-black bg-opacity-80 w-full h-screen  top-0 right-0">
          <Fade right>
            <div className="bg-white rounded-b-[12px] absolute right-0 phone:w-[70vw] tablet:w-[50vw] h-screen p-[16px]">
              <div className="flex items-center justify-between border-b">
                <p className="text-[16px] font-bold">Menu</p>
                <span onClick={() => setMobile(!mobile)} class="material-symbols-outlined pb-[5%]  cursor-pointer">
                  close
                </span>
              </div>

              {/* MENU */}
              <div className="pt-[10%]">
                <div className="flex items-center mb-[30px] first-letter:cursor-pointer">
                  <img src={Dashboard} alt="" className="pr-[16px]" />
                  <p className="text-[18px] font-bold text-[#545DFF]">Dashboard</p>
                </div>
                <div className="flex mb-[30px]  cursor-pointer  items-center">
                  <img src={Balance} alt="" className="pr-[16px]" />
                  <p className="text-[18px] text-[#7A7A7A] font-[600]">Balance</p>
                </div>
                <div className="flex mb-[30px]  cursor-pointer  items-center">
                  <img src={Transaction} alt="" className="pr-[16px]" />
                  <p className="text-[18px] text-[#7A7A7A] font-[600]">Transaction</p>
                </div>
                <div className="flex mb-[30px]  cursor-pointer  items-center">
                  <img src={Product} alt="" className="pr-[16px]" />
                  <p className="text-[18px] text-[#7A7A7A] font-[600]">Product</p>
                </div>
                <div onClick={() => setDropdown(!dropdown)} className="flex items-center cursor-pointer justify-between">
                  <div className="flex  items-center">
                    <img src={Channel} alt="" className="pr-[16px]" />
                    <p className="text-[18px] text-[#7A7A7A] font-[600]">Channel</p>
                  </div>
                  {dropdown ? <img src={Chevron} className="pr-[24px]" alt="" /> : <img src={Chevron} className="pl-[24px] rotate-180" alt="" />}
                </div>
                {dropdown && (
                  <div className="mt-[30px] px-[24px]">
                    <p className="text-[18px] pl-[10%] text-[#7A7A7A] font-[600]">Agent</p>
                    <p className="text-[18px] pl-[10%] my-[30px] text-[#7A7A7A] font-[600]">Balance</p>
                    <p className="text-[18px] pl-[10%] text-[#7A7A7A] font-[600]">Transaction</p>
                    <div className="bg-[#C4C4C4] w-full mt-[30px]  h-[2px]"></div>
                  </div>
                )}
                <div className="flex mt-[30px] cursor-pointer  items-center">
                  <img src={Logout} alt="" className="pr-[16px]" />
                  <p className="text-[18px] text-[#7A7A7A] font-[600]">Logout</p>
                </div>
              </div>
              {/* MENU */}
              {/* Profile */}
              <div className="absolute bottom-4">
                <div className="flex items-center gap-x-5">
                  <div className="border-[3px] border-[#989EFF] p-[5px] rounded-full w-fit ">
                    <div className="bg-[#FFA800] rounded-full w-fit">
                      <img src={Profil} className="w-[40px]" alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#212121] text-[18px] font-bold">Budi Budiman</p>
                    <p className="text-[16px] font-bold text-[#7A7A7A]">Owner at PT Suka Maju</p>
                  </div>
                </div>
              </div>
              {/* Profile */}
            </div>
          </Fade>
        </div>
      )}

      <div className="desktop3:pt-[32px] desktop3:px-[56px] phone:p-[8%] tablet:p-[8%] ">
        <div className="phone:flex phone:items-start phone:justify-between tablet:flex tablet:items-start tablet:justify-between">
          <div>
            <p className="font-bold text-[#212121] desktop3:text-[30px] phone:text-[24px] tablet:text-[24px]">Dashboard</p>
            <p className="font-bold text-[#7A7A7A]">Today’s date: Sun, 10 April 2022</p>
          </div>
          <span onClick={() => setMobile(!mobile)} class="material-symbols-outlined desktop3:hidden">
            menu
          </span>
        </div>
        <div className="grid desktop3:grid-cols-3 desktop3:gap-x-[20px] desktop3:mt-[38px] phone:grid-cols-1 phone:gap-y-3 phone:mt-[20px] tablet:grid-cols-1 tablet:gap-y-3 tablet:mt-[20px]">
          <CardMain title="Profit" type="IDR" value="Rp 11.500.000" />
          <CardMain title="Sales" type="IDR" value="Rp 56.000.000" />
          <CardMain title="Transaction" value="1.090" />
        </div>
        <div className="grid desktop3:grid-cols-3 desktop3:gap-x-[17px] desktop3:mt-[40px] phone:grid-cols-1 tablet:grid-cols-1">
          <div className="desktop3:col-span-2 ">
            <div className="bg-white rounded-[12px] py-[19px] px-[16px] phone:mt-[3%] tablet:my-[3%]  " style={{ boxShadow: '0px 0px 26px #F0F1FF' }}>
              <p className="text-[16px] font-bold text-[#7A7A7A] desktop3:mb-[24px] phone:text-center tablet:text-center phone:mb-[10px] tablet:mb-[10px]">Sales Chart</p>
              <div className="w-full h-full">
                <Chartdata data={data} />
              </div>
            </div>
            <div className="bg-white w-full desktop3:mt-[20px] py-[19px] px-[16px] rounded-[12px] phone:mt-[4%] tablet:mt-[4%]" style={{ boxShadow: '0px 0px 26px #F0F1FF' }}>
              <p className="text-[16px] font-bold text-[#7A7A7A] mb-[21px] phone:text-center tablet:text-center">Top 5 Products</p>
              <div className="grid desktop3:grid-cols-5  desktop3:gap-x-[16px] phone:grid-cols-1 phone:gap-y-3 tablet:grid-cols-2 tablet:gap-3">
                <ProductCard logo={Maxim} title="Maxim" value="150.000" transactions="120" />
                <ProductCard logo={Telkomsel} title="Telkomsel" value="25.000" transactions="98" />
                <ProductCard logo={Three} title="Three" value="50.000" transactions="74" />
                <ProductCard logo={Ovo} title="Ovo" value="100.000" transactions="68" />
                <ProductCard logo={Pln} title="PLN Postpaid" value="" transactions="50" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] py-[19px] px-[16px] phone:mt-[4%] tablet:mt-[4%]" style={{ boxShadow: '0px 0px 26px #F0F1FF' }}>
            <p className="text-[16px] font-bold text-[#7A7A7A] desktop3:mb-[24px] phone:text-center tablet:text-center">Top 5 Agents</p>
            <ProfilAgent img={ProfileOne} title="PT Suka Maju Jakarta" profit="Rp 3.700.000" sales="Rp 7.230.000" trans="43" />
            <ProfilAgent img={ProfileTwo} title="Susi Susanti" profit="Rp 3.550.000" sales="Rp 5.230.000" trans="37" />
            <ProfilAgent img={ProfileThree} title="Toko Pulsa III Depok" profit="Rp 2.860.000" sales="Rp 4.500.000" trans="38" />
            <ProfilAgent img={ProfileFour} title="PT Suka Maju Bogor" profit="Rp 2.400.000" sales="Rp 4.800.000" trans="40" />
            <ProfilAgent img={ProfileFive} title="Anton Antoman" profit="Rp 2.350.000" sales="Rp 2.100.000" trans="20" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
