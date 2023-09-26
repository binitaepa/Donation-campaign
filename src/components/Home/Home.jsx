import { useState,useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    const [categories,setCategories]=useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
<Banner></Banner>

<div className="grid md:grid-cols-4 gap-1 mb-10 ml-10 mt-10">
                {
                    categories.map(categoryFull => <Category key={categoryFull.id} categoryFull={categoryFull}></Category>)
                }
            </div>
 
        </div>
    );
};

export default Home;