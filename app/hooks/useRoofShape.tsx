import React, { useMemo } from 'react';
import GableRoof from '../components/Icons/GableRoof';
import { DataSendType } from '../page';
import FlatRoof from '../components/Icons/FlatRoof';
import PentRoof from '../components/Icons/PentRoof';
import Other from '../components/Icons/Other';

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

const useRoofShape = ({
  nextSlide,
  dataSend,
}: UseRoofShapeType): RoofShapeType => {
  return useMemo(() => {
    return [
      {
        onClick: () => nextSlide('Satteldach', 'roofShape'),
        name: 'Satteldach',
        icon: <GableRoof />,
        isActive: dataSend.roofShape === 'Satteldach',
      },
      {
        onClick: () => nextSlide('Flachdach', 'roofShape'),
        name: 'Flachdach',
        icon: <FlatRoof />,
        isActive: dataSend.roofShape === 'Flachdach',
      },
      {
        onClick: () => nextSlide('Pultdach', 'roofShape'),
        name: 'Pultdach',
        icon: <PentRoof />,
        isActive: dataSend.roofShape === 'Pultdach',
      },
      {
        onClick: () => nextSlide('Anderes', 'roofShape'),
        name: 'Anderes',
        icon: <Other />,
        isActive: dataSend.roofShape === 'Anderes',
      },
    ];
  }, [dataSend.roofShape, nextSlide]);
};

export default useRoofShape;
