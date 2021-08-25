export const isRelationData = (data: any) => {
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
    return true;
  }
  return false;
};

export const pluckColumnTitle = (data: any[]) => {
  const keys = Object.keys(data[0]);
  let out: any = {};
  for (let i = 0; i < keys.length; i++) {
    out[keys[i]] = keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
  }
  return out;
};

export const isRelationList = (data: any) => {
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === "string") {
    return true;
  }
  return false;
};

export const processRelationList = (data: string[]) => {
  const out = [];
  for (let i = 0; i < data.length; i++) {
    out.push({ relations: data[i] });
  }
  return out;
};
