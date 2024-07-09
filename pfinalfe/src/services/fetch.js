
const url =  "http://localhost:3001/"

const getData = async (endpoint, id = "") => {
    try {
      const response = await fetch(url+endpoint+"/"+id, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data  = response.json()
    return data
     
    } catch (e) {
      console.error(e);
    
    } 
};


  const postData = async (endpoint, body) => {  
    try {
      const response = await fetch(url+endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    
      return null;
    } 
}


  
   const putData = async (endpoint, body) => {

    try {
      const response = await fetch(url+endpoint, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
     
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      
      return null;
    } 
}

export { getData, postData, putData };