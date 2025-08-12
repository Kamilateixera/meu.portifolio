const text = "Kamila Teixeira Gonçalves";
const element = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
    index++;
    setTimeout(typeWriter, 100);
  } else {
    element.innerHTML = text + '<span class="cursor">|</span>';
  }
}

typeWriter();
