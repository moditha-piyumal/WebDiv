// alert("WTF");

for (var xx = 0; xx <= 6; xx++) {

    document.getElementsByTagName("button")[xx].addEventListener("click", function() {
        var htmlOfButton = this.innerHTML;
        switch (htmlOfButton) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                var t1 = new Audio('sounds/tom-1.mp3');
                t1.play();
                break;
            case "j":
                var t2 = new Audio('sounds/tom-2.mp3');
                t2.play();
                break;
            case "k":
                var t3 = new Audio('sounds/tom-3.mp3');
                t3.play();
                break;
            case "l":
                var t4 = new Audio('sounds/tom-4.mp3');
                t4.play();
                break;
        
            default: alert("FU");
                break;
        }
    });
};

// var audio = new Audio('sounds/crash.mp3');
//         audio.play();

// console.log(this);
//         this.style.color = "blue";

/*
document.addEventListener("keydown", function(event) {
    // alert("Key is Down");
    switch (event.code) {
        case "KeyW":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "KeyA":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "KeyS":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "KeyD":
            var t1 = new Audio('sounds/tom-1.mp3');
            t1.play();
            break;
        case "KeyJ":
            var t2 = new Audio('sounds/tom-2.mp3');
            t2.play();
            break;
        case "KeyK":
            var t3 = new Audio('sounds/tom-3.mp3');
            t3.play();
            break;
        case "KeyL":
            var t4 = new Audio('sounds/tom-4.mp3');
            t4.play();
            break;
    
        default: alert("FU");
            break;
    }
})
*/