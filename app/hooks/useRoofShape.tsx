import React, { useMemo } from 'react';
import GableRoof from '../components/Icons/GableRoof';
import FlatRoof from '../components/Icons/FlatRoof';
import PentRoof from '../components/Icons/PentRoof';
import Other from '../components/Icons/Other';
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

const useRoofShape = ({
  nextSlide,
  dataSend,
}: UseRoofShapeType): RoofShapeType => {
  return useMemo(() => {
    return [
      {
        onClick: () => nextSlide('Satteldach', 'roofShape', 40),
        name: 'Satteldach',
        icon: <GableRoof />,
        isActive: dataSend.roofShape === 'Satteldach',
      },
      {
        onClick: () => nextSlide('Flachdach', 'roofShape', 40),
        name: 'Flachdach',
        icon: <FlatRoof />,
        isActive: dataSend.roofShape === 'Flachdach',
      },
      {
        onClick: () => nextSlide('Pultdach', 'roofShape', 40),
        name: 'Pultdach',
        icon: <PentRoof />,
        isActive: dataSend.roofShape === 'Pultdach',
      },
      {
        onClick: () => nextSlide('Anderes', 'roofShape', 40),
        name: 'Anderes',
        icon: <Other />,
        isActive: dataSend.roofShape === 'Anderes',
      },
    ];
  }, [dataSend.roofShape, nextSlide]);
};

export default useRoofShape;
