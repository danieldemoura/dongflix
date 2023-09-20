export default async function connectAPI(endpoit) {
    try {
        const response = await fetch(`https://650b0c88dfd73d1fab097c9e.mockapi.io/api/v1/${endpoit}`);
        const body = await response.json();
        
        return body
    } catch (error) {
        console.log(error)
    }
}