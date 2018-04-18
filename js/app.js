const matrix = document.querySelector('#matrix');
let x = 1000;
let a = [];
    for(var i=2;i<x;i++){ 
        a[0]=1;
        a[1]=1;
        a[i]=a[i-2]+a[i-1];
    }    
let z = 0;
setInterval(function(){
    matrix.innerText += ` ${a[z]}`;
    z++
},70)


// function exec() {
//     for(var i=0;i<5;i++) {
//         setTimeout(function() {
//             console.log(new Date());   //It's you code
//         },(i+i+1)*1000);
//     }
// }

