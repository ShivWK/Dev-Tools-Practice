// function a() {
//     let hi = "hello";
//     console.log(hi)
//     let so = 3;
//     var so2 = 4;
 
//     return hi;
// }
// a();

// function b(c = "hi") {
//     console.log(c)
// }
// b()

// function nestedCall() {
//     let outerVar = "out";
//     let outerVar2 = "out2";

//     function inside() {
//         let innerVar1 = "I'm inside";
//         console.log(outerVar);

//         function nestedInner() {
//             let innerVar2 = "I'm grand inside";
//             console.log(innerVar1);
//         }
//         nestedInner()
//     }
//     inside();

//     return outerVar;;
// }
// nestedCall();

// function nestedCall() {
//     let outerVar = "out";
//     let outerVar2 = "out2";

//     function inside() {
//         let innerVar1 = "I'm inside";
//         console.log(outerVar);

//     }

//     return inside;
// }
// let inner = nestedCall();
// inner();

//step over

// function nestedCall() {
//     let outerVar = "out";
//     let outerVar2 = "out2";
//     debugger

//     function inside() {
//         let innerVar1 = "I'm inside";
//         console.log(outerVar);

//         nestedCall();
//     }

//     inside();
// }
// nestedCall()

//Step into

// function call1() {
//     debugger
//     let call1VAr = "Shiv";

//     setTimeout(() => {
//         console.log(call1VAr);
//     }, 4000)
// }
// call1()

//Step out

function nestedCall() {
    let outerVar = "out";
    let outerVar2 = "out2";

    function inside() {
        let innerVar1 = "I'm inside";
        console.log(outerVar);

        // nestedCall();
    }

    inside();
}
nestedCall()


 
