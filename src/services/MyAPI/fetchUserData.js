export async function fetchUserData(data) {
    const response = await fetch(`https://650b238ddfd73d1fab09a847.mockapi.io/api/v1/users?email=${data.email}&password=${data.password}`);
    const responseBody = await response.json();

    const existUser = responseBody.filter(value => {
        return value.email === data.email && value.password === data.password
    })


    return existUser
}