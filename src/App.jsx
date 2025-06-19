import React , {useState} from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const backgroundsLeft = [ '#e016dd', '#1386eb', '#8c5c48','#169c39'];
const backgroundsRight = ['#fa78f8','#6bbae8','#b89b7f','#81d16b'];
const name = ['Strawberry', 'Blueberry', 'Chocolate', 'Evergreen'];
import img1 from "./assets/pinkIcecream.png";
import img2 from "./assets/blueIcecream.png";
import img3 from "./assets/browniCECREAM.png";
import img4 from "./assets/greenIcecream.png";

const ice = [img1, img2, img3, img4];
const App = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const left = backgroundsLeft[bgIndex];
  const right = backgroundsRight[bgIndex];
  const gradient = `linear-gradient(to right, ${left}, ${right})`;

  const nextGradient = () =>{
    if (bgIndex < backgroundsLeft.length-1){
      setBgIndex(bgIndex+1);
      console.log(bgIndex);
    }
  }
  const prevGradient = () =>{
    if (bgIndex>0){
      setBgIndex(bgIndex-1);
      console.log(bgIndex);
    }
  }

   return (
    <section className='min-h-screen w-full overflow-hidden' style={{background: gradient}}>
      <div className='grid lg:grid-cols-3 lg:grid-rows-1 place-items-center h-20 w-full '>
        {/* navbar */}
        <div className='font-barlow font-bold text-2xl text-white lg:mt-0 mt-2 lg:mb-0 mb-2'>Chillz</div>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-5 place-items-center gap-x-12'>
          <p className='font-barlow font-bold text-xl text-white'>Home</p>
          <p className='font-barlow font-bold text-xl text-white'>Shop</p>
          <p className='font-barlow font-bold text-xl text-white'>Delivery</p>
          <p className='font-barlow font-bold text-xl text-white'>Contact</p>
        </div>
        <div className='h-12 w-[280px] border border-white p-2 flex flex-col items-center lg:mt-0 mt-2'>
          <p className='font-barlow font-bold text-xl text-white '>Order Your ice-cream</p>
        </div>
      </div>
      <div className=' w-full grid lg:grid-cols-2 lg:grid-rows-1 place-items-center grid-cols-1 grid-rows-2 lg:mt-0 mt-40 '>
        {/* main content */}
        <div className=''>
          <br/>
          <br/>
         <p className='mr-20 font-margarine font-bold text-7xl text-white italic lg:ml-0 ml-8 lg:text-start'>icecream</p>
         <br/>
         <p className='text-6xl font-barlow font-extrabold text-white lg:ml-0 ml-6'>{name[bgIndex]} cone</p>
         <br/>
         <p className='lg:w-[580px] w-[400px] lg:text-start text-center text-lg lg:ml-0 ml-5 font-barlow font-medium text-white'>Embark on a culinary journey of Delight as You Immerse Yourself in Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each Scoop an Unforgettable Chapter in Your Sweet Odyssey! </p>
         <br/>
         <p className='lg:w-[580px] w-[400px] lg:ml-0 ml-5 lg:text-start text-center text-lg font-barlow font-medium text-white'>Indulge in a World of Imagination, Where Every Scoop Unveils a New Taste Adventure! Choose your favorite </p>
         <br/>
         <br/>
         <br/>
         <div className='flex flex-row items-center lg:gap-x-20 gap-x-10 lg:ml-0 ml-10'>
         <img src={img1} className='h-20 w-16 transform -rotate-12 transition-all duration-300 hover:scale-110 hover:rotate-0'/>
         <img src={img2} className='h-20 w-16 transform -rotate-12 transition-all duration-300 hover:scale-110 hover:rotate-0'/>
         <img src={img3} className='h-20 w-16 transform -rotate-12 transition-all duration-300 hover:scale-110 hover:rotate-0'/>
         <img src={img4} className='h-20 w-16 transform -rotate-12 transition-all duration-300 hover:scale-110 hover:rotate-0'/>
         </div>
         <br/>
        </div>
        <div className='w-[350px] h-[608px] overflow-hidden flex justify-center items-center'>
  <img src={ice[bgIndex]} className="w-full object-cover " />
</div>
      </div>
      <div className='w-full h-10 justify-center flex flex-row gap-x-20'>
        <button className={`h-12 text-white ${bgIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}onClick={prevGradient} disabled= {bgIndex ===0}><GrPrevious/></button>
        <button className={`h-12 text-white ${bgIndex === 3 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={nextGradient} disabled= {bgIndex === backgroundsLeft.length-1}><GrNext/></button>
        {/* footer */}
      </div>
    </section>
  )
}

export default App