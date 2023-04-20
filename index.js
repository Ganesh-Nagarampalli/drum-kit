function makeSound(audioFile){
    var audio = document.getElementById("audio")
    audio.src = "sounds/" +audioFile
    audio.play()
}

document.addEventListener('keydown', pressKey)

function pressKey(event) {
    switch(event.key.toLowerCase()) {
        case 'b':
            makeSound('crash.mp3');
            break;
        case 'i':
            makeSound('kick-bass.mp3');
            break;
        case 's':
            makeSound('snare.mp3');
            break;
        case 'l':
            makeSound('tom-1.mp3');
            break;
        case 'e':
            makeSound('tom-2.mp3');
            break;
        case 'r':
            makeSound('tom-3.mp3');
            break;
        case 'y':
            makeSound('tom-4.mp3');
            break;
        default:
            alert("Press keys only from B-I-S-L-E-R-Y")
            break;
    }
}


  