export async function registerUser(data) {
    try {
        const response = await fetch("https://650b238ddfd73d1fab09a847.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
    } catch (error) {
        console.log(error);
    }
}