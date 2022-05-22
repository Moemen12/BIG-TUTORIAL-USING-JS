 //                                          first 6 video in big tutorial JS/make a slider


// //create container
// let section=document.createElement('section');
// let ulList = document.createElement('ul');
// ulList.style.cssText = "list-style-type:none";
// ulList.className = "menu";

// //Create Previous button
// let previousButton = document.createElement('button');
// let preText = document.createTextNode('Previous');
// previousButton.className ="previous";
// previousButton.appendChild(preText);
// previousButton.style.cssText = "display:inline";

// //Create Next buttton
// let nextButton = document.createElement('button');
// let NextText = document.createTextNode('Next');
// nextButton.className = "next";
// nextButton.appendChild(NextText);
// nextButton.style.cssText = "display:inline;margin-left:1%";






// // Appending previous button before List of numbers
// ulList.appendChild(previousButton);



// let list1 = document.createElement(`li`);
// let list2 = document.createElement(`li`);
// let list3 = document.createElement(`li`);
// let list4 = document.createElement(`li`);



// list1.className = "list1";
// list2.className = "list2";
// list3.className = "list3";
// list4.className = "list4";


// list1.style.cssText = "display:inline;padding: 2px 20px;background-color:whitesmoke;margin-left:1%;cursor:pointer";
// list2.style.cssText = "display:inline;padding: 2px 20px;background-color:whitesmoke;margin-left:1%;cursor:pointer";
// list3.style.cssText = "display:inline;padding: 2px 20px;background-color:whitesmoke;margin-left:1%;cursor:pointer";
// list4.style.cssText = "display:inline;padding: 2px 20px;background-color:whitesmoke;margin-left:1%;cursor:pointer";




// let content1 = document.createTextNode('1');
// let content2 = document.createTextNode('2');
// let content3 = document.createTextNode('3');
// let content4 = document.createTextNode('4');


// list1.appendChild(content1);
// list2.appendChild(content2);
// list3.appendChild(content3);
// list4.appendChild(content4);

// ulList.appendChild(list1);
// ulList.appendChild(list2);
// ulList.appendChild(list3);
// ulList.appendChild(list4);


// // Appending next button after List of numbers
// ulList.appendChild(nextButton);


// section.appendChild(ulList);
// document.body.appendChild(section);

// //Create section 2
// let section2 = document.createElement('section');
// section2.style.cssText = "width:450px;height:200px";

// //Appending images to section 2

// let imageEle = document.createElement(`img`);
// imageEle.setAttribute("src","menu-burger.jpg");
// imageEle.style.cssText = "width:450px;height:200px";
// section2.appendChild(imageEle);
// document.body.appendChild(section2);

// document.addEventListener('click', function (element) {



//     if (element.target.className === 'list1') {
//      imageEle.setAttribute("src","menu-burger.jpg");
//      imageEle.style.cssText = "width:450px;height:200px";
//      section2.appendChild(imageEle);
//      document.body.appendChild(section2);
        
//     }


//     else if (element.target.className === 'list2') {
      
//          imageEle.setAttribute("src","menu-momo.jpg")
//          imageEle.style.cssText = "width:450px;height:200px";
//          section2.appendChild(imageEle);
//          document.body.appendChild(section2);

//     }

//     else if (element.target.className === 'list3') {
      
//         imageEle.setAttribute("src","menu-pizza.jpg")
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//         document.body.appendChild(section2);

//    }

//    else if (element.target.className === 'list4') {
      
//     imageEle.setAttribute("src","momo.jpg")
//     imageEle.style.cssText = "width:450px;height:200px";
//     section2.appendChild(imageEle);
//     document.body.appendChild(section2);

//     }
    
// });






     
  
// previousButton.addEventListener("click", function () {
//     if (imageEle.getAttribute('src') === 'menu-momo.jpg') {
//         imageEle.setAttribute("src","menu-burger.jpg");
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//         document.body.appendChild(section2);
//     }

// })

  
// previousButton.addEventListener("click", function () {
//     if (imageEle.getAttribute('src') === 'menu-pizza.jpg') {
//         imageEle.setAttribute("src","menu-momo.jpg")
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//         document.body.appendChild(section2);
//     }

// })

// previousButton.addEventListener("click", function () {
//     if (imageEle.getAttribute('src') === 'momo.jpg') {
//         imageEle.setAttribute("src","menu-pizza.jpg")
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//         document.body.appendChild(section2);
//     }

// })


// nextButton.addEventListener("click", function () {
    
//     if (imageEle.getAttribute('src') === 'menu-burger.jpg') {
//         imageEle.setAttribute("src","menu-momo.jpg");
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//         document.body.appendChild(section2);
//     }
//     else if (imageEle.getAttribute('src') === 'menu-momo.jpg') {
//         imageEle.setAttribute("src","menu-pizza.jpg");
//         imageEle.style.cssText = "width:450px;height:200px";
//         section2.appendChild(imageEle);
//           document.body.appendChild(section2);
        
//     }
//     else {
//         if (imageEle.getAttribute('src') === 'menu-pizza.jpg') {
//             imageEle.setAttribute("src","momo.jpg");
//             imageEle.style.cssText = "width:450px;height:200px";
//             section2.appendChild(imageEle);
//             document.body.appendChild(section2);
//         }
//     }

// })

/*                                      first 6 video in big tutorial JS/make a slider






var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImages.length;
var currentSlide = 1;

var slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');


for (var i = 1; i <= slidesCount; i++) {
    
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);

}

document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");


var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length;i++){

    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
   }

}


theChecker();

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;



function nextSlide() {
   
    if (nextButton.classList.contains('disabled')) {
        
        return false;
    } else {
        currentSlide++;
        theChecker();
    }



}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;
    removeAllActive();
    sliderImages[currentSlide -1 ].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');



    if (currentSlide==1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentSlide==slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
    
}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
 
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
     })


}

*/

