function preload(){

}

function setup(){

canvas = createCanvas(400 ,380);
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RNUi0vJ8f/model.json" , modelLoaded);
}


function draw(){
image(video , 0 , 0 , 400 ,380);
console.log("Teachable machine has initialized");
classifier.classify(video , gotResult);
}

function modelLoaded(){
    console.log("modelLoaded");
}
function gotResult(error , results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_result").innerHTML = results[0].label;
        document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(4);
    }
}
