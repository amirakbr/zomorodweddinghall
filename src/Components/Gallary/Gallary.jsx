let id = 0 ; 
const initialValue = [
    {
        id : id ,
        title : 'بخش بانوان' , 
        imgUrl : './Assets/emrlad/female/1.jpg'
    } , 
    {
        id : ++id ,
        title : 'بخش مردان' , 
        imgUrl : './Assets/emrlad/male/1.jpg'
    } , 
    {
        id : ++id ,
        title : 'اتاق پرو' , 
        imgUrl : './Assets/emrlad/clothet/1.jpg'
    } , 
    {
        id : ++id ,
        title : 'فضای بیرونی' , 
        imgUrl : './Assets/emrlad/outside/1.jpg'
    } , 
    {
        id : ++id ,
        title : 'لابی' , 
        imgUrl : './Assets/emrlad/Loby/1.jpg'
    } ,
]
const Gallary = () => {
    return(
        <div className="flex flex-col items-center gap-8 mt-10 container mx-auto">
            <h4 className="text-2xl">
                گالری تصاویر
            </h4>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[2rem]">
                {
                    initialValue.map((item ,id)=>
                        <div className="flex flex-col items-center overflow-hidden rounded-lg">
                            <div className="w-full relative h-full">
                                <img src={item.imgUrl} className="object-cover object-center h-[15rem] w-full" />
                                <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center transation-all duration-[.3s] opacity-0 hover:opacity-[1]">
                                    <a className="text-lg bg-[forestgreen] text-[white] rounded p-2">
                                        مشاهده بیشتر
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-lg font-semibold relative w-full text-center py-4">
                                {
                                    item.title
                                }
                                <div className="absolute w-full h-full top-0 left-0 bg-[green] z-[-1]">

                                </div>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Gallary ; 