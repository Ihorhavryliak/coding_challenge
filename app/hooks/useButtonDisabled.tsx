import { useMemo } from 'react';
import { valuesFormType } from './useForm';

type UseButtonDisabledType = {
  valuesForm: valuesFormType;
};
const useButtonDisabled = ({ valuesForm }: UseButtonDisabledType) => {
  const isButtonSendDisabled = useMemo(() => {
    let isButtonDisabled = false;
    for (const key in valuesForm) {
      if (key === 'gender') {
      } else if (!!valuesForm[key].error.length || !valuesForm[key].value) {
        isButtonDisabled = true;
        break;
      }
    }
    return isButtonDisabled;
  }, [valuesForm]);
  return isButtonSendDisabled;
};

export default useButtonDisabled;
