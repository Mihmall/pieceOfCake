/**
 * Хук для замены отсутствующей картинки на лого
 * @param {object}image - путь к картинке
 * @returns {object} - старый путь либо путь к лого
 */

//   альтернативная картинка (Logo)
export const imgOr = ({ image }) => {
  if (image === "" || image === undefined || image === null) {
    return "/image/b9fv_cb9z_221114.svg";
  }
  return image;
};
