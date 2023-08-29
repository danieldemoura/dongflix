export async function fetchData(data) {
    const response = await fetch(`http://localhost:3001/users?email=${data.email}&password=${data.password}`);
    const responseBody = await response.json();

    const existUser = responseBody.filter(value => {
        return value.email === data.email && value.password === data.password
    })

    const statusCode = existUser.length > 0 ? 200 : 404;

    return statusCode
}