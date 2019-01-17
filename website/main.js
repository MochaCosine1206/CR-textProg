
var inp;
var output;
var submit;
var loadedFile;
var loadStrings;
var textField2;
var textField2Output;
var textField2Submit;




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

    //-------------Javascript String Object

    textField2 = select('#textField2');
    textField2Output = select('#textfield2Output');
    textField2Submit = select('#textField2Submit');
    textField2Submit.mousePressed(newText2);
}

//------------Functions for Javascript String Object

function newText2() {
    var textField2P = (textField2.value());
    var textField2PLength = createP("The length of the word is:  " + textField2P.length);
    var textField2PIndex = createP("The Index of 'rainbow' is:  " + textField2P.indexOf("rainbow"));
    var textField2PSubStr = createP("Middle of string to the end of the string: " + textField2P.substring(textField2P.length/2, textField2P.length));
    //--------here we split on a space, but we could split on a comma, etc.
    var textfield2PSplit = split(textField2P, " ");

    //----here we can split by type of character

    var textfield2SplitToken = splitTokens(textField2P, ", ");

    //-----here's one that sorts the words

    var textField2PSort = textfield2SplitToken.sort();
    textField2PSortJoin = createP("Sorted Text here: " + join(textField2PSort, " "));

    //Can you write an algorithem that pulls out the number in s sentance?  Find words around number first.
    textField2Output.child(textField2PLength);
    textField2Output.child(textField2PIndex);
    textField2Output.child(textField2PSubStr);
    for (var i = 0; i < textfield2PSplit.length; i++) {
        textField2Output.child(createP(textfield2PSplit[i]));
    }
    for (var i = 0; i < textfield2SplitToken.length; i++) {
        textField2Output.child(createP(textfield2SplitToken[i]));
    }
    textField2Output.child(textField2PSortJoin);
    
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



