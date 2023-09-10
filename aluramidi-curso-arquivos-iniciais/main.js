function Sound(idSoundElement) {
    let sound = document.querySelector(idSoundElement); // Get the audio source from document by using the parameter function;
    if (sound.localName != 'audio') {
        return 'This is not an audio';
    } // If the parameter is not a tag audio
    sound = new Audio(sound.src); // Remove the timeout from the original Audio tag and made a new Audio when the function is called;
    return sound.play(); // Return the sound;
};

const arraySounds = document.querySelectorAll('.tecla'); // Select all elements with class '.tecla';
const arrayKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]; // Array for keys;

for (let index = 0; index < arraySounds.length; index++) {
    let element = arraySounds[index].getAttribute("class").slice(6); // Return string 'tecla_x';
    document.querySelector('.'+element).appendChild(document.createTextNode(` (${arrayKeys[index]})`)); // Add the respective keys in the buttons text;
    let action = document.querySelector('.'+element); // Concatenate the . and element string to call the class;
    action.onclick = () => Sound('#som_'+element); // Call the function when is clicking the button;

    action.onkeydown = function (event) { // Using Enter and Space;
        if (event.code === "Enter" || event.code === "Space") {
            action.classList.add('ativa'); // Add the class with more CSS specifications;
            action.onkeydown = () => Sound('#som_'+element); // Also made the sound;
        };
    };
    action.onkeyup = function () { // After the key is not being holded anymore;
        action.classList.remove('ativa'); // Remove the class;
    };

    addEventListener("keyup", (event) => { // Add the specific key for each button;
        if (event.code === "Key"+arrayKeys[index]){
            Sound('#som_'+element); // Call the function after the key goes up;
        };
    });
};