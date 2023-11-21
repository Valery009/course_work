import logo from "../assets/head-logo.png"
import iconUA from '../assets/icon-ukraine.png'
import SocialNetworks from "./SocialNetworks"
import NavBar from "./NavBar"
interface HeaderProps {
    onChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChange }) => {


  

    return (
        <div className="w-full text-base  text-white h-[25vh]  bg-[#15263b] grid grid-cols-2 xl:flex xl:flex-col xl:h-[20vh]  ">
            <div className="bg-[#15263b] mt-2  font-lato font-sans  xl:h-[35%]  xl:flex xl:text-sm ">
                <div className="flex w-full mt-auto mb-auto ml-[5%]">
                    <img className="h-[14px] w-[20px] mt-auto mb-auto  mr-3" src={iconUA} alt="ua" />Інформаційни портал департаменту міжнародного оборонного співробітництва МО України
                </div>
                <div className="bg-black triangle w-[40%]">{<SocialNetworks />}</div>
            </div>
            <div className="bg-black xl:h-[65%] flex items-center text-2xl"><img src={logo} className=" text-sm ml-2 h-full w-[8%]" alt="logo" />
                <span className="font-serif crimson-text ml-10">
                    Департамент міжнародного оборонного співробітництва МО України
                </span>
                {<NavBar/>}
            </div>


        </div>



    )
}

export default Header
