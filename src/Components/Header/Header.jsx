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
            <div className="flex items-center gap-x-6 text-lg">
                <a>
                    درباره ما
                </a>
                <a>
                    گالری تصاویر
                </a>
                <a>
                    خدمات
                </a>
                <a>
                    خدمات برگزیده
                </a>
                <a>
                    همراهان ما
                </a>
            </div>
        </header>
    )
}
export default Header ; 