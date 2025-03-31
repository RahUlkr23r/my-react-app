import { useState } from "react";
export default function HooksExamples(){
   const [Number ,setNumber]= useState(0);

    return(
        <>
<p>{Number}</p>
<button onClick={()=>setNumber(Number+1)}>Increase</button>
<button onClick={()=>setNumber(Number-1)}>decrease</button>
        </>
    )
}


// form handel 
// import { useState } from "react";
//  export default function HooksExamples(){
// const [name,setName]=useState('')
// const [email,setEmail]=useState('')
// const [password,setpassword]=useState('')
// const [age, setAge]=useState('')

// return(<>
// <input type="text" name="name"id="name" placeholder="Enter your name " onKeyUp={(event.target.value)}/><br></br>

// <input type="email" name="email"id="email" placeholder="Enter your email " onKeyUp={(event.target.value)}/><br></br>

// <input type="password" name="password"id="password" placeholder="Enter your password " onKeyUp={(event.target.value)}/><br></br>

// <input type="number" name="age"id="age" placeholder="Enter your your " onKeyUp={(event.target.value)}/><br></br>
// <input type="submit" name="btn"  value="submit"/>
// </>)
//  }
