import { useState } from "react";
import { Palace } from "../Icons/Icons";
const Header = () => {
    const [menu , setMenu] = useState(false) ; 
    return(
        <header className="flex items-center justify-between gap-x-8 px-8 py-2">
            <div className="flex items-center gap-x-8">
                <div className="relative flex items-center gap-x-4">
                    <div className="w-[3rem]">
                        <img className="object-cover object-center" src="./Assets/Emerald.png" />
                    </div>
                    <h1 className="text-2xl font-bold">
                        باغ تالار زمرد
                    </h1>
                </div>
                <div className="hidden sls:flex items-center gap-x-6 text-lg font-semibold realative mt-1">
                    <a href="#aboutUs" className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    درباره ما
                    </a>
                    <a href="#ourservices" className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    خدمات برگزیده
                    </a>
                    <a href="#supporters" className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    همراهان ما
                    </a>
                    <a href="#gallary" className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    گالری تصاویر
                    </a>    
                </div>
            </div>
                <a target='_blank' href="tel:9891515454" className="hidden sls:block">
                    <span className="py-2 px-4 rounded bg-[green] text-lg font-semibold text-white">
                        رزرو مجلس
                    </span>
                </a>
            <div className="block sls:hidden">
                <div className="block relative" onClick={()=>{setMenu(!menu)}}>
                    {
                        menu ? 
                        <>
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </> :
                        <>
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </>
                    }
                    {
                        menu ? 
                        <>
                            <div className="hamburgermenue flex flex-col items-center bg-[white] h-[16rem] rounded-lg absolute top-[3.5rem] w-[10rem] left-0 z-[+1000] text-lg font-semibold">
                                <a href="#aboutUs" className="py-3 w-full text-center flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                                    درباره ما
                                </a>
                                <a href="#ourservices" className="py-3 w-full text-center flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                                    خدمات برگزیده
                                </a>
                                <a href="#supporters" className="py-3 w-full text-center flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                                    همراهان ما
                                </a>
                                <a href="#gallary" className="py-3 w-full text-center flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                                    گالری تصاویر
                                </a>
                                <a target='_blank' href="tel:9891515454" className="py-3 w-full text-center block">
                                    <span className="py-2 px-4 rounded bg-[green] text-lg text-white">
                                        رزرو مجلس
                                    </span>
                                </a>
                            </div>    
                        </> : 
                        null
                    }
                </div>
            </div>
        </header>
    )
}
export default Header ; 