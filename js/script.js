const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let width = document.querySelector('.main-wrap').clientWidth;
const slides = document.querySelector('.wrapper');
const homeBtn = document.querySelector('.logo');
let size = 0;

function nextSlide() {
    console.log('Hey')
    if(size === slides.clientWidth - width) return
    size += width;
    slides.style.transform = `translateX(-${size}px)`;
}

// previous slide function
function prevSlide() {
    if(size === 0) return
    size -= width;
    slides.style.transform = `translateX(-${size}px)`;
    console.log(size)
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
homeBtn.addEventListener('click', ()=> {
    // when you click home icon this shows first slide
    size = width;
    prevSlide();
});

slides.addEventListener('touchstart', (event)=> {
let pageX = event.changedTouches[0].pageX;
slides.addEventListener('touchmove', moveTo);

function moveTo(e){
    if(pageX > e.changedTouches[0].pageX){nextSlide()}
    if(pageX < e.changedTouches[0].pageX){prevSlide()}
    slides.removeEventListener('touchmove', moveTo)
}
}
);

// let getData = document.querySelector('.get-data');
// let url = 'https://www.googleapis.com/books/v1/volumes?q=';
// getData.addEventListener('click', fetchData);
// let inputTerm = document.getElementById('term');
// let loading = document.querySelector('.loading');
// let value = '';
// inputTerm.addEventListener('change', (e)=>{
//     value+= e.target.value;
// })
// async function fetchData(){
//      if(value === '') return;
//      loading.classList.add('spinner');
//      await fetch(url+value).
//      then(res => {
//         if(res.ok){
//             return res.json();
//         }
//      }).then(data => {
         
//      })
// }


let index = 1;
let arr = [3,5,4,6,2,9];

// while(index < arr.length){
//     let temp = 0; 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[i-1]){
//             temp = arr[i];
//             arr[i] = arr[i-1];
//             arr[i - 1] = temp;
//            }
//     }
//     index++;
// }


// function changePlace(arr, index){
//     let temp = 0;
//     for(let i = 1; i < arr.length; i++){
//         temp = arr[index-1];
//         arr[index] = arr[index-1];
//         arr[index - 1] = temp;
//     }
// }
 console.log(arr)

function sortArray(arr){ // sort algorithm is insert
    let index = 1;
    let temp;
    while(index < arr.length){
        let smallItem = findSmallItem(arr,index);
        temp = arr[index-1];
        arr[index-1] = arr[smallItem];
        arr[smallItem] = temp;
        index++;
    }
    console.log(arr);
}
// let arr = [3,5,4,6,2,9];
function findSmallItem(arr,index) { // this function will return us the minimal value of array
    let min = arr[index-1];
    let item = index-1;
    while (index <= arr.length){
        if(min < arr[index]){
            min = min;
        }
        else if(arr[index] < min){
            min = arr[index];
            item = index;
        }
        index++;
    }
    return item;
}
// let arr2 = [5,3,4,7,9,1,6]
// console.log(findSmallItem(arr2,1))

//  sortArray(arr);

// quicksort algorithm sort method
let arr3 = [3,6,10,5,2,9];
// function quickSort(arr, left, right){
//     let p = arr[Math.floor((left + right)/2)];
//     let i = left;
//     let j = right;
//     while(i <= j){
//         while(arr[i] < p){
//             i++;
//         }
//         while(arr[j] > p){
//             j--;
//         }
//         if(i <= j ){
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//             i++;
//             j--;
//         } 
        
//     }
//     //recrusive call
//     if(left < j){
//         quickSort(arr, left, j);
//     }
//     if(i < right){
//         quickSort(arr, i, right);
//     }
//    return arr
// }
 
// console.log(quickSort(arr3, 0, arr3.length - 1))
// console.log(arr3[Math.round((0+5)/2)])