import { useEffect, useState } from "react";
import { Spinner } from "../Icons/Icons";
const Ariticles =() => {
    const [loading , setLoading] = useState(true) ; 
    const [data , setData] = useState([]) ; 
    useEffect(()=>{
        async function Catcher( ) {
            let response =  await fetch('https://mocki.io/v1/e3704ed5-005f-42b0-862f-51a3e539d058') ; 
            let data = await response.json() ; 
            if(!response.ok) {
                const message = `${response.status}` ; 
                throw new Error(message) ;
            }
            const lastdate = await data ; 
            console.log(lastdate) ; 
            return lastdate ; 
        }
        Catcher()
        .then(lastdate => setData(lastdate)) 
        .catch(message => setLoading(true))
        .finally(
            setLoading(false) 
            
        )  ; 
        
    },[])
    return(
        <div className="flex flex-col container mx-auto">
            <h3 className="text-2xl font-semibold mt-10">
                آخرین مقالات
            </h3>
            {
                loading === true ? 
                <>
                    <Spinner />
                </> : 
                <>
                    <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-[2rem] mt-[4rem] px-8">
                            {
                                data.map((item , id)=> 
                                    <div className="flex flex-col overflow-hidden rounded-lg cursor-pointer shadow-[0rem_0rem_1.1rem_0rem_#c7c7c7] transation-all duration-[.5s] translate-y-[0rem] hover:translate-y-[-1rem] hover:shadow-[0rem_0rem_1.1rem_.1rem_#6c6c6c] ">
                                        <div className="w-full h-[20rem] relative">
                                            <img src={item.avatar} className="w-full h-full object-center object-cover" />
                                            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-[1] transation-all duration-[.2s]">
                                                <a className="py-4 px-6 bg-[#42424285] backdrop-blur-sm rounded transation-all duration-[.2s]   hover:scale-[1.1] scale-[1] text-[white]">
                                                    ادامه مطلب
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-4 p-2">
                                            <p className="text-lg">
                                                {
                                                    item.name
                                                }
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center p-2 gap-4 flex-wrap">
                                            <span className="text-sm text-gray-500">
                                                {
                                                    item.createdAt
                                                }
                                            </span>
                                            <a className="bg-[forestgreen] text-[white] rounded py-1 px-4">
                                                ادامه مطلب
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </>
            }
            
        </div>
    )
}
export default Ariticles ; 