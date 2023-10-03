import React from 'react'
import bg from "../../assets/diagmonds.png"
import { Text, RangeSlider, Button, Image } from "@mantine/core"
import { IconInfoCircle } from '@tabler/icons-react'
import Round from "../../assets/diamonds/round.svg"
import Princess from "../../assets/diamonds/Princess.svg"
import Emerald from "../../assets/diamonds/Emerald.svg"
import Asscher from "../../assets/diamonds/Asscher.svg"
import Cushion from "../../assets/diamonds/Cushion.svg"
import Marquise from "../../assets/diamonds/Marquise.svg"
import Radiant from "../../assets/diamonds/Radiant.svg"
import Oval from "../../assets/diamonds/Oval.svg"
import Pear from "../../assets/diamonds/Pear.svg"
import Heart from "../../assets/diamonds/Heart.svg"

const FilterDiamond = () => {

    function caratLabelFormat(value: number) {
        return `${value} Carat`;
    }

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className='py-10 h-screen'
        >
            <div className='bg-white h-full max-w-7xl m-auto rounded-xl shadow-2xl p-5 grid md:grid-cols-2 gap-5 select-none'>
                <div className='space-y-3'>
                    <div className='flex gap-3 items-center'>
                        <Text >Shape</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='grid grid-cols-5 gap-3'>
                        {shapes.map(shape => (
                            <div className='space-y-1 p-3 hover:shadow-lg cursor-pointer rounded-xl'>
                                <img src={shape.svg} alt={shape.name} className='block m-auto' />
                                <Text className='text-center' size='sm'>{shape.name}</Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='flex gap-3 items-center'>
                        <Text >Certification</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='space-x-3 h-[150px] flex justify-between'>
                        {["GIA", "AGS", "EGL", "IGI", "HDR"].map((each: string) => (
                            <Button fullWidth>{each}</Button>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-3 items-center'>
                        <Text >Carat</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='grid items-center w-8/12 m-auto'>
                        <RangeSlider
                            mt="xs"
                            size="xs"
                            color="#151542"
                            label={caratLabelFormat}
                            precision={2}
                            thumbSize={20}
                            labelAlwaysOn
                            max={30}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <Text >Color</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='grid items-center w-3/4 m-auto'>
                        <RangeSlider
                            step={14.28}
                            mt="xs"
                            size="xs"
                            color="#151542"
                            thumbSize={20}
                            classNames={{ label: "hidden" }}
                            marks={[
                                { value: 0.00, label: <Text>K</Text> },
                                { value: 14.28, label: <Text>J</Text> },
                                { value: 28.57, label: <Text>I</Text> },
                                { value: 42.85, label: <Text>H</Text> },
                                { value: 57.14, label: <Text>G</Text> },
                                { value: 71.42, label: <Text>F</Text> },
                                { value: 85.71, label: <Text>E</Text> },
                                { value: 100.0, label: <Text>D</Text> }
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <Text >Clarity</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='grid items-center w-3/4 m-auto'>
                        <RangeSlider
                            step={14.28}
                            mt="xs"
                            size="xs"
                            color="#151542"
                            thumbSize={20}
                            classNames={{ label: "hidden" }}
                            marks={[
                                { value: 0.00, label: <Text>SI2</Text> },
                                { value: 14.28, label: <Text>SI1</Text> },
                                { value: 28.57, label: <Text>VS2</Text> },
                                { value: 42.85, label: <Text>VS1</Text> },
                                { value: 57.14, label: <Text>VVS2</Text> },
                                { value: 71.42, label: <Text>VVS1</Text> },
                                { value: 85.71, label: <Text>IF</Text> },
                                { value: 100.0, label: <Text>FL</Text> }
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <Text >Cut</Text>
                        <IconInfoCircle size={18} />
                    </div>
                    <div className='grid items-center w-3/4 m-auto'>
                        <RangeSlider
                            step={33.33}
                            mt="xs"
                            size="xs"
                            color="#151542"
                            thumbSize={20}
                            classNames={{ label: "hidden" }}
                            marks={[
                                { value: 0.00, label: <Text>Good</Text> },
                                { value: 33, label: <Text>Very Good</Text> },
                                { value: 66, label: <Text>Ideal</Text> },
                                { value: 100, label: <Text>Astor ideal</Text> },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterDiamond;


const shapes = [
    {
        name: "Round",
        svg: Round
    },
    {
        name: "Princess",
        svg: Princess
    },
    {
        name: "Emerald",
        svg: Emerald
    },
    {
        name: "Asscher",
        svg: Asscher
    },
    {
        name: "Cushion",
        svg: Cushion
    },
    {
        name: "Marquise",
        svg: Marquise
    },
    {
        name: "Radiant",
        svg: Radiant
    },
    {
        name: "Oval",
        svg: Oval
    },
    {
        name: "Pear",
        svg: Pear
    },
    {
        name: "Heart",
        svg: Heart
    }
]