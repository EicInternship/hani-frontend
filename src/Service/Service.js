import axios from "axios";

export const addUser = async(data) => {

    const res =  await axios.post("http://localhost:8080/signup",data);

    return res;
}
export const login=(logindetails)=>{
    return axios.post("http://localhost:8080/login",logindetails)
}
export const getproduct=()=>{
    return axios.get("http://localhost:8080/product")
}
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