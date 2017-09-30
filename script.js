var dim = 30
var c
var drw
var ui
var shape = "circle"
var shapes = ["circle","square", "triangle"]
var i = 0
var allowScroll= false
p5.disableFriendlyErrors = true;
function setup(){
  createCanvas(windowWidth, windowHeight)
  c = color('rgb(0,0,0)')
  cursor(CROSS)
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.body.style.overflow=allowScroll?"":"hidden";
  ui = createGraphics(windowWidth, windowHeight)
  drw = createGraphics(windowWidth, windowHeight)
  drw.noStroke()
  ui.noStroke()
  ui.textSize(32)
  drw.fill(c)
}

function draw(){
  gui()
  image(drw,0,0)
  image(ui,0,0)
}
function gui(){
  ui.fill(255,255,255)
  ui.rect(0,windowHeight-100, 100, 100)
  ui.rect(windowWidth-100,windowHeight-100, 100, 100)
  ui.fill(0,0,0)
  ui.text(dim, windowWidth-50-20,windowHeight-50-16, 100, 100)
  ui.fill(c)
  if(shape == "circle"){
    ui.ellipse(50, windowHeight - 50, 40)
  }
  else if(shape == "square" ){
    ui.rect(50 - 15, windowHeight - 50 - 15, 40, 40)
  }
  else if(shape == "triangle"){
    ui.triangle(50 - 20, windowHeight - 50 + 20, 50 + 20, windowHeight - 50 + 20, 50, windowHeight - 50 - 20)
  }
}
function keyPressed() {
  if (keyCode === 27) {
    drw.fill(255,255,255)
    drw.rect(0,0,windowWidth,windowHeight)
    c = color(0,0,0)
    shape = "circle"
    dim = 30
    drw.fill(c)
    ui.fill(c)
  }
  else if (keyCode == 32){
    i++
    if(i > 2){
      i = 0
    }
    shape = shapes[i]
  }
  else if(keyCode == 38){
    dim = dim + 5
    if(dim > 200)
      dim = 200
  }
  else if(keyCode == 40){
    dim  = dim - 5
    if(dim < 5)
      dim = 5
  }
  else if (keyCode == 83) {
    save(drw, "painting.png")
  }
  else if (keyCode == 46){
    c = color(255,255,255)
    ui.fill(c)
    drw.fill(c)
  }
}

function mouseDragged(){
    if(mouseButton == LEFT){
      if(shape == "circle"){
        drw.ellipse(mouseX,mouseY,dim)
      }
      else if(shape == "square"){
        drw.rect(mouseX-(dim/2),mouseY-(dim/2),dim,dim)
      }
      else if(shape == "triangle"){
        drw.triangle(mouseX, mouseY-(dim / 2), mouseX-(dim / 2), mouseY+(dim / 2), mouseX+(dim / 2), mouseY+ (dim / 2))
      }
    }
}

function mousePressed(){
  if(mouseButton == LEFT){
    if(shape == "circle"){
      drw.ellipse(mouseX,mouseY,dim)
    }
    else if(shape == "square"){
      drw.rect(mouseX-(dim/2),mouseY-(dim/2),dim,dim)
    }
    else if(shape == "triangle"){
      drw.triangle(mouseX, mouseY-(dim / 2), mouseX-(dim / 2), mouseY+(dim / 2), mouseX+(dim / 2), mouseY+ (dim / 2))
    }
  }
  else if(mouseButton == RIGHT){
    c = color(random(0,256),random(0,256),random(0,256))
    drw.fill(c)
    ui.fill(c)
  }
}
