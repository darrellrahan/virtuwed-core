'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
// import required modules
import { Pagination } from "swiper";


const TestimoniData = [
    {
        name: 'Naufal Nabilansyah',
        profession: 'Project Manager',
        message: 'Mudah. Dapat diandalkan. Dengan virtuwed, kami dapat mengadakan resepsi dengan skalabilitas luas.',
    },
    {
        name: 'Hasnat Ferdiananda',
        profession: 'CTO Cobadulu Academy',
        message: 'Berkat layanan virtuwed, acara kami bisa menjangkau banyak orang.',
    },
    {
        name: 'M Rafly Pratama',
        profession: 'CTO of Upgradia',
        message: 'Virtuwed pelayanannya memuaskan, ramah. Aku sama aura sukaaa, pemakaiannya mudah banget.',
    },
    {
        name: 'Raka Putra Ramadhan',
        profession: 'UI/UX Designer',
        message: 'Gampang banget tinggal ke websitenya karena dia user friendly, thankyou virtuwed!.',
    },
]

interface SwiperStyles {
    [key: string]: string;
}


type TestimoniProps = {
    name: string
    profession: string
    message: string
}
export const ElementTestimoni: React.FC<TestimoniProps> = (props) => {
    return (
        <div className='grid rounded-2xl bg-white border border-solid border-[#d5dfff] p-4'>
            <h4 className='text-xl lg:text-2xl font-deAetna'>{props.name}</h4>
            <p className='font-light font-amiamie'>{props.profession}</p>
            <p className='my-2.5'>⭐⭐⭐⭐⭐</p>
            <p className='font-amiamie'>{props.message}</p>
        </div>
    )
}


const Testimoni = () => {
    const swiperStyles: SwiperStyles = {
        '--swiper-pagination-color': '#D1B0B0',
        '--swiper-pagination-bullet-inactive-color': '#EBEBEB',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-width': '10px',
        '--swiper-pagination-bullet-height': '10px',
    };

    return (
        <Swiper
            className='mySwiper w-full'
            style={swiperStyles}
            // navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {TestimoniData.map((data, key) => {
                return (
                    <SwiperSlide className='px-12 lg:px-0 py-12' key={key}><ElementTestimoni name={data.name} profession={data.profession} message={data.message} /></SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Testimoni