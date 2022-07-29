export const calcGridNbrCols = (width: number): number => {
  let nbrCols: number = 1;
  if (width < 405) nbrCols = 1;
  if (width >= 405 && width < 530) nbrCols = 2;
  if (width >= 530 && width < 730) nbrCols = 3;
  if (width >= 730 && width < 1060) nbrCols = 4;
  if (width >= 1060 && width < 1260) nbrCols = 5;
  if (width >= 1260 && width < 1447) nbrCols = 6;
  if (width >= 1447 && width < 1673) nbrCols = 7;
  if (width >= 1673 && width < 1874) nbrCols = 8;
  if (width >= 1874) nbrCols = 9;

  return nbrCols;
};
