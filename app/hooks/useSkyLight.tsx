import React, { useMemo } from 'react';
import Other from '../components/Icons/Other';
import HouseFirsVariant from '../components/Icons/HouseFirsVariant';
import House from '../components/Icons/House';
import { DataSendType } from './useProgress';

type UseRoofShapeType = {
  nextSlide: (name: string, field: string, stepNumber: number) => void;
  dataSend: DataSendType;
};

export type RoofShapeType = {
  onClick: () => void;
  name: string;
  icon: JSX.Element;
  isActive: boolean;
}[];

const useSkyLight = ({
  nextSlide,
  dataSend,
}: UseRoofShapeType): RoofShapeType => {
  return useMemo(() => {
    const stepNumber = 45;
    return [
      {
        onClick: () => nextSlide('HouseFirsVariant', 'skyLight', stepNumber),
        name: 'Ja',
        icon: <HouseFirsVariant />,
        isActive: dataSend.skyLight === 'HouseFirsVariant',
      },
      {
        onClick: () => nextSlide('Nein', 'skyLight', stepNumber),
        name: 'Nein',
        icon: <House />,
        isActive: dataSend.skyLight === 'Nein',
      },
      {
        onClick: () => nextSlide('Weiß nicht', 'skyLight', stepNumber),
        name: 'Weiß nicht',
        icon: <Other />,
        isActive: dataSend.skyLight === 'Weiß nicht',
      },
    ];
  }, [dataSend.skyLight, nextSlide]);
};

export default useSkyLight;
