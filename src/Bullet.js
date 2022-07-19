export default function bullet(e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code === 13) {
    e.preventDefault();

    e.target.value += "\n●  ";
  }
  if (e.target.value.includes("")) {
    e.preventDefault();
    console.log("b");
    e.target.value = e.target.value.replaceAll("", "●");
  }
}
