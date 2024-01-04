import { useCallback } from 'react';
import { FieldType, valuesFormType } from './useForm';
import createReadyCityData from '../functions/createReadyCityData';
import validation from '../functions/validation';
type ReadyCityType = {
  id: string;
  value: string;
}[];
type UseHandleOnChangeFormType = {
  setValueForm: (prev: (prevValues: valuesFormType) => valuesFormType) => void;
  setOptionsCity: (val: ReadyCityType) => void;
};

const useHandleOnChangeForm = ({
  setValueForm,
  setOptionsCity,
}: UseHandleOnChangeFormType) => {
  const handleOnChange = useCallback(
    (val: string, field: FieldType) => {
      if (field === 'postalCode' && val.length > 5) {
        return;
      }

      const error = validation(val, field);

      if (field === 'postalCode' && val.length === 5 && !error?.length) {
        const readyCity = createReadyCityData(val);
        readyCity.length === 1
          ? setValueForm((prev) => {
              return {
                ...prev,
                city: {
                  ...prev.city,
                  value: readyCity[0].value,
                  error: '',
                },
              };
            })
          : setOptionsCity(readyCity);
      } else if (field === 'postalCode') {
        setValueForm((prev) => {
          return {
            ...prev,
            city: { ...prev.city, value: '', error: '' },
            street: { ...prev.street, value: '', error: '' },
          };
        });
        setOptionsCity([]);
      }

      if (!!error?.length) {
        return setValueForm((prev) => {
          return { ...prev, [field]: { ...prev[field], value: val, error } };
        });
      } else {
        setValueForm((prev) => {
          return {
            ...prev,
            [field]: { ...prev[field], value: val, error: '' },
          };
        });
      }
    },
    [setOptionsCity, setValueForm],
  );

  return handleOnChange;
};

export default useHandleOnChangeForm;
