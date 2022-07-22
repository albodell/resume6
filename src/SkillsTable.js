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
  var arrayTwo = [];
  var arrayThree = [];

  for (var i = 0; i < cleanTextArray.length; ) {
    arrayOne.push(
      new docx.Paragraph({
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            italics: true,
            text: cleanTextArray[i]
          })
        ]
      })
    );
    i++;
    if (i >= cleanTextArray.length) {
      break;
    }
    arrayTwo.push(
      new docx.Paragraph({
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: cleanTextArray[i]
          })
        ]
      })
    );
    i++;
    if (i >= cleanTextArray.length) {
      break;
    }

    arrayThree.push(
      new docx.Paragraph({
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: cleanTextArray[i]
          })
        ]
      })
    );
    i++;
  }

  var one = new TableCell({
    children: arrayOne,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
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
      }
    }
  });

  var two = new TableCell({
    children: arrayTwo,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    }
  });

  var three = new TableCell({
    children: arrayThree,
    width: {
      size: 33.3,
      type: WidthType.PERCENTAGE
    },
    height: {
      size: 0.2
    },
    margins: {
      left: convertInchesToTwip(0.1),
      right: convertInchesToTwip(0.1)
    },
    borders: {
      right: {
        size: 3
      }
    }
  });

  const tableRow = new TableRow({
    children: [one, two, three]
  });

  return new docx.Table({
    alignment: AlignmentType.CENTER,
    rows: [tableRow],
    width: {
      size: 100,
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
