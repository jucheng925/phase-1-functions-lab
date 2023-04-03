function distanceFromHqInBlocks(pickupBlock){
    if (pickupBlock >= 42) {
        return pickupBlock - 42
    } 
    return 42 - pickupBlock    
}

function distanceFromHqInFeet(pickupBlock){
    return distanceFromHqInBlocks(pickupBlock) * 264
}

function distanceTravelledInFeet(pickupBlock,dropOffBlock){
    if (pickupBlock >= dropOffBlock) {
        return (pickupBlock - dropOffBlock) * 264
    }
    return (dropOffBlock - pickupBlock) * 264
}

function calculatesFarePrice(pickupBlock, dropOffBlock) {
    const distanceInFeet = distanceTravelledInFeet(pickupBlock,dropOffBlock);
    if (distanceInFeet <= 400){
        return 0
    }
    else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02
    }
    else if (distanceInFeet <=2500) {
        return 25
    }
    return 'cannot travel that far'
}