import { useCallback, useState } from "react";


function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    const formValidation = e.target.closest('form').checkValidity();
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: error }));
    setValid(formValidation);
  }

  const resetValidation = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValid(newIsValid);
      setValues(newValues);
      setErrors(newErrors);
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
