import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const initialValue = [
    {
        id : 0 , 
        imageUrl : './Assets/emrlad/Hero/1.jpg' , 
        text : 'بهترین برگزار کننده مجالس عروسی در مشهد' , 
    } , 
    {
        id : 1 , 
        imageUrl : './Assets/emrlad/Hero/2.jpg' , 
        text : 'بهترین برگزار کننده مجالس عروسی در مشهد' , 
    } , 
    {
        id : 2 , 
        imageUrl : './Assets/emrlad/Hero/3.jpg' , 
        text : 'بهترین برگزار کننده مجالس عروسی در مشهد' , 
    }
]


const Hero = () => {
    const [carousel , setCarousel] = useState(0) ; 
    const HandleNextSlide = () => {
        setCarousel(carousel + 1 ) ; 
    }
    return(
        <hero className="flex flex-col">
            <div className="w-full h-full">
            <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        {
                            initialValue.map((item , id)=>
                            <SwiperSlide>
                        <div className="relative h-[30rem]">
                                <img aria-label={item.text} alt={item.id} className="h-[100%] w-full object-cover object-[bottom]" src={item.imageUrl} />
                                <div className="absolute 
                                bg-[#50C878] p-4 rounded flex flex-col items-center top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                                    <h1 className="text-2xl">
                                        قصر مجلل زمرد
                                    </h1>
                                    <h2 className="text-xl">
                                        {
                                            item.text
                                        }
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    )          
                }
                </Swiper>
            </div>
        </hero>
    )
}
export default Hero ; 
/*
// import Swiper core and required modules


// Import Swiper styles


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

*/
/*
<div className="relative h-[30rem]">
                                <img aria-label={item.text} alt={item.id} className="h-[100%] w-full object-cover object-[bottom]" src={item.imageUrl} />
                                <div className="absolute 
                                bg-[#50C878] p-4 rounded flex flex-col items-center top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                                    <h1 className="text-2xl">
                                        قصر مجلل زمرد
                                    </h1>
                                    <h2 className="text-xl">
                                        {
                                            item.text
                                        }
                                    </h2>
                                </div>
                            </div>

*/