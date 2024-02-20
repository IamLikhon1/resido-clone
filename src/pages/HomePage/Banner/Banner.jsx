import { IoLocationOutline } from "react-icons/io5";
import bannerImg from '@/asserts/bannerImg.png'
import Image from "next/image";
const Banner = () => {
    return (
        <div className=" bg-[#2540A2] mt-5">
            <div className="max-w-7xl mx-auto py-20  grid lg:grid-cols-2 items-center lg:gap-20">
                {/* left-side */}
                <div>
                    <p className="text-white text-lg">Amet consectetur adipisicing <span className="px-2 py-1 bg-green-600 rounded-md text-xs">New</span></p>
                    <h1 className="text-6xl text-white font-bold mt-4">Find Your Place Of <br /> Dream</h1>
                    {/* search */}
                    <div className="bg-white border py-2 rounded-md mt-8 flex justify-between items-center pl-4 pr-2">
                        <div className="flex items-center">
                            <IoLocationOutline className="text-2xl text-gray-600" />
                            <input className="focus:outline-none pl-5 px-20 py-2" type="text" placeholder="Search for a Property" />
                        </div>
                        <button className="bg-[#1a2340] px-5 py-5 rounded-md text-white">Go & Search</button>
                    </div>
                    <div>

                    </div>
                </div>
                {/* right-side */}
                <div className="ml-10">
                    <Image
                        src={bannerImg}
                        className="w-fit"
                        width={3000}
                        height={3000}
                        alt="banner Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;