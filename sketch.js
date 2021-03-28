var dog,sadDog,happyDog;
var foodObj;
var foodS,foodStack,feed,addFood;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database()
  createCanvas(1000,400);
  foodObj=new Food();

  foodStack=database.ref("Food")
  foodStack.on("value",function(data){
    foodS=data.val()
    foodObj.updateFoodStock(foodS)
  })

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods )

  feed =createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  foodObj.display()
  drawSprites()
}
function feedDog(){
  dog.addImage(happyDog)
  var foodStockValue=foodObj.getFoodStock()
  if(foodStockValue<=0){
    foodObj.updateFoodStock(foodStockValue*0)
  }
  else{
    foodObj.updateFoodStock(foodStockValue-1)
  }
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS =foodS + 1;
database.ref('/').update({
  Food:foodS
})
}
//function to read food Stock

//function to update food stock and last fed time


//function to add food in stock
