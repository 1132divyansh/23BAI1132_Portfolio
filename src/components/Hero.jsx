'use client'
import { motion , useScroll} from "framer-motion";

import { styles } from "../styles"; 
import ScrollProgressIndicator from "./canvas/ScrollProgressIndicator";
import stars from '../assets/stars.png'

const Hero = () => {
  
  return (
    
    <motion.section className={`relative w-full h-screen mx-auto`} 
    style={{
      backgroundImage: `url(${stars})` ,
      backgroundSize: 'cover',  
      backgroundPosition: '0% 10%'
    }} 

    animate={{
      backgroundPosition:["0% 10%" , "100% 90%"], 
    }}

    transition={{
      repeat:Infinity,
      ease:"linear",
      duration:10
    }}
    >


      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>


      <div className=" absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>


      <motion.div 
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }}
      animate={{
        rotate:"1turn",
      }} 
      transition={{
        duration:30,
        repeat:Infinity,
        ease:"linear",
      }}
      className="absolute h-[344px] w-[344px] border opacity-20 border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full flex border border-white rounded-full top-1/2 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>


      <motion.div
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }}
      animate={{
        rotate:"-1turn",
      }}
      transition={{
        duration:60,
        repeat:Infinity,
        ease:"linear",
      }}

      className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>

      <motion.div
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }}
      animate={{
        rotate:"1turn",
      }}
      transition={{
        duration:90,
        repeat:Infinity,
        ease:"linear",
      }}
      
      
      className="absolute h-[544px] w-[544px] rounded-full border opacity-20 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="absolute h-2 w-2 left-0 bg-white  rounded-full top-1/2 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full flex border border-white rounded-full top-1/2 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>


      <ScrollProgressIndicator 
        position="top"
        color="#915EFF" 
        height="4px"
        showPercentage={false}
      />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Divyansh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student  <br className='sm:block hidden' />
            and am intrested in creative things
          </p>
        </div>
      </div>
   
    </motion.section>
  );
};

export default Hero;
