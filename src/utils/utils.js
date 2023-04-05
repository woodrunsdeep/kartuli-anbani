/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
const shuffle = ([...arr]) => {
  let i = arr.length;
  let j;

  while (i !== 0) {
    j = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

export { shuffle };
