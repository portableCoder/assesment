export default function () {
  const url = `https://source.unsplash.com/random/?Person&${generateUID()}`;
  return url;
}
function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  // this function generates a uid required to pass into the unsplash api otherwise all images are returned as same
  let firstPart: string | number = (Math.random() * 46656) | 0;
  let secondPart: string | number = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}
