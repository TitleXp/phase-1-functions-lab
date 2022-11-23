// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    const distanceInBlocks = Math.abs(someValue - 42)
    return distanceInBlocks
}

function distanceFromHqInFeet(someValue) {
    const distanceFromHqInFeet = distanceFromHqInBlocks(someValue) * 264
    return distanceFromHqInFeet
}

function distanceTravelledInFeet(start, destination) {
    const distanceTravelledInFeet = (Math.abs(destination - start)) * 264
    return distanceTravelledInFeet
}

function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeet = (Math.abs(destination - start)) * 264
    if(distanceTravelledInFeet <=400){
        return 0
    } else if (distanceTravelledInFeet>400 && distanceTravelledInFeet<2000){
        return parseFloat((0.02*( distanceTravelledInFeet - 400)).toFixed(2))
    } else if (
            distanceTravelledInFeet>2000 && distanceTravelledInFeet<2500){
                return 25
        } else{
                return 'cannot travel that far'
        }
}




//400feet-2000feet = 2 cents per foot (exclude first 400)
//<2000feet - >2500feet = flat fare
//max >2500 feet returns "cannot travel that far"