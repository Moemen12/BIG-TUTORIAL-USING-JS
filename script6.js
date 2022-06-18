let submitButton = document.querySelector('.submitInput');
let head = document.querySelector('.head');
let question = document.querySelector('h2');
let allQues = document.querySelector('.body1');
let spaceForAnswer = document.querySelector('.body2');
let bullets = document.querySelectorAll('.circle');
let arrayofBullets = Array.from(bullets);
let footer = document.querySelector('.footer');
let indexStart = 1;
let answerStart = 1;
let questionStart = 1;
let counter = document.querySelector('.count');
let bul = 1;
let number = 2;
let time = document.querySelector('.time');
let countdown;



function getQuestions() {
    let myRequest = new XMLHttpRequest();
  
    myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var questionsObject = JSON.parse(this.responseText);
        function timer(duration) {
  
          if (answerStart <= 9) {
            var minutes, seconds;
            countdown = setInterval(function () {
              minutes = parseInt(duration / 60);
              seconds = parseInt(duration % 60);
              minutes = minutes < 10 ? `0${minutes}` : minutes;
              seconds = seconds < 10 ?`0${seconds}`: seconds;
        
              time.innerHTML = `${minutes}:${seconds}`;
              if (--duration < 0) {
                clearInterval(countdown);
               
              }
              if (seconds==='00'&&minutes==='00') {
                submitButton.click();
              }
            },1000)
          }
        }
        
        
        timer(10);
        
       //when the button is pressed
        submitButton.addEventListener('click', function () {

          clearInterval(countdown);
        timer(10);
       
        

           //remove all thing from container after finishing all question
          
          if (questionsObject.length === questionStart) {
            head.remove();    
            submitButton.remove();
            footer.remove();
          
          }

         // make counter equal to 2 the increase it 1time after pressing the button
          counter.innerHTML =number;
          number++;

          // remove the old question and answers
          question.innerHTML = '';
          spaceForAnswer.innerHTML = '';
         

          // Append title in body then increase the number of index in array to change the title
          let title= document.createTextNode(questionsObject[questionStart].title); 
          question.appendChild(title);
          questionStart++;

          //create the question and increase the number of index in array to change the object
      
          for (radio = 1; radio < 5; radio++){
           
            //create input and append it
            newInput = document.createElement('input');
            newInput.setAttribute('type', 'radio');
            newInput.setAttribute('name', 'number');
            newInput.name = "question";
            spaceForAnswer.appendChild(newInput);
            if (answerStart===1) {
              newInput.checked = true;
            }
           
            let label = document.createElement('label');
            let numberofAnswer = `answer_${answerStart}`;  
                                      
            let AnswerToAppend = document.createTextNode(questionsObject[indexStart][numberofAnswer]);

            label.appendChild(AnswerToAppend);
            label.appendChild(document.createElement('br'));
            spaceForAnswer.appendChild(label);
            answerStart++;
            
          
            if (answerStart === 5) {
              answerStart = 1;
              indexStart++;
            }
           
          
          }
         
    
          arrayofBullets[bul].classList.add('on');
          bul++;
        

        })
      }
    };
  
    myRequest.open("GET", "example.json", true);
    myRequest.send();
  }
  
getQuestions();










