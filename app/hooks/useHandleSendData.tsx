import React from 'react';
import { valuesFormType } from './useForm';
import { DataSendType } from './useProgress';
type UseSendDataFetchType = {
  valuesForm: valuesFormType;
  dataSend: DataSendType;
  setIsSuccessSendData: (val: boolean) => void;
};
const useHandleSendData = ({
  valuesForm,
  dataSend,
  setIsSuccessSendData,
}: UseSendDataFetchType) => {
  const handleSendData = async () => {
    try {
      const url = 'https://65590262e93ca47020a9fce8.mockapi.io/insert';
      const data = {
        dachform: dataSend.roofShape,
        dachfenster: dataSend.skyLight,
        anrede: valuesForm.gender.value,
        name: valuesForm.name.value,
        telefonnummer: valuesForm.phone.value,
        postleitzahl: valuesForm.postalCode.value,
        stadt: valuesForm.city.value,
        strasse: valuesForm.street.value,
        hausnummer: valuesForm.house.value,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response?.status === 201) {
        setIsSuccessSendData(true);
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return handleSendData;
};

export default useHandleSendData;
