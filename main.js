
/*FIRST SOLUTION*/

// const btn = document.querySelector('button');
// const ul = document.querySelector('ul');
// const li = document.querySelectorAll('li');
// let size = 10;

// const enlarge = function(){
   
//     size++;
// for(let i = 0; i < li.length; i++){
// ul.style.display ='block';
// li[i].style.fontSize = size + 'px';
// }
// console.log('co?')
// }



// btn.addEventListener('click', enlarge)

/*SECOND SOLUTION*/

// const btn = document.querySelector('button');
// const ul = document.querySelector('ul');
// const li = document.querySelectorAll('li');
// let size = 10;



// function enlarge(){
//     size++;
//     ul.style.display ='block';
// li.forEach((i) =>{
//    i.style.fontSize = size + 'px';
// })
// }

// btn.addEventListener('click', enlarge)

/*THIRD SOLUTION - ADDED COLOR OPTIONS*/
const btn = document.querySelector('button')
const liList = document.querySelectorAll('li');
let size = 10;
let color = ["orangered","blue"]
btn.addEventListener('click', function(){
    size++;

for(i=0; i < liList.length; i++){
    liList[i].style.fontSize = size + 'px';
    liList[i].style.display = "block";
    if(i%2 ==0){
        liList[i].style.color = color[0];
    }else
    {liList[i].style.color = color[1];}
    
}   


       console.log('ok')
})