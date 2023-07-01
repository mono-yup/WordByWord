function delayWord (array, index, speed) {
    if (index < array.length){
        setTimeout(function() {
            console.log(array[index])
            document.querySelector("#displayText").innerText = array[index];
            return delayWord(array, index + 1, speed);
        }, speed)
        
    }
}

document.querySelector("#run").addEventListener("click", function() {
    var text = document.querySelector("#inputText").value;
    var seperatedText = text.split(" ");
    var speed = Number(document.querySelector("#inputSpeed").value);
    console.log(speed)
    if (seperatedText.length > 0 && speed > 0) {
        delayWord(seperatedText,0, speed);
    }
  });