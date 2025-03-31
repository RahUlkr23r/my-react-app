import React,{useContext} from "react"; 
const color =React.createContext("blue");

function MyContext(){
 const theme =useContext(color);
 return(
    <>
        <h2 style={{color:theme}}> this is MyContext</h2>
    </>
 )
} export default MyContext;