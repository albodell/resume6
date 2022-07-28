import { TextRun, Paragraph } from "docx";
import bulletTable from "./BulletTable";

export default function getTextPara(
  title,
  company,
  location,
  startDate,
  endDate,
  duties
) {
  var allJob = [new TextRun({})];

  for (var p = 0; p < title.length; p++) {
    var currDuties = bulletTable(duties[p], 0, 0.6);
    allJob.push(
      new Paragraph({
        children: [
          new TextRun({
            text: p + 1,
            font: "Bookman Old Style",
            size: 21,
            bold: true
          }),
          new TextRun({
            text: ".  ",
            font: "Bookman Old Style",
            size: 21,
            bold: true
          }),
          new TextRun({
            text: company[p],
            font: "Bookman Old Style",
            size: 21,
            bold: true
          }),
          new TextRun({
            text: " —— ",
            bold: true,
            font: "Bookman Old Style",
            size: 21
          }),
          new TextRun({
            text: location[p],
            font: "Bookman Old Style",
            size: 21,
            bold: true
          })
        ]
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: title[p],
            font: "Bookman Old Style",
            size: 19,
            bold: true,
            underline: true,
            break: 1
          }),
          new TextRun({ text: ",  " }),
          new TextRun({
            text: startDate[p],
            font: "Bookman Old Style",
            size: 19
          }),
          new TextRun({
            text: " to ",
            font: "Bookman Old Style",
            size: 19
          }),
          new TextRun({
            text: endDate[p],
            font: "Bookman Old Style",
            size: 19
          })
        ]
      }),

      new Paragraph({}),
      currDuties,
      new Paragraph({})
    );
  }

  return new Paragraph({
    children: allJob
  });
}
