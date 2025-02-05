export const validateRequired = (value) => (value ? undefined : "Required");
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const validateEmail = (value) =>
  value
    ?.toLowerCase()
    ?.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? null
    : "Invalid Email";

export const validateNumber = (value) =>
  !isNaN(value) && value !== "" ? undefined : "Must be a number";

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min, message) => (value) =>
  value && value.length < min
    ? message
      ? message
      : `Must be ${min} characters or more`
    : undefined;
