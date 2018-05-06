var addArray = function () {
    var arrayForm = document.getElementsByClassName('arrayForm')[0];
    var numOfArrays = document.getElementById('NumberOfArrays').value;

    while (arrayForm.hasChildNodes()) {
        arrayForm.removeChild(arrayForm.lastChild);
    }

    for(var i = 0 ; i<numOfArrays; i++){
        arrayForm.appendChild(document.createTextNode("Array " + (i + 1) +":"));
        var input = document.createElement("input");
        input.type = "text";
        input.name = "array" + (i + 1);
        var div = document.createElement('div');
        div.id = "input";
        div.appendChild(input);
        arrayForm.appendChild(div);
        arrayForm.appendChild(document.createElement("br"));
    }

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "submit";
    var divAction = document.createElement('div');
    divAction.id = "actions";
    divAction.appendChild(submit);
    arrayForm.appendChild(divAction);
    arrayForm.appendChild(document.createElement("br"));
}