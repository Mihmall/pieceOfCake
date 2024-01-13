/**
 * Хук для замены отсутствующей картинки на лого
 * @param {object}src - путь к картинке
 * @returns {object} - старый путь либо путь к лого
 */

//   альтернативная картинка (Logo)
export const imgOr = ({ src }) => {
  if (src === "" || src === undefined || src === null) {
    return "/image/b9fv_cb9z_221114.svg";
  }
  return src;
};
