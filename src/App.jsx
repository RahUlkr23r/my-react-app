// import MyClassComponent from "./mypage/MyClassComponent"
// import MyComponent from "./mypage/MyComponent"
// import Footer from "./mypage/Footer"
// import NumberChecker from "./mypage/NumberChecker"

// function App() {
// return(
//   <> 
//   {/* <MyComponent/>
// <MyClassComponent/>
// <Footer/> */}
// <NumberChecker></NumberChecker>
// </>
// )


  
// }


// import HooksExamples from "./HooksExamples";
// import PropsExample from "./PropsExample";


// import MyForm from "./MyForm";
// import { useState } from "react";  
// import UserProfile from "./component/UserProfile";

// export default function App() {
//   const [name, setName] = useState("guest");
//   const [role, setRole] = useState("Visitor");

//   return (
//     <>
//       <UserProfile name={name} role={role} /> {/* Ensure prop matches UserProfile */}
      
//       <button onClick={() => { setName("rahul"); setRole("admin"); }}>Login</button>
//     </>
//   );
// }


// function App() {
//   return (
//     <>
//       <MyForm type="text" name="name" placeholder="Enter your name" />
//       <MyForm type="email" name="email" placeholder="Enter your email" />
//       <MyForm type="password" name="password" placeholder="Enter your password" />
//       <MyForm type="submit" name="btn" value="Submit" />
//     </>
//   );
// }

// export default App;
// import  './ProductDetails.css'
// import ProductDetails from "./ProductDetails"
// function App(){
//   return(
//     <>
     
//      <ProductDetails productname={laptop} price={"5000" } description={"this is hp laptop"}></ProductDetails>
//      <ProductDetails productname={mouse} price={"5000" } description={"this is hp laptop"}></ProductDetails>
//      <ProductDetails productname={keyboard } price={"5000" } description={"this is hp laptop"}></ProductDetails>
//      <ProductDetails productname={phone} price={"5000" } description={"this is hp laptop"}></ProductDetails>
//      <ProductDetails productname={tab} price={"5000" } description={"this is hp laptop"}></ProductDetails>
//     </>
//   )
// }export default App;
// import './productDetails.css'
//  import ProductDetails from "./ProductDetails"
// function App() {
//   return (
//       <>
//       <ProductDetails productName={"Iphone"} price={100000} description={"This is a Iphone"}/>
//       <ProductDetails productName={"Samsung"} price={50000} description={"This is a Samsung"}/>
//       <ProductDetails productName={"One Plus"} price={60000} description={"This is a One Plus"}/>
//       <ProductDetails productName={"Vivo"} price={20000} description={"This is a Vivo"}/>
//       <ProductDetails productName={"Oppo"} price={30000} description={"This is a Oppo"}/>
//       </>
//   )
// }
// export default App;

//  import BookDetails from "./BookDetails"; 
// import UseEffect from "./component/UseEffect";

// function App() {
//   return (
//       <>
//       {/* <BookDetails name={"the great man"}  author={"rahul"} publisher={"bharti"} volume={"12"} price={"676"} publishyear={"2023"}/>
//       <BookDetails name={"the great man"}  author={"rahul"} publisher={"bharti"} volume={"12"} price={"676"} publishyear={"2023"}/>
//       <BookDetails name={"the great man"}  author={"rahul"} publisher={"bharti"} volume={"12"} price={"676"} publishyear={"2023"}/>
//       <BookDetails name={"the great man"}  author={"rahul"} publisher={"bharti"} volume={"12"} price={"676"} publishyear={"2023"}/>
//        */}
//        <UseEffect></UseEffect>
//       </>
//   )
// }
// export default App;

// import BookDetails from "./BookDetails"; 
// import UseEffect from "./component/UseEffect";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Routes
import Header from "./Layout/Header"; 
import Home from "./Layout/Home";
import Contact from "./Layout/Contact";
import About from "./Layout/About";
import Blog from "./Layout/Blog";
import { Footer } from "./Layout/Footer";
import Mynavigation from './component/Mynavigation';
import MyContext from './component/MyContext';
import Mycallback from './component/Mycallback';
import MyUseMemo from './component/MyUseMemo';
import WeightConverter from './component/WeightConverter';
import EconomicCalculator from './component/EconmicCalculator';
import FormHandling from './component/FormHandling';
import ApiConnectivity from './component/ApiConnectivity';
import LCMethod from './component/LCMethod';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/navigation" element={<Mynavigation />} />
        <Route path="/context" element={<MyContext />} />
        <Route path="/callback" element={<Mycallback />} />
        <Route path="/usememo" element={<MyUseMemo/>} />
        <Route path="/converter" element={<WeightConverter/>} />
        <Route path="/economic" element={<EconomicCalculator/>} />
        <Route path="/login" element={<FormHandling/>} />
        <Route path="/api" element={<ApiConnectivity/>} />
        <Route path="/lc" element={<LCMethod a={10}></LCMethod>} />
      </Routes>


      <Footer/>
    </BrowserRouter>
  );
}

export default App;
