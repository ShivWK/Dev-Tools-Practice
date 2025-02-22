function a() {
    let hi = "hello";
   
    function inside() {
        let tell = "I'm inside";
        
        console.log(tell);
    }
    inside();
 
    return hi;
}
a();

// function b(c = "hi") {
//     console.log(c)
// }
// b()
