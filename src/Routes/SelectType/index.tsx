import React from 'react'
import natural from "../../assets/Natural-diamond.jpg"
import labDiamond from "../../assets/holding-diamond-in-tweezers-.jpg"
import bg from "../../assets/diagmonds.png"
import { Text, Radio } from "@mantine/core"
import { useNavigate } from 'react-router-dom'

const DiamondType = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className='min-h-screen'
    >
      <Radio.Group
        name="Select Diamond"
      >
        <div
          className='max-w-3xl h-screen grid md:grid-cols-2 m-auto items-center gap-5 p-5 md:p-0'
        >
          <div className='shadow-xl rounded-2xl overflow-clip hover:scale-95 duration-200 hover:shadow-lg cursor-pointer relative'
            onClick={() => navigate("/filter-diamond")}
          >
            {/* <Radio value="Natural Diamond" className='absolute top-5 right-5' /> */}
            <img src={natural} alt="Natural Diamond" className='' />
            <Text className='text-center text-white'>Natural Grown Daimond</Text>
          </div>
          <div className='shadow-xl rounded-2xl overflow-clip hover:scale-95 duration-200 hover:shadow-lg cursor-pointer relative'
            onClick={() => navigate("/filter-diamond")}
          >
            {/* <Radio value="Lab Grown Diamond" className='absolute top-5 right-5' /> */}
            <img src={labDiamond} alt="Lab Diamond" className='' />
            <Text className='text-center text-white'>Lab Created Daimond</Text>
          </div>
        </div>
      </Radio.Group>
    </div >
  )
}

export default DiamondType