import { TableRow, TableCell, Paragraph } from "docx";

export default function getTextPara(textElement) {
  var docx = require("docx");
  var cleanTextArray = textElement.split("\n");

  var arrayOne = [];
  var arrayTwo = [];
  var arrayThree = [];

  for (var i = 0; i < cleanTextArray.length; ) {
    arrayOne.push(
      new docx.Paragraph({
        text: cleanTextArray[i]
      })
    );
    i++;
    if (i >= cleanTextArray.length) {
      break;
    }

    arrayTwo.push(
      new docx.Paragraph({
        text: cleanTextArray[i]
      })
    );
    i++;
    if (i >= cleanTextArray.length) {
      break;
    }

    arrayThree.push(
      new docx.Paragraph({
        text: cleanTextArray[i]
      })
    );
    i++;
  }

  var one = new TableCell({ children: arrayOne });
  var two = new TableCell({ children: arrayTwo });
  var three = new TableCell({ children: arrayThree });

  const tableRow = new TableRow({
    children: [one, two, three]
  });

  return new docx.Table({ rows: [tableRow] });
}
