const numberMin = document.getElementById("minNumber");
const numberMax = document.getElementById("maxNumber");
const palindromeBtn = document.getElementById("palindromeBtn");
const perfectBtn = document.querySelector(".perfectBtn");
const palindromeTextArea = document.getElementById("palindrome");
const perfectTextArea = document.getElementById("perfect");
const resetBtn = document.getElementById("reset");

// const minNum = numberMin.value;
// const maxNum = numberMax.value;
function palindromeListHandler() {
  if (!(palindromeTextArea.innerHTML === "")) {
    return;
  } else {
    for (let i = numberMin.value; i < numberMax.value; i++) {
      const str1 = String(i).split("");
      if (str1.join() === str1.reverse().join()) {
        palindromeTextArea.textContent += `
              ${i}`;
      }
    }
  }
}

function perfectNumberHander() {
  if (!(perfectTextArea.innerHTML === "")) {
    console.log("yayt");
  } else {
    for (let i = numberMin.value; i < numberMax.value; i++) {
      if (checkPerfectNumber(i)) {
        console.log(i);

        perfectTextArea.textContent += `
        ${i}`;
      }
    }
    function checkPerfectNumber(i) {
      if (i === 0) {
        return false;
      }
      let divisors = [];
      for (let number = 1; number < i; number++) {
        if (i % number === 0) {
          divisors.push(number);
        }
      }
      return divisors.reduce((x, y) => x + y, 0) === i;
    }
  }
}
palindromeBtn.addEventListener("click", palindromeListHandler);
perfectBtn.addEventListener("click", perfectNumberHander);
resetBtn.addEventListener("click", () => {
  palindromeTextArea.innerHTML = "";
  perfectTextArea.innerHTML = "";
  numberMax.value = 0;
  numberMin.value = 0;
});
