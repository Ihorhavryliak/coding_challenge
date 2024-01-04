import React, { useMemo } from 'react';
import GableRoof from '../components/Icons/GableRoof';
import FlatRoof from '../components/Icons/FlatRoof';
import PentRoof from '../components/Icons/PentRoof';
import Other from '../components/Icons/Other';
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

const useRoofShape = ({
  nextSlide,
  roofData,
}: UseRoofShapeType): RoofShapeType => {
  return useMemo(() => {
    const stepNumber = 40;
    return [
      {
        onClick: () => nextSlide('Satteldach', 'roofShape', stepNumber),
        name: 'Satteldach',
        icon: <GableRoof />,
        isActive: roofData.roofShape === 'Satteldach',
      },
      {
        onClick: () => nextSlide('Flachdach', 'roofShape', stepNumber),
        name: 'Flachdach',
        icon: <FlatRoof />,
        isActive: roofData.roofShape === 'Flachdach',
      },
      {
        onClick: () => nextSlide('Pultdach', 'roofShape', stepNumber),
        name: 'Pultdach',
        icon: <PentRoof />,
        isActive: roofData.roofShape === 'Pultdach',
      },
      {
        onClick: () => nextSlide('Anderes', 'roofShape', stepNumber),
        name: 'Anderes',
        icon: <Other />,
        isActive: roofData.roofShape === 'Anderes',
      },
    ];
  }, [roofData.roofShape, nextSlide]);
};

export default useRoofShape;
