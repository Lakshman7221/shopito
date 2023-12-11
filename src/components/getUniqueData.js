export const getUniqueData = (products, property)=>{
  let newVal = products?.map((item)=>{
    return item[property];
  });
  newVal = ["all",...new Set(newVal)]
  return newVal;
}
