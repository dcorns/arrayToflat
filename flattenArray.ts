const flattenArray = (ary: Array<any>, f: any) => {
  let result = [];
  ary.forEach(a => {
    if(Array.isArray(a)) result = [...result, ...flattenArray(a, f)];
    else result.push(f(a));
  });
  return result;
}
export default flattenArray;
