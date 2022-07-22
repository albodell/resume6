import "./styles.css";
import docx, {
  Paragraph,
  Document,
  Packer,
  AlignmentType,
  TextRun,
  TableRowHeight
} from "docx";
import { saveAs } from "file-saver";
import split from "./Split";
import jobFormat from "./JobFormat";
import skillsTable from "./SkillsTable";
import bulletTable from "./BulletTable";
import titleGen from "./TitleGen";
//generates doc and holds basic html headers words and stuff

//export default function GenDoc(values) {
export default function generate(values) {
  const experienceTitle = titleGen("Technical Experience");
  const jobTitle = titleGen("Professional Highlights");
  const skills = skillsTable(values["skills"]);
  const overview = bulletTable(values["overview"], 0, 0.5);
  const experience = jobFormat(
    values["experience"],
    values["company"],
    values["location"],
    values["date"],
    values["duties"]
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
            children: [
              new TextRun({
                text: values["name"],
                font: "Bookman Old Style",
                size: 40,
                bold: true,
                underline: true
              }),
              new TextRun({
                text: " _________________________________________________",
                size: 40,
                bold: true,
                underline: true
              }),
              new TextRun({
                break: 1,
                text: values["overviewTitle"],
                font: "Bookman Old Style",
                size: 26,
                bold: true
              })
            ]
          }),
          overview,
          new Paragraph({}),

          experienceTitle,
          new Paragraph({}),
          skills,
          new Paragraph({}),
          jobTitle,
          new Paragraph({}),
          experience
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
