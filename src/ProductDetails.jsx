
// export default function productDetails(props){
//     console.log(props)
//     return(
//         <>
//             <div className='mydiv'>
//                 <h2>Productname :{props.Productname}</h2>
//                 <h2>Price :{props.Price}</h2>
//                 <h2>discription :{props.description}</h2>
//             </div>
//         </>
//     )
// }


import './ProductDetails.css'
export default function ProductDetails(props){
    console.log(props);
    return(
        <>
        <div>
        <h1>Product Details</h1>
        <h2>Product Name: {props.productName}</h2>
        <h2>Product Price: {props.price}</h2>
        <h2>Product description: {props.description}</h2>
        </div>
        </>

    )
}