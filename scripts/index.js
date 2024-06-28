document.querySelector(".copy_text").addEventListener("click", function () {
  const textToCopy = document.querySelector(".text_output p").innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard: " + textToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
