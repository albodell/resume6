import {
  TableRow,
  TableCell,
  BorderStyle,
  AlignmentType,
  WidthType,
  TextRun
} from "docx";

export default function experienceTitle(titleName) {
  var docx = require("docx");

  var one = new TableCell({
    children: [
      new docx.Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            alignment: AlignmentType.CENTER,
            text: titleName,
            size: 24,
            bold: true,
            font: "Bookman Old Style"
          })
        ]
      })
    ],
    height: {
      size: 0.2
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

  return new docx.Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE
    },

    rows: [
      new TableRow({
        children: [one]
      })
    ],
    borders: {
      bottom: {
        style: BorderStyle.DOT_DASH
      }
    }
  });
}
