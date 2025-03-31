import HooksExamples from './HooksExamples'
import './ProductDetails.css'

export default function BookDetails(props){
    console.log(props)
    return(
        <>
      <div className="mydiv">
        <h1>Book details </h1>
        <h2>Name: {props.name}</h2>
        <h2>Author: {props.author}</h2>
        <h2> publisher: {props.publisher}</h2>
        <h2> publish year: {props.year}</h2>
        <h2> Volume: {props.volume}</h2>
        <h2> Price: {props.price}</h2>
<HooksExamples></HooksExamples>
    
        </div>
        </>
    )
}