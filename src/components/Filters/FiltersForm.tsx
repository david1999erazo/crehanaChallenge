import React, { /* useCallback, */ useState } from "react";
import { Form, Formik } from "formik";
import { func, object } from "prop-types";

const FiltersForm = ({
  onSubmit,
  currentValues,
}: {
  onSubmit: any;
  currentValues: any;
}) => {
 
  const handleSubmit = (values: {
    code: string;
    currency: string;
    continent: string;
  }) => {

    const payload = {
      code: values.code
        ? {
            eq: values.code,
          }
        : undefined,
      currency: values.currency
        ? {
            regex: values.currency || "",
          }
        : undefined,
      continent: values.continent
        ? {
            eq: values.continent || "",
          }
        : undefined,
    };
    onSubmit(values, payload);
  };

  return (
    <Formik
      initialValues={
        currentValues
          ? currentValues
          : {
              code: "",
              currency: "",
              continent: "",
            }
      }
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

        setSubmitting(false);
        handleSubmit(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h6> Filter countries by</h6>
          <input
            placeholder="Code"
            type="text"
            name="code"
            style={{ maxWidth: "6em", marginLeft: "1em" }}
          />
          <input
            placeholder="Continent"
            type="text"
            name="continent"
            style={{ maxWidth: "6em", marginLeft: "1em" }}
          />
          <input
            placeholder="Currency"
            type="text"
            name="currency"
            style={{ maxWidth: "6em", marginLeft: "1em" }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ marginLeft: "1em" }}
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

FiltersForm.propTypes = {
  onSubmit: func,
  currentValues: object,
};

FiltersForm.defaultProps = {
  onSubmit: () => {},
  currentValues: {},
};

export default FiltersForm;
