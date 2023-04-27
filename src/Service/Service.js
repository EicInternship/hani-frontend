import axios from "axios";
// import Cookies from 'js-cookie';

// const jwtToken = response.data.jwtToken;
export const addUser = async(data) => {

    const res =  await axios.post("http://localhost:8080/signup",data);

    return res;
}
export const login=(logindetails)=>{
    return axios.post("http://localhost:8080/authenticate",logindetails)
}
// export const getproduct=()=>{
//     return axios.get("http://localhost:8080/product")
// }
export const getproduct = () => {
    return axios.get('http://localhost:8080/product', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    });
  };
// export const productcard=()=>{
//     return axios.get(`http://localhost:8080/${pimagename}`)
// }
export const addproduct=(data)=>{
    return axios.post("http://localhost:8080/image/add",data,{
        headers: {
            'Content-Type': 'multipart/form-data'
          }
        
    })

}
export const addcategory=(data)=>{
    return axios.post("http://localhost:8080/addcategory",data)
}
export const getdetailsofProduct=(id)=>{
    return axios.get(`http://localhost:8080/productDetails/${id}`)
}