// function NumberChecker(){
//     const num=-15;
//     return(
//         <>
//          {
//             num>0?(
//                 <p>{num} is a positive number</p>
//             ):(
//                 <p>{num} is a negative number</p>
//             )
//          }
//         </>
//     )
// }
// export default NumberChecker;


function  NumberChecker(){
    const num=5;
    let count=0;
    for(let i=1;i<=num;i++){
        if(num % i==0){
            count++;
        }
    }
    return(
        <>
         {
            count==2?(
                <p className='text text-bg-dark' >{num} is a prime number</p>
            ):(<p className='text text-success'>{num} is not a prime number</p>)
         }
        </>
    )
}
export default  NumberChecker;