import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reset, reduxForm } from 'redux-form';
import formFieldRenderer from './FormFieldRenderer';

const FormBuilder = ({ handleSubmit, fields, formTitle, buttonText }) => {
	const renderFields = fields.map((field, i) => {
		return <Field key={i} label={field.label} name={field.name} type={field.type} component={formFieldRenderer} />;
	});

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className="title">{formTitle}</h1>
			{renderFields}
			<div className="buttons">
				<button className="button is-success" type="submit">
					{buttonText}
				</button>
			</div>
		</Form>
	);
};

FormBuilder.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired
  }))
}

export default reduxForm({
	form: 'form',
})(FormBuilder);

// TODO - Add Reset Form
// TODO - Add Validation
