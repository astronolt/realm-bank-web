import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`flexCenter w-[140px] h-[140px] rounded-full bg-gold-gradient p-[4px] cursor-pointer`}>
    <div className={`flex justify-center items-center flex-col bg-primary w-[95%] h-[95%] rounded-full`}>

      <div className={`flexStart flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
      
    </div>
  </div>
);

export default GetStarted;