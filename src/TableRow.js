import { TableRow, TableCell, Paragraph } from "docx";

export default function getTextPara(textElement) {
  var docx = require("docx");
  var text;
  var cleanTextArray = textElement.split("\n");

  var arrayOne = [
    new docx.Paragraph({
      text: "butt"
    }),
    new docx.Paragraph({
      text: "googer"
    })
  ];
  var arrayTwo = [
    new docx.Paragraph({
      text: "goofy"
    }),
    new docx.Paragraph({
      text: "bingus"
    })
  ];
  var arrayThree = [];

  // for (var i = 0; i < cleanTextArray.length; ) {
  //   text = new docx.TextRun({
  //     text: cleanTextArray[i]
  //   });

  // one.addChildElement(text);
  // text = new docx.Paragraph({
  //   text: "",
  //   break: 1,
  //   bullet: {
  //     level: 0
  //   }
  // });
  // one.addChildElement(text);
  // i++;

  // two.addChildElement(text);
  // text = new docx.Paragraph({
  //   text: "",
  //   break: 1,
  //   bullet: {
  //     level: 0
  //   }
  // });
  // two.addChildElement(text);
  // i++;

  // three.addChildElement(text);
  // text = new docx.Paragraph({
  //   text: "",
  //   break: 1,
  //   bullet: {
  //     level: 0
  //   }
  // });
  // three.addChildElement(text);
  // i++;
  // }

  var one = new TableCell({ children: arrayOne });
  var two = new TableCell({ children: arrayTwo });
  var three = new TableCell({ children: [] });

  const tableRow = new TableRow({
    children: [one, two, three]
  });

  return new docx.Table({ rows: [tableRow] });
}
