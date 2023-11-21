
import { useRef, useState, useEffect, RefObject } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Controller,  } from 'swiper/modules';
import { Post } from '../types/index';


interface SliderProps {
    posts: Post[];
}

const Slider: React.FC<SliderProps> = ({ posts }) => {
    const postsToDisplay = posts.slice(0, 10);
    const swiper = useRef<SwiperRef>(null);
    const [slide,setSlide]=useState(0);



    useEffect(() => {

       
    }, [slide]);



    const slides = postsToDisplay.map((s, index) => (
        <SwiperSlide key={index} ><img src={s.image_url}  alt={`Slide ${index + 1}`} /></SwiperSlide>
    ));







    const swiperAutoplay = {
        delay: 3000,
        disableOnInteraction: false,
    };




    return (
        <div className=" w-full md:flex xl:flex-col">


            <Swiper ref={swiper} 
                slidesPerView={3}
                grabCursor={true}
                style={{ width: '100%' }} navigation={true} modules={[Navigation, Autoplay, Controller]} className="mySwiper text-black" autoplay={swiperAutoplay} onSlideChange={(swiper)=>{setSlide(swiper.activeIndex); console.log(swiper.activeIndex)}}>
                {slides}
            </Swiper>



        </div>
    );
}


export default Slider; 
