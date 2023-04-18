


const copyButton1 = document.querySelector(".copy-button1");
const textToCopy1 = document.querySelector(".text-to-copy1");

copyButton1.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy1);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});
const copyButton2 = document.querySelector(".copy-button2");
const textToCopy2 = document.querySelector(".text-to-copy2");

copyButton2.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy2);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});
const copyButton3 = document.querySelector(".copy-button3");
const textToCopy3 = document.querySelector(".text-to-copy3");

copyButton3.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy3);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});
const copyButton4 = document.querySelector(".copy-button4");
const textToCopy4 = document.querySelector(".text-to-copy4");

copyButton4.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy4);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});
const copyButton5 = document.querySelector(".copy-button5");
const textToCopy5 = document.querySelector(".text-to-copy5");

copyButton5.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy5);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});
const copyButton6 = document.querySelector(".copy-button6");
const textToCopy6 = document.querySelector(".text-to-copy6");

copyButton6.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(textToCopy6);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire('text copied')
});




