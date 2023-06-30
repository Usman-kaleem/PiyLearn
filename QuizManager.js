function submitAnswers() {
    var q1 = document.forms["quizForm"]["q"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var r = "r"
    var w = "w"

    if(q1 == r){
        document.getElementById("demo").innerHTML = "Well done";
        document.getElementById("Ques1").classList.add("showAnswersRight");
        
    }else if(q1 == w){
        document.getElementById("demo").innerHTML = "Wrong";
        document.getElementById("Ques1").classList.add("showAnswersWrong");
    
    }else{
        document.getElementById("demo").innerHTML = "Please Select a option";
        document.getElementById("Ques1").classList.add("showAnswersNoSubmit");
    }

    if(q2 == r){
        document.getElementById("demo2").innerHTML = "Well done";
        document.getElementById("Ques2").classList.add("showAnswersRight");
        
    }else if(q2 == w){
        document.getElementById("demo2").innerHTML = "Wrong";
        document.getElementById("Ques2").classList.add("showAnswersWrong");
    
    }else{
        document.getElementById("demo2").innerHTML = "Please Select a option";
        document.getElementById("Ques2").classList.add("showAnswersNoSubmit");
    }


}