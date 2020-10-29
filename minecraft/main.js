document.body.style.overflow = "hidden"
var canvas = new fabric.Canvas('myCanvas');
var img_width = 30;
var img_height = 30;
var playerX = 200;
var playerY = 200;
var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);

    });
   
 }
  function block_update(block){

        fabric.Image.fromURL(block, function(Img) {
            block_object = Img;
    
            block_object.scaleToWidth(img_width);
            block_object.scaleToHeight(img_height);
            block_object.set({
                top:playerY,
                left:playerX
            });
            canvas.add(block_object);
        });
    }
window.addEventListener("keydown", key_down);
function key_down(e){
    var keycode = e.keyCode;
    if (keycode == 38){
        up();
        console.log(keycode);
    }
    if (keycode == 37){
        left();
        console.log(keycode);
    }
    if (keycode == 39){
        right();
        console.log(keycode);
    }
    if (keycode == 40){
        down();
        console.log(keycode);
    }
    
    if (keycode == 71){
        block_update("ground.png");
        }    
            
    if (keycode == 87){
        block_update("wall.jpg");
        }
            
    if (keycode == 84){
        block_update("trunk.jpg");
        }
            
    if (keycode == 89){
            block_update("yellow_wall.png");
        }
        
                        
    if (keycode == 85){
        block_update("unique.png");
        }
        
                    
    if (keycode == 76){
        block_update("light_green.png");
        }
                    
    if (keycode == 68){
        block_update("dark_green.png");
        }
                    
    if (keycode == 82){
        block_update("roof.jpg");
        }
                
    if (keycode == 67){
            block_update("cloud.jpg");
        }
     if (e.shiftKey && e.keyCode == 80){
        img_width += 10;
        img_height += 10;
        display();
    }
    if (e.shiftKey && e.keyCode == 77){
        img_width -= 10;
        img_height -= 10;
        display();
    }        
}
function left(){
    if(playerX > 0){
        playerX = playerX - img_width;
        canvas.remove(player_object);
        player_update();

    }   
}
function right(){
    if(playerX < 800){
        playerX = playerX + img_width;
        canvas.remove(player_object);
        player_update();

    }   
}
function up(){
    if(playerY > 0){
        playerY = playerY - img_height;
        canvas.remove(player_object);
        player_update();

    }   
}
function down(){
    if(playerY < 600){
       playerY = playerY + img_height;
        canvas.remove(player_object);
        player_update();

    }   
}
function display(){
    document.getElementById("width").textContent = "Current width =  " + img_width;
    document.getElementById("height").textContent = " Current height =  " + img_height;
}