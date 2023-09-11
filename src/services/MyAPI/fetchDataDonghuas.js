export async function fetchDataDonghuas(data) {
    const response = await fetch(`http://localhost:3001/donghuas?status="em estreia"`);
    const donghuas = await response.json();

    return donghuas
}