export async function updateDataDonghuas(endpoint, init) {
   try {
    fetch(`https://650b0c88dfd73d1fab097c9e.mockapi.io/api/v1/${endpoint}`, init);

   } catch (error) {
    console.log(error)
   }
}