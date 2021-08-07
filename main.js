function preload()
{

}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    canvas.position(470,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 0 , 0, 550 , 400);
}

function take_snapshot()
{
    save('Image.png');
}
