export async function registerUser(data) {
    try {
        const response = await fetch("http://localhost:3001/users", {
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