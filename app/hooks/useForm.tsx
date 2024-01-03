import { useCallback, useMemo, useState } from 'react';
import validation, { ZipCodeJsonType } from '../functions/validation';

import { SelectOptionType } from '../components/Select/SelectGeneral';
import createReadyCityData from '../functions/createReadyCityData';

export type FieldType =
  | 'gender'
  | 'phone'
  | 'postalCode'
  | 'city'
  | 'street'
  | 'name'
  | 'house';

type valuesFormType = {
  [key: string]: {
    value: string;
    error: string;
  };
};

const useForm = () => {
  const [valuesForm, setValueForm] = useState({
    gender: { value: '', error: '' },
    name: { value: '', error: '' },
    phone: { value: '', error: '' },
    postalCode: { value: '', error: '' },
    city: { value: '', error: '' },
    street: { value: '', error: '' },
    house: { value: '', error: '' },
  } as valuesFormType);

  const [optionsCity, setOptionsCity] = useState([] as SelectOptionType[]);

  const handleOnBlur = useCallback((val: string, field: FieldType) => {
    const error = validation(val, field);
    if (!!error?.length) {
      return setValueForm((prev) => {
        return { ...prev, [field]: { ...prev[field], value: val, error } };
      });
    } else {
      setValueForm((prev) => {
        return { ...prev, [field]: { ...prev[field], value: val, error: '' } };
      });
    }
  }, []);

  const handleOnChange = useCallback((val: string, field: FieldType) => {
    if (field === 'postalCode' && val.length > 5) {
      return;
    }

    const error = validation(val, field);
    debugger
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
        return { ...prev, [field]: { ...prev[field], value: val, error: '' } };
      });
    }
  }, []);

  const isButtonSendDisabled = useMemo(() => {
    let isButtonDisabled = false;
    for (const key in valuesForm) {
      if (!!valuesForm[key].error.length || !valuesForm[key].value) {
        isButtonDisabled = true;
        break;
      }
    }
    return isButtonDisabled;
  }, [valuesForm]);

  const formData = useMemo(() => {
    return [
      {
        id: 'key1',
        type: 'radio',
        name: 'Anrede',
        radio: [
          {
            id: 'key1r',
            name: 'Herr',
            onChange: (val: string) => handleOnChange(val, 'gender'),
            onBlur: (val: string) => handleOnBlur(val, 'gender'),
            value: 'Herr',
            checked: valuesForm.gender.value === 'Herr',
          },
          {
            id: 'key2r',
            name: 'Frau',
            onChange: (val: string) => handleOnChange(val, 'gender'),
            onBlur: (val: string) => handleOnBlur(val, 'gender'),
            value: 'Frau',
            checked: valuesForm.gender.value === 'Frau',
          },
        ],
        marginTop: '',
        error: valuesForm.gender.error,
      },
      {
        id: 'key2',
        type: 'text',
        name: 'Name',
        onChange: (val: string) => handleOnChange(val, 'name'),
        onBlur: (val: string) => handleOnBlur(val, 'name'),
        value: valuesForm.name.value,
        marginTop: 'mt-[8.59px]',
        error: valuesForm.name.error,
        placeholder: 'Vor- und Nachname',
      },
      {
        id: 'key3',
        type: 'number',
        name: 'Telefonnummer',
        onChange: (val: string) => handleOnChange(val, 'phone'),
        onBlur: (val: string) => handleOnBlur(val, 'phone'),
        value: valuesForm.phone.value,
        marginTop: 'mt-[10.09px]',
        error: valuesForm.phone.error,
        placeholder: '+49 123 456 789',
      },
      {
        id: 'key4',
        type: 'number',
        name: 'Postleitzahl',
        onChange: (val: string) => handleOnChange(val, 'postalCode'),
        onBlur: (val: string) => handleOnBlur(val, 'postalCode'),
        value: valuesForm.postalCode.value,
        marginTop: 'mt-[11.59px]',
        error: valuesForm.postalCode.error,
        placeholder: 'PLZ',
      },
      {
        id: 'key5',
        type:
          !optionsCity?.length || optionsCity?.length === 1 ? 'text' : 'select',
        name: 'Ort',
        onChange: (val: string) => handleOnChange(val, 'city'),
        onBlur: (val: string) => handleOnBlur(val, 'city'),
        value: valuesForm.city.value,
        marginTop: 'mt-[11.59px]',
        error: valuesForm.city.error,
        options: optionsCity,
        disabled: optionsCity.length === 1 || !optionsCity.length,
        placeholder:
          optionsCity.length > 1
            ? 'Wählen'
            : 'Bitte geben Sie Ihre Postleitzahl ein',
      },
      {
        id: 'key6',
        type: 'double',
        inputs: [
          {
            id: 'key1i',
            type: 'text',
            name: 'Straße',
            onChange: (val: string) => handleOnChange(val, 'street'),
            onBlur: (val: string) => handleOnBlur(val, 'street'),
            value: valuesForm.street.value,
            marginTop: 'mt-[11.09px]',
            error: valuesForm.street.error,
            width: 'w-[250px]',
            placeholder: 'Straße',
            disabled: !valuesForm.city.value.length,
          },
          {
            id: 'key2i',
            type: 'text',
            name: 'Hausnummer',
            onChange: (val: string) => handleOnChange(val, 'house'),
            onBlur: (val: string) => handleOnBlur(val, 'house'),
            value: valuesForm.house.value,
            marginTop: 'mt-[11.09px]',
            error: valuesForm.house.error,
            width: '',
            placeholder: 'Nr.',
          },
        ],
      },
    ];
  }, [
    handleOnBlur,
    handleOnChange,
    optionsCity,
    valuesForm.gender.error,
    valuesForm.gender.value,
    valuesForm.house.error,
    valuesForm.house.value,
    valuesForm.city.error,
    valuesForm.city.value,
    valuesForm.name.error,
    valuesForm.name.value,
    valuesForm.phone.error,
    valuesForm.phone.value,
    valuesForm.postalCode.error,
    valuesForm.postalCode.value,
    valuesForm.street.error,
    valuesForm.street.value,
  ]);

  return { formData, isButtonSendDisabled };
};

export default useForm;
