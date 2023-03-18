import React from 'react'
import LeftBar from '../Components/LeftBar'
import Main from '../Components/Main'
import Rightbar from '../Components/Rightbar'

function Home() {
  return (
    <div className="grid desktop3:grid-cols-12">
      <div className="bg-[#FCFCFF] h-screen col-span-2 phone:hidden tablet:hidden">
        <LeftBar />
      </div>
      <div className="bg-white desktop3:col-span-8 h-full">
        <Main />
      </div>
      <div className="bg-[#F3F4FF]  h-full col-span-2 tablet:hidden phone:hidden">
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
