const directionsList = document.getElementById('directions-list');
document.addEventListener('keydown', function(event) {
    if (directionsList.innerHTML.length > 20)
        directionsList.innerHTML = directionsList.innerHTML.slice(-20);
    if(event.keyCode == 87) {
        directionsList.innerHTML += "^ ";
    }
    else if(event.keyCode == 83) {
        directionsList.innerHTML += "V ";
    }
    else if(event.keyCode == 65) {
        directionsList.innerHTML += "< ";
    }
    else if(event.keyCode == 68) {
        directionsList.innerHTML += "> ";
    }
    else if(event.keyCode == 32) {
        directionsList.innerHTML += "Up ";
    }
    else if(event.keyCode == 16) {
        directionsList.innerHTML += "Down ";
    }
});