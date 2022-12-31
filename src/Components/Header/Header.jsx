import { Palace } from "../Icons/Icons";
const Header = () => {
    return(
        <header className="flex items-center gap-x-8 px-8 py-2 bg-[#bbffce]">
            <div className="relative flex items-center gap-x-4">
               <div className="w-[3rem]">
                    <img className="object-cover object-center" src="./Assets/Emerald.png" />
               </div>
               <span className="text-xl text-[#047508]">
                    باغ تالار زمرد
               </span>
            </div>
            <div className="flex items-center gap-x-6 text-lg realative mt-1">
                <a className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    درباره ما
                </a>
                <a className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    گالری تصاویر
                </a>
                <a className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    خدمات
                </a>
                <a className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    خدمات برگزیده
                </a>
                <a className="flex flex-col after:block after:content-['_'] after:border-b-2 after:border-b-[black] after:top-1 after:relative after:scale-0 after:transation-all after:duration-[.3s] after:hover:scale-[1] cursor-pointer">
                    همراهان ما
                </a>
            </div>
        </header>
    )
}
export default Header ; 