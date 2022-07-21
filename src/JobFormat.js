import bullet from "./Bullet";
import bulletTable from "./BulletTable";

export default function getTextPara(title, company, location, date, duties) {
  var docx = require("docx");
  var allJob = [];

  for (var p = 0; p < title.length; p++) {
    allJob.push(
      new docx.TextRun({
        text: company[p],
        font: "Bookman Old Style",
        size: 21,
        bold: true
      }),
      new docx.TextRun({
        text: " —— ",
        bold: true,
        font: "Bookman Old Style",
        size: 21
      }),
      new docx.TextRun({
        text: location[p],
        font: "Bookman Old Style",
        size: 21,
        bold: true
      }),
      new docx.TextRun({
        text: title[p],
        font: "Bookman Old Style",
        size: 19,
        bold: true,
        underline: true,
        break: 1
      }),
      new docx.TextRun({ text: ", " }),
      new docx.TextRun({
        text: date[p],
        font: "Bookman Old Style",
        size: 19
      })
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

  return new docx.Paragraph({
    children: allJob
  });
}
