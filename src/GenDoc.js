import "./styles.css";
import docx, {
  Paragraph,
  Document,
  Packer,
  AlignmentType,
  TextRun,
  ImageRun
} from "docx";
import { saveAs } from "file-saver";
import jobFormat from "./JobFormat";
import skillsTable from "./SkillsTable";
import bulletTable from "./BulletTable";
import titleGen from "./TitleGen";
import qualTable from "./QualTable";
import logo from "./img/logo.png";

//generates doc and holds basic html headers words and stuff

//export default function GenDoc(values) {
export default function generate(values) {
  const skillsTitle = titleGen("Technical Experience");
  const jobTitle = titleGen("Professional Highlights");
  const diplomaTitle = titleGen("Academic Qualifications");
  const trainTitle = titleGen("Specialized Training");
  const skills = skillsTable(values["skills"]);
  const overview = bulletTable(values["overview"], 0, 0.5);
  const training = bulletTable(values["training"], 0, 0.5);

  const experience = jobFormat(
    values["experience"],
    values["company"],
    values["location"],
    values["start"],
    values["end"],
    values["duties"]
  );
  const qualifications = qualTable(
    values["diplomaName"],
    values["diplomaLocation"],
    values["diplomaDate"]
  );
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              right: 1000,
              left: 1000
            }
          }
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: {
              before: 200,
              after: 150
            },
            children: [
              new ImageRun({
                data: logo,
                transformation: {
                  width: 50,
                  height: 50
                },
                floating: {
                  horizontalPosition: {
                    offset: 1014400
                  },
                  verticalPosition: {
                    offset: 1014400
                  }
                }
              }),
              new TextRun({
                text: values["name"],
                font: "Bookman Old Style",
                size: 40,
                bold: true,
                underline: true
              }),
              new TextRun({
                text: " ══════════════════════════════════════════════ ",
                size: 30,
                bold: true,
                break: 1
              }),
              new TextRun({
                break: 1,
                text: values["overviewTitle"],
                font: "Bookman Old Style",
                size: 26,
                bold: true,
                smallCaps: true
              })
            ]
          }),
          overview,
          new Paragraph({}),

          skillsTitle,
          new Paragraph({}),
          skills,
          new Paragraph({}),

          jobTitle,
          new Paragraph({}),
          experience,
          new Paragraph({}),

          diplomaTitle,
          new Paragraph({}),
          qualifications,
          new Paragraph({}),

          trainTitle,
          new Paragraph({}),
          training
        ]
      }
    ]
  });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
}
