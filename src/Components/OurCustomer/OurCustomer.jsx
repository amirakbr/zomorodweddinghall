import { DocNekoiHolding , Goethe , MelatBank , MeliBank , ParsPendarnahad , Saipa , Tci}  from "../Icons/Icons";




const OurCustomerContainerClassNames = "w-[6rem] transation-all duration-[.3s] grayscale-[100%] hover:grayscale-[0%] cursor-pointer	"

const OurCustomerDescriptionClassNames = "text-lg" ; 

const OurCustomer =() => {
    return(
        <div className="flex flex-col items-center gap-y-8 container mx-auto mt-10">
            <h4 className="text-2xl">
                برخی از همراهان همیشگی ما
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-[3rem]">
                <div className={OurCustomerContainerClassNames} style={{width : '7rem'}}>
                    <DocNekoiHolding />
                    
                </div>
                <div className={OurCustomerContainerClassNames} style={{width : '10rem'}}>
                    <Goethe />
                    
                </div>
                <div className={OurCustomerContainerClassNames}>
                    <MelatBank />
                    
                </div>
                <div className={OurCustomerContainerClassNames}>
                    <ParsPendarnahad />
                    
                </div>
                <div className={OurCustomerContainerClassNames}>
                    <Saipa />
                    
                </div>
                <div className={OurCustomerContainerClassNames}>
                    <Tci />
                    
                </div>
                <div className={OurCustomerContainerClassNames}>
                    <MeliBank />
                    
                </div>
            </div>
        </div>
    )
}
export default OurCustomer ; 
/*

<span className={OurCustomerDescriptionClassNames}>
                        هولدینگ دکتر نکویی
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        موسسه آموزش زبان گوته
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        بانک ملت
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        هولدینگ پارس پندار
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        شرکت سایپا
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        شرکت مخابراط
                    </span>
<span className={OurCustomerDescriptionClassNames}>
                        بانک ملی
                    </span>

*/