
import bgImg from './Banner/Rectangle 4287.png'
const Banner = () => {
   
    return (
        <div className="">
             
        
    <div className="max-w-full  ">
    
      
      <div className="form-control  items-center">
      
      <img className='w-full opacity-5 shadow-sm  h-[600px]' src={bgImg} alt="Image description" />
    
     <div className='absolute my-20 flex justify-center text-center flex-col items-center'>
     <h1 className="mb-5 text-5xl mt-10 font-bold ">I Grow By Helping People In Need</h1>
  <div className="input-group  w-[470px] h-[50px]">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn bg-[#FF444A] border p-2 text-white w-[110px]">
     Search
    </button>
  </div>
     </div>
</div>
    </div>
  </div>

        
    );
};

export default Banner;