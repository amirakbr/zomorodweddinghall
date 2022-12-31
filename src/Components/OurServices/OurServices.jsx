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
        <div className="flex flex-col container mx-auto mt-8">
            <div className="flex flex-col items-center">
            <h3 className="text-2xl">
                 خدمات و سرویس های برگزیده 
            </h3>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] place-content-center gap-x-8 gap-y-10 w-full mt-8">
                    {
                        OurServicesValue.map((item , id)=>
                            <div className="flex flex-col justify-center items-center p-4 bg-[green]">
                                <div className="h-[10rem] w-[11rem] flex items-center justify-center">
                                    <img src={item.imageUrl} id={id} alt={item.text} className="object-cover object-center w-full h-full" />
                                </div>
                                <span className="text-lg font-semibold mt-4">
                                    {
                                        item.text
                                    }
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="flex justify-end mt-8">
                    <a target='_blank'>
                        <span className="p-4 rounded bg-[green] text-lg text-white">
                            مشاهده لیست کامل خدمات
                        </span>
                    </a>
            </div>
        </div>
    )
}
export default OurServices ; 