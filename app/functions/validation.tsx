import { FieldType } from '../hooks/useForm';
import zipCodeJson from '../json/zip-codes-germany-cleaned-up.json.json';

export type ZipCodeJsonType = {
  places: string;
  postcode: string;
};

const validation = (val: string, field: FieldType) => {
  switch (field) {
    case 'name':
      const replaceSpaces = val?.replace(/\s+/g, ' ');
      const checkIsSpace = replaceSpaces.includes(' ')
        ? replaceSpaces.split(' ')
        : false;
      if (
        !val.length ||
        !checkIsSpace ||
        !checkIsSpace[0].length ||
        !checkIsSpace[1].length
      ) {
        return 'Diese Postleitzahl ist leider zu kurz';
      }
      return;
    case 'postalCode':
      const zipCode = zipCodeJson as ZipCodeJsonType[];

      const checkZipCode = !zipCode.some((zip) => {
        if (!zip.postcode) return;
        const postcodeData = zip.postcode.includes(',')
          ? zip.postcode.split(',')
          : [zip.postcode];
        return postcodeData.some((code) => code === val);
      });

      if (!val.length) {
        return 'Bitte Postleitzahl angeben';
      } else if (val.length < 5) {
        return 'Diese Postleitzahl ist leider zu kurz';
      } else if (checkZipCode) {
        return 'Bitte Vor- und Nachnamen angeben';
      }
      return;
    case 'phone':
      if (!val.length) {
        return 'Bitte Handynummer angeben';
      }
      if (val.length < 9) {
        return 'Ihre Handynummer muss mindestens 9 Zeichen enthalten';
      }
      return;
    case 'street':
      if (!val.length) {
        return 'Bitte Straße angeben';
      }
      return;
    case 'house':
      if (!val.length) {
        return ' ';
      }
      return;

    default:
      return;
  }
};

export default validation;
