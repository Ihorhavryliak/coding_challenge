import React, { useMemo } from 'react';
import Other from '../components/Icons/Other';
import HouseFirsVariant from '../components/Icons/HouseFirsVariant';
import House from '../components/Icons/House';
import { RoofDataType } from './useProgress';

type UseRoofShapeType = {
  nextSlide: (name: string, field: string, stepNumber: number) => void;
  roofData: RoofDataType;
};

export type RoofShapeType = {
  onClick: () => void;
  name: string;
  icon: JSX.Element;
  isActive: boolean;
}[];

const useSkyLight = ({
  nextSlide,
  roofData,
}: UseRoofShapeType): RoofShapeType => {
  return useMemo(() => {
    const stepNumber = 45;
    return [
      {
        onClick: () => nextSlide('HouseFirsVariant', 'skyLight', stepNumber),
        name: 'Ja',
        icon: <HouseFirsVariant />,
        isActive: roofData.skyLight === 'HouseFirsVariant',
      },
      {
        onClick: () => nextSlide('Nein', 'skyLight', stepNumber),
        name: 'Nein',
        icon: <House />,
        isActive: roofData.skyLight === 'Nein',
      },
      {
        onClick: () => nextSlide('Weiß nicht', 'skyLight', stepNumber),
        name: 'Weiß nicht',
        icon: <Other />,
        isActive: roofData.skyLight === 'Weiß nicht',
      },
    ];
  }, [roofData.skyLight, nextSlide]);
};

export default useSkyLight;
