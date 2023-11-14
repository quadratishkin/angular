export enum Turn {
  MY,
  OPPONENT,
}

export const idHandPictures: DynamicObject<string> = {
  1: '../../../../assets/Photoes/hearth.png',
  2: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export const idMoneyCollectorPictures: DynamicObject<string> = {
  0: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
  1: '../../../../assets/Photoes/hearth.png',
  2: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export const idMyFieldPictures: DynamicObject<string> = {
  0: '../../../../assets/Photoes/FieldPictures/blueSquare.jpg',
  1: '../../../../assets/Photoes/hearth.png',
  2: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export const idCommonFieldPictures: DynamicObject<string> = {
  0: '../../../../assets/Photoes/FieldPictures/whiteSquare.jpg',
  1: '../../../../assets/Photoes/hearth.png',
  2: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export const idOppsFieldPictures: DynamicObject<string> = {
  0: '../../../../assets/Photoes/FieldPictures/redSquare.jpg',
  1: '../../../../assets/Photoes/hearth.png',
  2: '../../../../assets/Photoes/FieldPictures/yellowCircle.png',
};

export interface DynamicObject<T> {
  [key: string]: T;
}
