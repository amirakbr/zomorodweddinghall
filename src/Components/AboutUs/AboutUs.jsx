import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let id = 0 ;
const AboutUsSlider = [
    {
        id : id ,
        imageUrl : './Assets/emrlad/male/1.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/male/2.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/female/1.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/female/2.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/female/3.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/male/3.jpg'
    },
    {
        id : ++id ,
        imageUrl : './Assets/emrlad/female/4.jpg'
    }
]
const AboutUs =() => {
    console.log(AboutUsSlider) ; 
    return(
        <div id='aboutUs' className="flex flex-col items-center container mx-auto ">
            <h3 className="text-2xl font-semibold mt-10">
                درباره ما
            </h3>
            <div className="grid grid-cols-[1fr] xl:grid-cols-[1fr_1.2fr] gap-8 relative px-8 items-center mt-[3rem] cursor-pointer"  >
                <div className="text-justify overflow-hidden">
                    <article className='about-us-article rounded-lg text-lg relative overflow-hidden py-4 px-8 '>
                        <h4 className="text-xl font-semibold mb-4">
                            قصر مجلل زمرد
                        </h4>
                        قصر مجلل زمرد یکی کامل ترین مجموعه عروسی در مشهد می‌باشد.
                        این تالار با فاصله‌ی بسیار کمی از مرکزیت مشهد، سمت اتوبان امام علی(ع) واقع شده است.
                        تالار زمرد علاوه بر تشریفات مجالس عروسی، در زمینه برگزاری مجالس برای همایش‌ها و افتتاحیه‌ها 
                        نیز نامی ماندگار از خود به‌جای گذاشته است. این تالار علاوه بر عمارت بزرگ برای برگزاری مراسم،
                        باغ بسیار بزرگ و جذابی برای برگزاری مراسم در فضای باز دارد. در فصل های گرم علاوه بر فضای داخل، 
                        میهمانان شما میتوانند از فضای باز با دکوراسیون مجلل نیز استفاده کنند. آب نمای لاکچری، نورپردازی حرفه‌ای، اتاق کودک، 
                        پارکینگ اختصاصی و ده ها امکانات خاص و فوق العاده که تماما مختص قصر زمرد می‌باشد.
                    </article>
                </div>
                <div className="relative w-full h-full max-h-[300px] xl:max-h-[unset] object-center object-cover overflow-hidden bg-[green] rounded">
                    <Swiper 
                    className='w-full h-full relative'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y , Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation = {true}
                    autoplay={{
                        delay : 3000 , 
                        disableOnInteraction : false ,
                        pauseOnMouseEnter : true
                    }}
                    effect = "cards"
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} >
                        {
                            AboutUsSlider.map((item , id)=>
                                <SwiperSlide className='w-full he-full'>
                                    <img src={item.imageUrl} className="w-full h-full max-h-[unset] xl:max-h-[350px] object-center object-cover" id={id} alt={item.imageUrl + id} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper >
                </div>
            </div>
        </div>
    )
}
export default AboutUs ; 