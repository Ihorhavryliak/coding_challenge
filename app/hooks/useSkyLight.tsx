import React, { useMemo } from 'react';
import GableRoof from '../components/Icons/GableRoof';
import { DataSendType } from '../page';
import FlatRoof from '../components/Icons/FlatRoof';
import PentRoof from '../components/Icons/PentRoof';
import Other from '../components/Icons/Other';
import HouseFirsVariant from '../components/Icons/HouseFirsVariant';
import House from '../components/Icons/House';

type UseRoofShapeType = {
  nextSlide: (name: string, field: string) => void;
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
    return [
      {
        onClick: () => nextSlide('HouseFirsVariant', 'skyLight'),
        name: 'Ja',
        icon: <HouseFirsVariant />,
        isActive: dataSend.skyLight === 'HouseFirsVariant',
      },
      {
        onClick: () => nextSlide('Nein', 'skyLight'),
        name: 'Nein',
        icon: <House />,
        isActive: dataSend.skyLight === 'Nein',
      },
      {
        onClick: () => nextSlide('Weiß nicht', 'skyLight'),
        name: 'Weiß nicht',
        icon: <Other />,
        isActive: dataSend.skyLight === 'Weiß nicht',
      },
    ];
  }, [dataSend.skyLight, nextSlide]);
};

export default useSkyLight;
