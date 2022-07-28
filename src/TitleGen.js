import {
  TableRow,
  TableCell,
  BorderStyle,
  AlignmentType,
  WidthType,
  TextRun,
  convertInchesToTwip
} from "docx";
import { useEffect } from "react";

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
            font: "Bookman Old Style (Headings)",
            smallCaps: true
          })
        ]
      })
    ],
    margins: {
      top: convertInchesToTwip(0.03),
      bottom: convertInchesToTwip(0.03)
    },
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
        style: BorderStyle.SINGLE,
        size: 1
      }
    }
  });
}
