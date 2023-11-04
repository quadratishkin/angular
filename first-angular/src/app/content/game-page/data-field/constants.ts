export enum Turn {
  MY,
  OPPONENT,
}

export const idHandPictures: abc = {
  0: '../../../../assets/Photoes/hearth.png',
};

export const idMoneyCollectorPictures: abc = {
  0: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export const idMyFieldPictures: abc = {
  0: '../../../../assets/Photoes/FieldPictures/blueSquare.jpg',
};

export const idCommonFieldPictures: abc = {
  0: '../../../../assets/Photoes/FieldPictures/whiteSquare.jpg',
};

export const idOppsFieldPictures: abc = {
  0: '../../../../assets/Photoes/FieldPictures/redSquare.jpg',
};

interface abc {
  [key: number]: string;
}
