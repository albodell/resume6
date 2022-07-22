import { NumberFormat, TextRun, Paragraph } from "docx";
import bulletTable from "./BulletTable";

export default function getTextPara(title, company, location, date, duties) {
  //var docx = require("docx");
  var allJob = [new TextRun({})];

  for (var p = 0; p < title.length; p++) {
    var currDuties = bulletTable(duties[p], 2);
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
          new TextRun({ text: ", " }),
          new TextRun({
            text: date[p],
            font: "Bookman Old Style",
            size: 19
          })
        ]
      }),

      new Paragraph({}),
      currDuties,
      new Paragraph({})
    );
    //allJob.push([company[p], location[p], title[p], date[p], duties[p]])
    //cleanDutiesArray = cleanDutiesArray.concat(duties[p].split("\n"));

    // for (var i = 0; i < cleanDutiesArray.length;) {
    //   companyLocation = new docx.TextRun({
    //     companyText: cleanDutiesArray[i],
    //     locationText: cleanDutiesArray[i+1]
    //   });
    //   i++
    //   titleDate = new docx.TextRun({
    //     text: cleanDutiesArray[i]
    //   });
    //   i++
    //   dutiesPara = new docx.TextRun({
    //     text: cleanDutiesArray[i]
    //   });
    //   i++

    // para.addChildElement(currCompany);
    // currCompany = new docx.TextRun({
    //   text: "",
    //   break: 1,
    //   font: "Bookman Old Style",
    //   size: 19
    // });
    // para.addChildElement(currCompany);

    // para.addChildElement(currLocation);
    // currLocation = new docx.TextRun({
    //   text: "",
    //   font: "Bookman Old Style",
    //   size: 19
    // });
    // para.addChildElement(currLocation);

    // para.addChildElement(currTitle);
    // currTitle = new docx.TextRun({
    //   text: "",
    //   break: 1,
    //   font: "Bookman Old Style",
    //   size: 19
    // });
    // para.addChildElement(currTitle);

    // para.addChildElement(currDate);
    // currDate = new docx.TextRun({
    //   text: "",
    //   font: "Bookman Old Style",
    //   size: 19
    // });
    // para.addChildElement(currDate);
    // }
  }

  return new Paragraph({
    children: allJob
  });
}
