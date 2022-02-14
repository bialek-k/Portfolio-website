import { useState } from "react";

function useInput(validateValue) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;
}

export default useInput;
