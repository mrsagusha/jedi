type ValidationRule = {
  required: string;
};

interface ValidationRules {
  name: ValidationRule;
  email: ValidationRule;
}

const useValidation = (): ValidationRules => {
  return {
    name: {
      required: 'Name is required',
    },
    email: {
      required: 'Email is required',
    },
  };
};

export { useValidation };
