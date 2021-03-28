class Food{
    constructor(){
        this.foodStack =0;
        this.image = loadImage("images/Milk.png");
        this.lastFed;
    }
    updateFoodStock(foodStack){
        this.foodStack=foodStack;
    }
    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
    deductFood(){
        if(this.foodStack>0){
            this.foodStack=this.foodStack-1;
        }
    }
    getFoodStock (){
        return this.foodStack;
    }
    display(){
        var x=80,y=100
        imageMode(CENTER)
        image(this.image,720,200,70,70);

        if(this.foodStack |=0){
            for(var i=0;i<this.foodStack;i++){
                if(i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
    }
}