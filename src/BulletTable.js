import {
  TableRow,
  TableCell,
  convertInchesToTwip,
  AlignmentType,
  WidthType,
  TextRun
} from "docx";

export default function getTextPara(textElement) {
  var docx = require("docx");
  var cleanTextArray = textElement.split("\n");

  var arrayOne = [];

  for (var i = 0; i < cleanTextArray.length; i++) {
    arrayOne.push(
      new docx.Paragraph({
        bullet: {
          level: 0
        },
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: cleanTextArray[i]
          })
        ]
      })
    );
  }

  var one = new TableCell({
    children: arrayOne,
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    },
    borders: {
      left: {
        size: 3
      },
      right: {
        size: 3
      }
    }
  });

  const tableRow = new TableRow({
    children: [one]
  });

  return new docx.Table({
    alignment: AlignmentType.CENTER,
    rows: [tableRow],
    width: {
      size: 120,
      type: WidthType.PERCENTAGE
    },
    borders: {
      top: {
        size: 3
      },
      bottom: {
        size: 3
      }
    }
  });
}