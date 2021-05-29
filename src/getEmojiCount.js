//daily intake we're going with:
//fiber: 30grams
//protein: 50g
//carbs: 275 grams
//water: 3 liters
//sugar: 30 grams

//takes type of food (i.e. protein, fiber, etc) and amt of of type
//and returns the amount of emojis that are used
//returns -1 if error
function getEmojiCount(typeOfFood, amt) {
    let types = ['fiber', 'protein', 'carbs', 'water','sugar'];
    let num = 0;

    //returns -1 if the type of food isn't in the array
    if(!types.includes(typeOfFood)) {
        return -1;
    }

    //switch statement
    switch(typeOfFood){
        case "fiber":
            num = Math.floor(amt/10);
            break;
        case "protein":
            num = Math.floor(amt/16.667);
            break;
        case "carbs":
            num = Math.floor(amt/91.667);
            break;
        case "water":
            num = Math.floor(amt);
            break;
        case "sugar":
            num = Math.floor(amt/10);
            break;
        default:
            console.log("ERROR: Unable to find type of food");
            num = -1;
            break;
    }
    return num;
}