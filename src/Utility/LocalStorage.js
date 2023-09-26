

const getStoredCardDetails = () =>{
    const storedCardDetails = localStorage.getItem('donation');
    if(storedCardDetails){
        return JSON.parse(storedCardDetails);
    }
    return [];
}


const saveStoredCardDetails = id =>{
    const storedCardDetails = getStoredCardDetails();
    const exists = storedCardDetails.find(cardId => cardId == id);
    if(!exists){
        storedCardDetails.push(id);
        localStorage.setItem('donation', JSON.stringify(storedCardDetails))
    }
}

export { getStoredCardDetails, saveStoredCardDetails}