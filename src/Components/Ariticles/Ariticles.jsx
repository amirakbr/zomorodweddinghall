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
            <h4 className="text-2xl">
                آخرین مقالات
            </h4>
            {
                loading === true ? 
                <>
                    <Spinner />
                </> : 
                <>
                    <div className="grid grid-cols-[1fr_1fr] gap-[2rem]">
                            {
                                data.map((item , id)=> 
                                    <div className="flex flex-col overflow-hidden rounded-lg p-2">
                                        <div className="w-full h-[20rem] relative">
                                            <img src={item.avatar} className="w-full h-full object-center object-cover" />
                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transation-all duration-[.3s] opacity-[0] hover:opacity-[1]">
                                                <span className="text-xl bg-[forestgreen] text-[white] rounded p-4">
                                                    ادامه مطلب
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-4">
                                            <p className="text-xl">
                                                {
                                                    item.name
                                                }
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>
                                                {
                                                    item.createdAt
                                                }
                                            </span>
                                            <a className="text-xl bg-[forestgreen] text-[white] rounded p-2">
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