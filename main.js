function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    
    canvas=createCanvas(550,450);
    canvas.position(600,125);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!!!');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}

function draw(){
    background('#969A97');
}               