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
    const stepNumber = 40;
    return [
      {
        onClick: () => nextSlide('Satteldach', 'roofShape', stepNumber),
        name: 'Satteldach',
        icon: <GableRoof />,
        isActive: dataSend.roofShape === 'Satteldach',
      },
      {
        onClick: () => nextSlide('Flachdach', 'roofShape', stepNumber),
        name: 'Flachdach',
        icon: <FlatRoof />,
        isActive: dataSend.roofShape === 'Flachdach',
      },
      {
        onClick: () => nextSlide('Pultdach', 'roofShape', stepNumber),
        name: 'Pultdach',
        icon: <PentRoof />,
        isActive: dataSend.roofShape === 'Pultdach',
      },
      {
        onClick: () => nextSlide('Anderes', 'roofShape', stepNumber),
        name: 'Anderes',
        icon: <Other />,
        isActive: dataSend.roofShape === 'Anderes',
      },
    ];
  }, [dataSend.roofShape, nextSlide]);
};

export default useRoofShape;
