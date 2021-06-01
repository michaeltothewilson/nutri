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
    
    // Average Recommended Daily intake in grams according to the FDA
    let fiberRDI = 30;
    let proteinRDI = 50;
    let carbRDI = 275;
    let sugarRDI = 30;

    // Number of emojis displayed at full RDI
    const maxEmojis = 5;

    //returns -1 if the type of food isn't in the array
    if(!types.includes(typeOfFood)) {
        return -1;
    }

    //switch statement
    switch(typeOfFood){
        case "fiber":
            num = Math.floor(amt/(fiberRDI/maxEmojis));
            break;
        case "protein":
            num = Math.floor(amt/(proteinRDI/maxEmojis));
            break;
        case "carbs":
            num = Math.floor(amt/(carbRDI/maxEmojis));
            break;
        case "water":
            num = Math.floor(amt);
            break;
        case "sugar":
            num = Math.floor(amt/(sugarRDI/maxEmojis));
            break;
        default:
            console.log("ERROR: Unable to find type of food");
            num = -1;
            break;
    }
    return num;
}
module.exports = { getEmojiCount }