var canvas = new fabric.Canvas("myCanvas");

var docW = document.getElementById("c_width");
var docH = document.getElementById("c_height");

var block = {
    width: 30,
    height: 30
}

var player = {
    x : 10 ,
    y : 10 ,
    width : 165 ,
    height : 305,
    speed : 30
}

var playerImg = "";
var blockImg = "";

function playerUpdate() {
    fabric.Image.fromURL("./images/player.png" , function (Img){
        playerImg = Img ;
        playerImg.scaleToWidth(player.width);
        playerImg.scaleToHeight(player.height);
        playerImg.set({
            top : player.y,
            left : player.x
        });

        canvas.add(playerImg);
    });
}

playerUpdate();

function blockUpdate(Imga) {
    fabric.Image.fromURL(Imga , function (Img){
        blockImg = Img ;
        blockImg.scaleToWidth(block.width);
        blockImg.scaleToHeight(block.height);
        blockImg.set({
            top : player.y,
            left : player.x
        });

        canvas.add(blockImg);
    });
}

keypress = "";

window.addEventListener('keydown' , function(e) {
    keypress = e.key;
    console.log(keypress);

    if (keypress == "P") {
        block.width += 10;
        block.height += 10;
    }
    if (keypress == "M") {
        block.width -= 10;
        block.height -= 10;
    }
    docW.innerHTML = block.width;
    docH.innerHTML = block.height;

    if (keypress == "f") {
        blockUpdate("./images/spiderman_face.png");
    }
    if (keypress == "b") {
        blockUpdate("./images/ironman_body.png");
    }
    if (keypress == "l"){
        blockUpdate("./images/hulk_legs.png");
    }
    if (keypress == "h"){
        blockUpdate("./images/captain_america_left_hand.png");
    }
    if (keypress == "r"){
        blockUpdate("./images/thor_right_hand.png");
    }

    //movement
    if (keypress == "ArrowUp"){
       up();
    }
    if (keypress == "ArrowDown"){
        down();
    }
    if (keypress == "ArrowLeft"){
        left();
    }
    if (keypress == "ArrowRight"){
        right();
    }

});


