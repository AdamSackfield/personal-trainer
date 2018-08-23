import React from "react";

const formFieldRenderer = ({ input, label, type, placeholder, meta: { touched, error } }) => {
  // * Redux form currently does not recognize the boolean fields for isTechnical; may have to turn into string
  const inputType = type => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className="textarea"
            type={type}
            {...input}
            placeholder={placeholder || "Message Here"}
          />
        );
      default:
        return <input className="input" type={type} {...input} placeholder={placeholder || null} />;
    }
  };
  return (
    <div className="field">
      {!label ? null : <label className="label">{label}</label>}
      <div className="control">{inputType(type)}</div>
      <p className="help is-danger">{touched && (error && <span>{error}</span>)}</p>
    </div>
  );
};

export default formFieldRenderer;
