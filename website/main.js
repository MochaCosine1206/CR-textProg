
var inp;
var output;
var submit;
var loadedFile;
var loadStrings;




function setup() {
    //------------noCanvas specifies no sketch
    noCanvas();
    //-----------Input is created automatically(p5.js)---------
    //inp = createInput("Try any word here!");
    inp = select('#textfield');

    //------------These lines capture user input in the textbox and output via below functions-------------
    // inp.changed(newText);
    inp.input(newTyping);
    output = select('#output');
    submit = select('#submit');
    txtBoxInput = select('#newText');
    submit.mousePressed(newText);

    //----this button loads a predetermined text file into the DOM----//

    var button = select("#loadFile");
    button.mousePressed(loadFile);

    var fileButton = select("#fileButton");
    var createFileButton = createFileInput(fileSelected);

    fileButton.child(createFileButton);
}

//------------Functions that take user Input and either print it on the screen immediately, or print when the submit button is pressed-----

function newTyping() {
    output.html(inp.value());
    //createP(inp.value());
}


function newText() {
    output.html(inp.value());
    txtBoxInput.html(inp.value() + '<br/>', '#textBox');
    //createP(inp.value());
    // console.log(input.value());
}

//--------------functions for loading a file

function loadFile() {
    loadStrings = loadStrings("rainbow.txt", fileLoaded);
}
function fileLoaded(data) {
    loadedFile = select('#loadedFile');
    var stringP = createP(join(data, "<br/>"))
    loadedFile.child(stringP);
}

function fileSelected(file) {
    // createP(file.name + " " + file.size + " " + file.type);
    console.log(file.data)
    loadedFile = select('#loadedFile');

    if (file.type == 'text') {
        // createP(file.data, "#loadedFile");
        loadedFile.html(file.data, '#loadedFile');
    } else {
        createP("I need a text file.")
    }
    // console.log(file);
}



