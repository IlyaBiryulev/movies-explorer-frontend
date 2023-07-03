import { useCallback, useState } from "react";


function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  function onChange(e) {
    const target = e.target;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setValid(target.closest('form').checkValidity());
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
    setValues,
    onChange,
    resetValidation,
  };
}

export default Validation;
