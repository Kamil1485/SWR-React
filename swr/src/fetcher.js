//1.yöntem
 export function fetcher2(url) {
 return fetch(url).then(response => response.json());
}

//2.yöntem
const fetcher3 = url => fetch(url).then(response => response.json());
export { fetcher3};