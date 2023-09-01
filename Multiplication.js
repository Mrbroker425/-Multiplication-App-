
const Num1 = Math.ceil(Math.random()*10);
const Num2 = Math.ceil(Math.random()*10);


const question = document.getElementById("question");
question.innerText = `what is ${Num1} multiplied by ${Num2}`


const CorrectAnswer = Num1 * Num2;



function checkAnswer(){
 

    const userAnswerE1 = document.getElementById("userAnswer");
    const userAnswer = parseInt(userAnswerE1.value, 10);

    if(userAnswer === CorrectAnswer){
        alert("Correct!");
    }else{
        alert(`Sorry! Wrong Answer. The correct answer is: ${CorrectAnswer}`);
    }
    
   
}
