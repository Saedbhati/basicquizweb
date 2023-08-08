
let Point=0;
let quiz;
i=0;

function fetchQuestion(url){
    x=fetch(url)
        .then(response => {

return response.json();
}).then(data => {
quiz=data;

document.getElementById("q").innerHTML= quiz["results"][i]["question"];
for (let x=0;x< quiz["results"][i]["incorrect_answers"].length;x++ ){
console.log('option'+ x)
document.getElementById('option'+ (x+1)).value=quiz["results"][i]["incorrect_answers"][x];
document.getElementById('option'+ (x+1) +'-lable').innerHTML=quiz["results"][i]["incorrect_answers"][x];}
document.getElementById('option4').value=quiz["results"][i]["correct_answer"];
document.getElementById('option4-lable').innerHTML=quiz["results"][i]["correct_answer"]




});
}
function next_question(){
    var ele = document.getElementsByName('option');
        
        for (a = 0; a < ele.length; a++) {

            if (ele[a].checked ){
                console.log(ele[a].value == quiz["results"][i]["correct_answer"]);
            if (ele[a].value==quiz["results"][i]["correct_answer"]){
               Point= Point+10;
            };
        }}
        i++;
   
    
    document.getElementById("q").innerHTML=quiz["results"][i]["question"];
    for (let x=0;x< quiz["results"][i]["incorrect_answers"].length;x++ ){
    
    document.getElementById('option'+ (x+1)).value=quiz["results"][i]["incorrect_answers"][x];
    document.getElementById('option'+ (x+1) +'-lable').innerHTML=quiz["results"][i]["incorrect_answers"][x];}
    document.getElementById('option4').value=quiz["results"][i]["correct_answer"];
    document.getElementById('option4-lable').innerHTML=quiz["results"][i]["correct_answer"];
    

    
        
    for(x=0;x<document.getElementsByName('option').length;x++){
        if(document.getElementsByName('option')[x].checked){
            document.getElementsByName('option')[x].checked=false;

        }
    }
    document.getElementById('point').innerHTML="Your Point is " +Point;
    
    
    
    }