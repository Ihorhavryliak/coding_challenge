import { ZipCodeJsonType } from './validation';
import zipCodeJson from '../json/zip-codes-germany-cleaned-up.json.json';

const createReadyCityData = (val: string) => {
  const zipCode = zipCodeJson as ZipCodeJsonType[];
  const zipCodeFind = zipCode.find((zip) => {
    if (!zip.postcode) return;
    const postcodeData = zip.postcode.includes(',')
      ? zip.postcode.split(',')
      : [zip.postcode];

    return postcodeData.some((code) => code === val);
  });

  const cityArray =
    zipCodeFind?.places && zipCodeFind?.places?.includes(',')
      ? zipCodeFind.places.split(',')
      : [zipCodeFind?.places];

  const readyCity = !!cityArray.length
    ? cityArray.map((city) => {
        return { id: city as string, value: city as string };
      })
    : [];

  return readyCity;
};

export default createReadyCityData;
