import {
  TableRow,
  TableCell,
  convertInchesToTwip,
  AlignmentType,
  WidthType,
  TextRun,
  Table,
  Paragraph
} from "docx";

export default function getTextPara(name, location, date) {
  var arrayQ = [];
  var arrayD = [];

  for (var i = 0; i < name.length; i++) {
    arrayQ.push(
      new Paragraph({
        spacing: {
          after: 50
        },
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: name[i],
            bold: true
          }),
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: location[i],
            break: 1
          })
        ]
      })
    );

    arrayD.push(
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: {
          after: 50
        },
        children: [
          new TextRun({
            font: "Bookman Old Style",
            size: 19,
            text: date[i]
          })
        ]
      }),
      new Paragraph({})
    );
  }

  var Q = new TableCell({
    children: arrayQ,
    width: {
      size: 75,
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
      },
      right: {
        size: 3
      }
    }
  });

  var D = new TableCell({
    children: arrayD,
    width: {
      size: 25,
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
      },
      right: {
        size: 3
      }
    }
  });

  const tableRow = new TableRow({
    children: [Q, D]
  });

  return new Table({
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
