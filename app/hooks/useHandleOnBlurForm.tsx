import { useCallback } from 'react';
import validation from '../functions/validation';
import { FieldType, valuesFormType } from './useForm';

type UseHandleOnBlurFormType = {
  setValueForm: (prev: (prevValues: valuesFormType) => valuesFormType) => void;
};

const useHandleOnBlurForm = ({ setValueForm }: UseHandleOnBlurFormType) => {
  const handleOnBlur = useCallback(
    (val: string, field: FieldType) => {
      const error = validation(val, field);
      setValueForm((prevValues: valuesFormType) => ({
        ...prevValues,
        [field]: { ...prevValues[field], value: val, error: error || '' },
      }));
    },
    [setValueForm],
  );

  return handleOnBlur;
};

export default useHandleOnBlurForm;
