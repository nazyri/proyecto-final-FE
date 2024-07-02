//Get
const apiUrl = "http://localhost:3001/users"
const getData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        const datos = response.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
  };
  export default getData
 //Post
const Post = async (obj) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
}
export {Post}




