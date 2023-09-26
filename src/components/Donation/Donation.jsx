import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardDetails } from "../../Utility/LocalStorage";


const Donation = () => {
    const categoriesFulls = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    

   
    useEffect(() => {
        const storedCategoryIds = getStoredCardDetails();
        if (categoriesFulls.length > 0) {

            const donationApplied = [];
            for (const id of storedCategoryIds) {
                const categoryFull = categoriesFulls.find(categoryFull => categoryFull.id == id);
                if (categoryFull) {
                    donationApplied.push(categoryFull)
                }
            }
            setAppliedDonation(donationApplied);
            
             console.log(categoriesFulls, storedCategoryIds, donationApplied)
        }
    }, [categoriesFulls])
    return (
        <div>
            
            <div className="container">     
            </div>
            <div className="grid mx-10 mr-15 p-5  mt-15 md:grid-cols-2 gap-6">
                {
                    appliedDonation.slice(0, dataLength).map((categoryFull) =>(
                        <div key={categoryFull.id} className="w-[600px] h-[200px] bg-white flex gap-5 rounded-md" style={{backgroundColor:categoryFull.card_bg_color}}>
                        <div className="w-[220px] h-[300px]">
                          <img className="h-[200px]" src={categoryFull.picture} alt="" />
                        </div>
                        <div className="flex mt-5 flex-col justify-start mb-2">
                            <p className="w-1/3" style={{backgroundColor:categoryFull.text_button_bg_color,  color:categoryFull.category_bg_color}}>{categoryFull.category}</p>
                            <h2 >{categoryFull.title}</h2>
                        <p style={{color:categoryFull.category_bg_color}} >
                          ${categoryFull.price}
                        </p>
                        
                        <button
                          
                          className=" w-1/2 p-2 text-white text-center font-normal " style={{backgroundColor:categoryFull.category_bg_color}}
                        >
                          view Details
                        </button></div>
                      </div>
                    ) )
                }
            </div>
            <div className={dataLength === appliedDonation.length ? 'hidden' : ''}>
               <div className="items-center mr-10 text-center">
               <button
                     onClick={() => setDataLength(appliedDonation.length)}
                    className="btn   bg-green-600 text-white">Show All</button>
               </div>
                    

                    
            </div>
        </div>
    );
};

export default Donation;