window._czc = window._czc || [];
window._czc.push(["_setAccount", "1273269473"]);
window._czc.push(["_setAutoPageview", false]);

let currPath
export function pushSiteStas(path, search=''){
  path = path.replace(/\/\d+/g, '/__id__')
  if(/all=\w+/.test(search)) path += search
  if(path === currPath) return
  window._czc.push([ "_trackPageview", path, currPath])
  currPath = path
}
