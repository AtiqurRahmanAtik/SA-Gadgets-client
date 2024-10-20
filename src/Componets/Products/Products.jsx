import { Link, } from "react-router-dom";


const Products = ({item}) => {
    // console.log(item);
  

    const {id,ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} = item;


    return (
        
            <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto ">
  <figure>
    <img className="p-3"
      src={ProductImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {ProductName}</h2>
    <p>{Description.slice(0,30)}</p>
    <div className="card-actions mx-auto ">
     
     <Link to={`/${id}`}>  <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
       
    );
};

export default Products;