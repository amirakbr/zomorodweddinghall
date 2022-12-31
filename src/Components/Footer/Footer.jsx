import { Twitter , FaceBokk , Telegram , Whatsapp , Location ,CellPhone , Mail } from "../Icons/Icons";
const Footer =() => {
    return(
        <footer className="flex flex-col py-4 px-8 text-white">
            <h4 className="text-2xl text-center">
                با ما در تماس باشید
            </h4>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-8">
                <div className="flex flex-col">
                    <div className="flex items-center text-lg w-full border-b py-4">
                        <img src="./Assets/Emerald.png" className="w-6 ml-4" />
                        <span className="text-lg text-green">
                            قصر مجلل زمرد
                        </span>
                    </div>
                    <p className="mt-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolor, 
                        non explicabo molestias debitis deserunt laboriosam voluptas qui voluptatibus nobis harum laborum delectus vel quibusdam.
                    </p>
                </div>
            <div className="flex flex-col items-center">
                <p className="text-lg w-full border-b py-4">
                    ما را دنبال کنید
                </p>
                    <div className="flex items-center mt-4">
                        <a className="p-2 transation-all duration-[.3s] hover:translate-y-[-.5rem] cursor-pointer">
                            <Twitter />
                        </a>
                        <a className="p-2 transation-all duration-[.3s] hover:translate-y-[-.5rem] cursor-pointer">
                            <FaceBokk />
                        </a>
                        <a className="p-2 transation-all duration-[.3s] hover:translate-y-[-.5rem] cursor-pointer">
                            <Telegram />
                        </a>
                        <a className="p-2 transation-all duration-[.3s] hover:translate-y-[-.5rem] cursor-pointer">
                            <Whatsapp />
                        </a>
                    </div>
            </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg w-full border-b py-4">
                        ارتباط با ما 
                    </p>
                    <div className="flex items-center p-2 transation-all duration-[.25s] hover:translate-x-[-1rem] cursor-pointer mt-4">
                        <Location />
                        <p className="mr-4">
                            آدرس : کیلومتر 7 جاده طرقبه 
                        </p>
                    </div>
                    <div className="flex items-center p-2 transation-all duration-[.25s] hover:translate-x-[-1rem] cursor-pointer ">
                        <CellPhone />
                        <a href="tel:+9890123456789" className="mr-4">
                            تلفن : 3888888
                        </a>
                    </div>
                    <div className="flex items-center p-2 transation-all duration-[.25s] hover:translate-x-[-1rem] cursor-pointer ">
                        <CellPhone />
                        <a href="tel:+9890123456789" className="mr-4">
                            همراه : 091500000000
                        </a>
                    </div> 
                    <div className="flex items-center p-2 transation-all duration-[.25s] hover:translate-x-[-1rem] cursor-pointer ">
                        <Mail />
                        <a href="mailto:zomorodinfo@gmail.com" className="mr-4">
                            ایمیل : zomorodinfo@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer ; 