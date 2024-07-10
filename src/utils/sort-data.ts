export function sortData(data: any, order = 'asc', property: string) {
  return data.sort((a: any, b: any) => {
    if (order === 'asc') {
      if (a[property] > b[property]) {
        return 1;
      } else if (a[property] < b[property]) {
        return -1;
      } else {
        return 0;
      }
    } else if (order === 'desc') {
      if (a[property] < b[property]) {
        return 1;
      } else if (a[property] > b[property]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      throw new Error('Order must be either "asc" or "desc"');
    }
  });
};