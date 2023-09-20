export default async function fetchData(endpoit) {
    try {
        const response = await fetch(`https://650b238ddfd73d1fab09a847.mockapi.io/api/v1/${endpoit}`);
        const body = await response.json();
        
        return body
    } catch (error) {
        console.log(error)
    }
}
