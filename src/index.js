import React from "react";
import ReactDOM from "react-dom";
import generate from "./GenDoc";
import "./styles.css";

import { useForm, useField, splitFormProps } from "react-form";

const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const { getInputProps } = useField(field, fieldOptions);

  // Build the field
  return <input {...getInputProps({ ref, ...rest })} />;
});

const AreaField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options to access field state
  const { getInputProps } = useField(field, fieldOptions);

  // Build the field
  return <textarea {...getInputProps({ ref, ...rest })} />;
});

function App() {
  const defaultValues = React.useMemo(
    () => ({
      name: "",
      experience: [""],
      qualifications: [""],
      company: [""],
      location: [""],
      date: [""],
      start: [""],
      end: [""],
      duties: [""],
      diplomaName: [""],
      diplomaLocation: [""],
      diplomaDate: [""]
    }),
    []
  );
  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
      generate(values);
    },
    debugForm: true
  });

  return (
    <Form>
      <div>
        <label>
          Full Name: <InputField field="name" placeholder="John Doe" />
          <datalist></datalist>
          {/* Include Logo{""}
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle" /> */}
        </label>
      </div>
      <fieldset>
        <legend>
          Overview{" "}
          <a href="#">
            ?
            <span>
              <img
                src={require("./img/overview.jpg")}
                alt="image"
                height="300"
              />
            </span>
          </a>
        </legend>

        <label>
          Overview Title:{" "}
          <InputField field="overviewTitle" placeholder="e.g. Engineer" />
        </label>
        <label for="title">Highlights: </label>
        <AreaField
          field="overview"
          placeholder="e.g. Graduate Mechanical Engineer with 10+ years of diversified Engineering..."
        />
      </fieldset>
      {/* <div>
      Overview:{" "}
        <div
            style={{
              border: "1px solid black",
              padding: "1rem"
            }}
          >
          <label>
            Overview Title:{" "}
            <InputField field="overviewTitle" placeholder="e.g. Engineer" />
          </label>
          <label for="title">
          Highlights:{" "}
          </label>
          <AreaField rows="5" id="title" name="title"
              field="overview"
              placeholder="e.g. Graduate Mechanical Engineer with 10+ years of diversified Engineering..."
            />
          </div>
      </div> */}
      <div>
        <div class="aligned">
          <label>
            Technical Expertise{" "}
            <a href="#">
              ?
              <span>
                <img
                  src={require("./img/expertise.PNG")}
                  alt="image"
                  height="300"
                />
              </span>
            </a>
          </label>
          <AreaField field="skills" placeholder="e.g. AutoCAD" />
        </div>
      </div>
      <fieldset>
        <legend>
          Experience{" "}
          <a href="#">
            ?
            <span>
              <img
                src={require("./img/experience.PNG")}
                alt="image"
                height="350"
              />
            </span>
          </a>
        </legend>

        {values.experience.map((job, i) => (
          <div key={i}>
            <label>
              Job Title:{" "}
              <InputField
                field={`experience.${i}`}
                placeholder="e.g. Product Engineer"
              />{" "}
              Company:{" "}
              <InputField field={`company.${i}`} placeholder="e.g. Amazon" />
              <br />
              <br />
              Location:{" "}
              <InputField
                field={`location.${i}`}
                placeholder="e.g. Detroit, MI"
              />{" "}
              Start:{" "}
              <InputField
                field={`start.${i}`}
                placeholder="e.g. December 2008"
              />{" "}
              End: <InputField field={`end.${i}`} placeholder="e.g. Present" />
              <br />
              <br />
            </label>
            <label>
              Duties:{" "}
              <AreaField
                field={`duties.${i}`}
                placeholder="e.g. Lead the engineering team for the development of..."
              />
              <button
                type="button"
                onClick={() => removeFieldValue("experience", i)}
              >
                X
              </button>
            </label>
            <button
              type="button"
              onClick={() => pushFieldValue("experience", "")}
            >
              Add Job
            </button>
          </div>
        ))}
      </fieldset>

      <fieldset>
        <legend>
          {" "}
          Academic Qualifications{" "}
          <a href="#">
            ?
            <span>
              <img src={require("./img/qual.PNG")} alt="image" height="200" />
            </span>
          </a>
        </legend>
        <div>
          {values.qualifications.map((job, i) => (
            <div key={i}>
              <label>
                Diploma Name:{" "}
                <InputField
                  field={`diplomaName.${i}`}
                  placeholder="e.g. Diploma, Mechanical Engineering"
                  id="longer"
                />{" "}
                Location Earned:{" "}
                <InputField field={`diplomaLocation.${i}`} placeholder="" />
                Date Earned:{" "}
                <InputField
                  field={`diplomaDate.${i}`}
                  placeholder="e.g. July 2019"
                />{" "}
                <button
                  type="button"
                  onClick={() => removeFieldValue("qualifications", i)}
                >
                  X
                </button>
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={() => pushFieldValue("qualifications", "")}
          >
            Add Diploma
          </button>
        </div>
      </fieldset>

      <div>
        Specialized Training{" "}
        <a href="#">
          ?
          <span>
            <img src={require("./img/training.PNG")} alt="image" height="150" />
          </span>
        </a>
        <label>
          <AreaField
            field="training"
            placeholder="e.g. Catia V5, Walmart, Detroit, MI"
          />
        </label>
      </div>

      {isSubmitted ? <em>Thanks for submitting!</em> : null}

      {error ? <strong>{error}</strong> : null}

      {isSubmitting ? (
        "Submitting..."
      ) : (
        <div>
          <button type="submit" disable={!canSubmit}>
            Submit
          </button>
        </div>
      )}
    </Form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
