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
        <div id="gallary" className="flex flex-col items-center gap-8 container mx-auto">
            <h3 className="text-2xl font-semibold mt-10">
                گالری تصاویر
            </h3>
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-[3rem] mt-[3rem] px-8">
                {
                    initialValue.map((item ,id)=>
                        <div className="flex flex-col items-center overflow-hidden rounded-lg cursor-pointer shadow-[0rem_0rem_1.1rem_0rem_#c7c7c7] transation-all duration-[.5s] translate-y-[0rem] hover:translate-y-[-1rem] hover:shadow-[0rem_0rem_1.1rem_.1rem_#6c6c6c] relative after:absolute after:w-full after:left-0 after:bottom-0 after:border-b-4 after:border-b-[#50C878] after:content-['_'] after:block after:scale-x-[0] after:origin-left after:hover:scale-x-[1] after:transation-all after:duration-[.3s]">
                            <div className="w-full relative h-full">
                                <img src={item.imgUrl} className="object-cover object-center h-[15rem] w-full" />
                                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-[1] transation-all duration-[.2s]">
                                    <a className="py-4 px-6 bg-[#42424285] backdrop-blur-sm rounded transation-all duration-[.2s]   hover:scale-[1.1] scale-[1] text-[white]">
                                        مشاهده بیشتر
                                    </a>
                                </div>
                            </div>
                            <span className="text-lg font-base py-2 bg-[#00ff9514] w-full text-center">
                                {
                                    item.title
                                }
                            </span>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center md:justify-end mt-8 w-full">
                    <a target='_blank' className="transation-all duration-[.3s] translate-y-[0] hover:translate-y-[-.5rem] cursor-pointer scale-[1]">
                        <span className="py-2 px-4 rounded bg-[green] text-white">
                            مشاهده بیشتر
                        </span>
                    </a>
            </div>
        </div>
    )
}
export default Gallary ; 