
import { Link } from 'react-router-dom';
import './Category.css'
const Category = ({categoryFull}) => {
    const {id,picture,title,category,card_bg_color,category_bg_color,text_button_bg_color}=categoryFull;
    return (
           
            <Link to={`/categoryFull/${id}`}>
            <div className="card card-compact mb-5 shadow-xl w-[312px] h-[283px]" style={{backgroundColor: card_bg_color}}>
        <figure><img className="w-[312px] h-[194px] rounded" src={picture} alt="" /></figure>
        <div className="ml-5 ">
            <button className="btn normal-case px-3 py-1 h-[17px] font-inter rounded-none shadow-none border-none" style={{backgroundColor: text_button_bg_color, color:category_bg_color}}>{category}</button>
            <h2  style={{color: category_bg_color}} className="">{title}</h2>
            
            
            {/* <div className="card-actions">
                <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div> */}
        </div>
    </div></Link>
           
    );
};

export default Category;