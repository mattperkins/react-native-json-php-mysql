// resolve, reject
export const getParagraphs = () => {
  return new Promise((resolve) => {
    const data = require('../data/paragraphs.json');
    resolve(data);
  });
};