const input = document.getElementById("text");
const button = document.querySelector("button");
const qrImage = document.querySelector(".qr-image img");

button.addEventListener("click", function () {
  const data = input.value;
  if (data > 0) {
    const result =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + data;
    qrImage.src = result;
  }
});
