import { useCallback, useState } from "react";


function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    const formValid = e.target.closest("form").checkValidity();
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: error }));
    setValid(formValid);
  }

  const resetValidation = useCallback(
    (isValid = false, values = {}, errors = {}) => {
      setValid(isValid);
      setValues(values);
      setErrors(errors);
    },
    [setValid, setValues, setErrors]
  );

  return {
    values,
    errors,
    isValid,
    onChange,
    resetValidation,
  };
}

export default Validation;
