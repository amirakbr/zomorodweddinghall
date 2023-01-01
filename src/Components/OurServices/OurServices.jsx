let id = 0 ;
const OurServicesValue = [
    {
        id : id , 
        imageUrl : './Assets/emrlad/OurService/Birthday.jpg' ,  
        text : 'برگزاری مراسمات تولد'
    } , 
    {
        id : ++id , 
        imageUrl : './Assets/emrlad/OurService/BrideAccesory.jpg' , 
        text : 'مزون عروس'
    } , 
    {
        id : ++id , 
        imageUrl : './Assets/emrlad/OurService/BrushBeauti.jpg' , 
        text : 'آرایش تخصصی عروس'
    } , 
    {
        id : ++id , 
        imageUrl : './Assets/emrlad/OurService/Engage.jpg' ,
        text : 'مراسم خواستگاری'
    } , 
    {
        id : ++id , 
        imageUrl : './Assets/emrlad/OurService/Events.jpg' ,
        text : 'برگزاری ایونت و افتتاحیه'
    } , 
    {
        id : ++id , 
        imageUrl : './Assets/emrlad/OurService/FlowerDecorate.jpg' ,
        text : 'گل آرایی سفره عقد'
    } , 
]

const OurServices =() => {
    return(
        <div id="ourservices" className="flex flex-col container mx-auto ">
            <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mt-10">
                 خدمات و سرویس های برگزیده 
            </h3>
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] place-content-center gap-10 w-full mt-[3rem] px-8">
                    {
                        OurServicesValue.map((item , id)=>
                            <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden OurServices shadow-[0rem_0rem_1.1rem_0rem_#c7c7c7] transation-all duration-[.5s] translate-y-[0rem] hover:translate-y-[-1rem] hover:shadow-[0rem_0rem_1.1rem_.1rem_#6c6c6c] relative after:absolute after:w-full after:left-0 after:bottom-0 after:border-b-4 after:border-b-[#50C878] after:content-['_'] after:block after:scale-x-[0] after:origin-left after:hover:scale-x-[1] after:transation-all after:duration-[.3s] ">
                                <div className="h-[14rem] w-full flex items-center justify-center relative cursor-pointer">
                                    <img src={item.imageUrl} id={id} alt={item.text} className="object-cover object-center w-full h-full" />
                                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-[1] transation-all duration-[.2s]">
                                        <a className="p-2 bg-[#42424285] backdrop-blur-sm rounded transation-all duration-[.2s]   hover:scale-[1.1] scale-[1] text-[white]">
                                            اطلاعات بیشتر   
                                        </a>
                                    </div>
                                </div>
                                <span className="text-lg font-base py-2 bg-[#00ff9514] w-full text-center">
                                    {
                                        item.text
                                    }
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="flex justify-center md:justify-end mt-8">
                    <a target='_blank' className="transation-all duration-[.3s] translate-y-[0] hover:translate-y-[-.5rem] cursor-pointer scale-[1]">
                        <span className="py-2 px-4 rounded bg-[green] text-lg text-white">
                            مشاهده لیست کامل خدمات
                        </span>
                    </a>
            </div>
        </div>
    )
}
export default OurServices ; 