let button1 = $('#make-die');
let button2 = $('#roll-die');
let button3 = $('#sum-die');
class Die {
    constructor(value) {
        this.value = value;
    }
    roll() {
        // should generate a random integer 1-6
        // should set the 'value' property
        // should update the div on the screen w/ the new value

        let nextNumber = Math.floor(Math.random() * 7);
        let dieID = nextNumber;
        // diceClick.remove();
        diceClick.append(dieID);
        console.log('It is me!' + dieID);
    }
};

button2.click(function (event) {
    let nextNumber = Math.floor(Math.random() * 7);
    if (dieID == w) {
        // let newValue = nextNumber;
        // diceClick.remove();
        // diceClick.append(dieID);
        diceClick.text(nextNumber);
        dieHolder.append(diceClick);
        $('body').append(nextNumber);

        console.log('It is me!' + dieID);
    };
})

button1.click(function (event) {
    let w = Math.floor(Math.random() * 7);
    console.log(w);
    let diceClick = $('<div class="square" id="dice">');
    let dieID = w;
    diceClick.append(dieID);
    dieHolder.append(diceClick);
    $('body').append(dieHolder);

    dieHolder.dblclick(function () {
        diceClick.remove();
    });
});


let diceClick = $('<div class="square" id="dice">');
let dieHolder = $('<div id="dieHolder">');
let w = Math.floor(Math.random() * 7);
let dieID = w;

dieHolder.click(function (e) {
    let nextNumber = Math.floor(Math.random() * 7);
    if (dieID == w) {
        // let dieID = nextNumber;
        // diceClick.remove();
        diceClick.text(nextNumber);
        dieHolder.append(diceClick);
        // $('body').append(nextNumber);
        console.log('It is me!' + nextNumber);
    };
});
