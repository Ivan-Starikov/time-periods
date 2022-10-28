import { topicsType } from 'types/topics';

export const handleRotation = (arr: topicsType, step: number, direction: boolean) => {

  const positiveStep = Math.abs(step);

  const angleArray = arr.map(({ angle }) => angle);

  for (let i = 0; i < positiveStep; i++) {
    if (step > 0) {
      // @ts-ignore
      angleArray.unshift(angleArray.pop());
    } else {
      // @ts-ignore
			angleArray.push(angleArray.shift());
    };
  };

  const angleObjArray = angleArray.map(angle => ({ angle }));

 const newAngleArray = arr.map((item, i) => Object.assign({}, item, angleObjArray[i]));

  return newAngleArray;
};
