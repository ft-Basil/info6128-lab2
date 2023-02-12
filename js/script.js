function printOutput(){
    var field1 = document.getElementById("title").value;
    if (field1.value === "") {
        alert("Please enter a value in the artist field.");
    }
    var field2 = document.getElementById("artist").value;
    if (field2.value === "") {
        alert("Please enter a value in the artist field.");
    }
    var btn = document.getElementById("button");

    var opprint = document.getElementById("output");

    opprint.innerHTML = field1 + field2;
}