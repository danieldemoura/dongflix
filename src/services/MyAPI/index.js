export default async function connectAPI(endpoit) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoit}`);
        const body = await response.json();
        
        return body
    } catch (error) {
        console.log(error)
    }
}