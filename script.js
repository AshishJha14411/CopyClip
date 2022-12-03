let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let inputData = document.querySelector("#textArea");
  inputData.select();
  navigator.clipboard.writeText(inputData.value);
  alert("Text Copied");
  inputData.value = "";
});
