/*                                           Memory Game


let bigParent = document.querySelector('.parent');
let newPage = document.querySelector('.nextPage');



document.getElementById("startButton").addEventListener("click", function () {
  let name= prompt("What's Your Name");
    
    if (name.length > 3) {
        //remove parent element from page
        bigParent.remove();

        //remove the first class and add the second class
        newPage.classList.remove('nextPage');
        newPage.classList.add('newPage');

        // Add Ul list to new page
        ulList = document.createElement('ul');
        ulList.classList.add('menu');
        liList = document.createElement('li');
        liList.classList.add('list1');
        HelloText = document.createTextNode(`Hello: ${name}`);
        liList.appendChild(HelloText);
        ulList.appendChild(liList);
        

        liList2 = document.createElement('li');
        liList2.classList.add('list1');
        leftText = document.createTextNode(`Wrong Tries: 1`);
        liList2.appendChild(leftText);
        ulList.appendChild(liList2);
        newPage.appendChild(ulList);
      
        document.querySelector('.grid-container').classList.remove('game');
        

    }
})

let cards = Array.from(document.querySelectorAll(".card"));
let wrongTries = 15;
let existCard = null;


cards.forEach(function (ele) {
  ele.addEventListener('click', function () {
    if (ele.classList.contains('selected'))
    return;
    ele.classList.add('selected');
    if (existCard === null)
    setExistCard(ele);
    else
    compareCards(ele);
  })

})


function setExistCard(card) {
  existCard = card;
}


function compareCards(card) {
  if (card.lastElementChild.src!=existCard.lastElementChild.src) {
   
    existCard.classList.remove('selected');
    card.classList.remove('selected');

  } 
  clearExistCard();
}


function clearExistCard() {
  existCard = null;
}

                                                   Memory Game


  // Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function () {

  // Prompt Window To Ask For Name
  let yourName = prompt("Whats Your Name?");

  // If Name Is Empty
  if (yourName == null || yourName == "") {

    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = 'Unknown';

  // Name Is Not Empty
  } else {

    // Set Name To Your Name
    document.querySelector(".name span").innerHTML = yourName;

  }

  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();

};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

  // Add CSS Order Property
  block.style.order = orderRange[index];

  // Add Click Event
  block.addEventListener('click', function () {

    // Trigger The Flip Block Function
    flipBlock(block);

  });

});

// Flip Block Function
function flipBlock(selectedBlock) {

  // Add Class is-flipped
  selectedBlock.classList.add('is-flipped');

  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If Theres Two Selected Blocks
  if (allFlippedBlocks.length === 2) {

    // console.log('Two Flipped Blocks Selected');

    // Stop Clicking Function
    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

  }

}

// Stop Clicking Function
function stopClicking() {

  // Add Class No Clicking on Main Container
  blocksContainer.classList.add('no-clicking');

  // Wait Duration
  setTimeout(() => {

    // Remove Class No Clicking After The Duration
    blocksContainer.classList.remove('no-clicking');

  }, duration);

}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    document.getElementById('success').play();

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {

      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

    }, duration);

    document.getElementById('fail').play();

  }

}

// Shuffle Function
function shuffle(array) {

  // Settings Vars
  let current = array.length,
      temp,
      random;

  while (current > 0) {

    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // [1] Save Current Element in Stash
    temp = array[current];

    // [2] Current Element = Random Element
    array[current] = array[random];

    // [3] Random Element = Get Element From Stash
    array[random] = temp;

  }

  return array;

}

// Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element From Stash                                                 
*/
