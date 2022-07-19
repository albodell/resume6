import bullet from "./Bullet";

export default function getTextPara(title, company, date, duties) {
  var docx = require("docx");
  var text;
  var para = new docx.Paragraph({
    children: []
  });

  for (var p = 0; p < title.length; p++) {
    var cleanDutiesArray = [title[p], company[p], date[p]];
    cleanDutiesArray = cleanDutiesArray.concat(duties[p].split("\n"));

    for (var i = 0; i < cleanDutiesArray.length; i++) {
      text = new docx.TextRun({
        text: cleanDutiesArray[i]
      });

      para.addChildElement(text);

      text = new docx.TextRun({
        text: "",
        break: 1,
        font: "Bookman Old Style",
        size: 19
      });

      para.addChildElement(text);
    }
  }

  return para;
}
