// resolve, reject
export const getPages = () =>
  new Promise(resolve => {
    const data = require('../data/pages-data.json');
    resolve(data);
  });


export const getParagraphs = (foo) =>
  new Promise(resolve => {
    const data = require('../data/paragraphs-data.json');
    const filterData = data.filter(bar => bar.id === foo)
    resolve(filterData);
  });