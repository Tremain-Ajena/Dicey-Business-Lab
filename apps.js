let button1 = $('#make-die');
let button2 = $('#roll-die');
class Die {
    constructor(value) {
        this.value = value;
    }
    roll() {
        // should generate a random integer 1-6
        Math.floor(Math.random() * 6);
        // should set the 'value' property
        // should update the div on the screen w/ the new value
    }
};

button1.click(function (event) {
    let w = Math.floor(Math.random() * 7);
    console.log(w);
    let dieClick = $('<div class="square">');
    // dieClick.className = 'square'
    let dieHolder = $('<div id="dieHolder">');
    let dieID = w;
    dieHolder.append(dieClick);
    $('body').append(dieHolder);
    dieClick.append(dieID);
    dieClick.id = w;
    // i++;
});