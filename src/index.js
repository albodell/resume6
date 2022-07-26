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
      name: "John Doe",
      phone: "248-568-8923",
      email: "Alex@gmail.com",
      experience: ["Engineer"],
      qualifications: ["something"],
      company: ["Amazon"],
      location: ["Detroit"],
      date: ["6/12/2020"],
      start: ["6/19/2019"],
      end: ["7/2/2020"],
      duties: ["This is a note."]
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
          Name: <InputField field="name" />
        </label>
      </div>
      <div>
        <label>
          Overview Title: <InputField field="overviewTitle" />
        </label>
        Overview:{" "}
        <label>
          <AreaField field="overview" defaultValue="This is a note." />
        </label>
      </div>
      <div>
        <label>
          Technical Expertise:{" "}
          <AreaField field="skills" defaultValue="This is a note." />
        </label>
      </div>
      <div>
        Experience:
        <div
          style={{
            border: "1px solid black",
            padding: "1rem"
          }}
        >
          {values.experience.map((job, i) => (
            <div key={i}>
              <label>
                Job Title: <InputField field={`experience.${i}`} /> Company:{" "}
                <InputField field={`company.${i}`} />
                <br />
                <br />
                Location: <InputField field={`location.${i}`} /> Start:{" "}
                <InputField field={`start.${i}`} /> End:{" "}
                <InputField field={`end.${i}`} />
                <br />
                <br />
              </label>
              <label>
                Duties: <AreaField field={`duties.${i}`} />
                <button
                  type="button"
                  onClick={() => removeFieldValue("experience", i)}
                >
                  X
                </button>
              </label>
            </div>
          ))}

          <button
            type="button"
            onClick={() => pushFieldValue("experience", "")}
          >
            Add Job
          </button>
        </div>
      </div>

      <div>
        Academic Qualifications:
        <div
          style={{
            border: "1px solid black",
            padding: "1rem"
          }}
        >
          {values.qualifications.map((job, i) => (
            <div key={i}>
              <label>
                Diploma Name: <InputField field={`diplomaName.${i}`} /> Location
                Earned: <InputField field={`diplomaLocation.${i}`} /> Date
                Earned: <InputField field={`diplomaDate.${i}`} />{" "}
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
      </div>

      <div>
        Specialized Training:{" "}
        <label>
          <AreaField field="training" defaultValue="This is a note." />
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
