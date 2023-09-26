import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  saveStoredCardDetails } from "../Utility/LocalStorage";

const DonationDetails = () => {
   

    const categoriesFulls = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    
    
    const categoryFull= categoriesFulls.find(categoryFull=> categoryFull.id == idInt);
    
  const handleDonate=()=>{
    saveStoredCardDetails(idInt);
    toast('Thank you! You have donated Successfully');
  }
    return (
        <div className="font-inter m-10 p-10">
            <div className="mx-10 relative">
                <img className="w-full" src={categoryFull.picture} alt="" />
                <div className="absolute p-5 bottom-0 w-full bg-black bg-opacity-50 ">
                    <button onClick={handleDonate} style={{backgroundColor:categoryFull.category_bg_color}} className="btn text-white">Donate ${categoryFull.price}</button>
                </div> 
            </div>

           
            
           <div className="flex mb-10 -p-10 mt-10 flex-col">
           <h2 className="text-4xl mb-10 font-semibold">{categoryFull.title}</h2>
            <p className="text-base">{categoryFull.description}</p>
           </div>
           <ToastContainer/>
        </div>
    );
};

export default DonationDetails;