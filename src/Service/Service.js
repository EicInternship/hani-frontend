import axios from "axios";
// import Cookies from 'js-cookie';

// const jwtToken = response.data.jwtToken;
const token = `Bearer ${localStorage.getItem('jwt')}`
export const addUser = async(data) => {

    const res =  await axios.post("http://localhost:9020/signup",data);

    return res;
}
export const loginUSER=(logindetails)=>{
    return axios.post("http://localhost:9020/authenticate",logindetails)
}
// export const getproduct=()=>{
//     return axios.get("http://localhost:8080/product")
// }
export const getproduct = () => {
     const token = `Bearer ${localStorage.getItem('jwt')}`

    return axios.get('http://localhost:9020/product', {
      headers: {
         Authorization: token
      }
    });
  };
  export const getproductbypagination = (page) => {
    const token = `Bearer ${localStorage.getItem('jwt')}`

   return axios.get('http://localhost:9020/productbypage', {
     headers: {
        Authorization: token
     }, 
     params: {
        pagenumber: page,
        pagesize: 4
      }
   });
 };

// export const productcard=()=>{
//     return axios.get(`http://localhost:8080/${pimagename}`)
// }
export const addproduct=(data)=>{
    const token = `Bearer ${localStorage.getItem('jwt')}`
    return axios.post("http://localhost:9020/image/add",data,{
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          }
        
    })

}
export const addcategory=(data)=>{
    const token = `Bearer ${localStorage.getItem('jwt')}`
    return axios.post("http://localhost:9020/addcategory",data,{
        headers: {
            Authorization: token
         }
    })
}
export const addAddress=(data)=>{
    const token = `Bearer ${localStorage.getItem('jwt')}`
    return axios.post("http://localhost:9020/addaddress",data,{
        headers: {
            Authorization: token
         }
    })
}
export const payment =(data)=>{
    const token = `Bearer ${localStorage.getItem('jwt')}`
    return axios.post("http://localhost:9020/createorder",data,{
        headers: {
            'Content-Type':'application/json',
            Authorization: token
         }
    })
}

export const getdetailsofProduct=(id)=>{
    const token = `Bearer ${localStorage.getItem('jwt')}`
    
    return axios.get(`http://localhost:9020/productDetails/${id}`,{
        headers: {
            Authorization: token
         }
    })
}
export const getloginseller=(logindetails)=>{
 return axios.post("http://localhost:9020/checkseller",logindetails)
}
export const getcategory = () => {
    const token = `Bearer ${localStorage.getItem('jwt')}`
    return axios.get('http://localhost:9020/category', {
      headers: {
         Authorization: token
      }
    });
  };

//   export const getUser =() => {
//       return axios.get("http://localhost:8080/payment/viewuser");
//     }
  export const  getEmail= () => {
    const token = `Bearer ${localStorage.getItem('jwt')}`
        return axios.get("http://localhost:9020/totaluser",{
            headers: {
                Authorization: token
             }
        });
      }
      export const getUser =() => {
        const token = `Bearer ${localStorage.getItem('jwt')}`
        return axios.get("http://localhost:9020/viewuser",{
            headers: {
               Authorization: token
            }
          });
      }
      export const updatecustomer=(logindetails)=>{
        const token = `Bearer ${localStorage.getItem('jwt')}`
        return axios.post("http://localhost:9020/updateuser",logindetails,{
            headers: {
                Authorization: token
             }  
        })
    }
    export const deleteUSER =(Id)=>{
        const token = `Bearer ${localStorage.getItem('jwt')}`
        return axios.get(`http://localhost:9020/deleteuser?id=${Id}`,{
            headers: {
                Authorization: token
             }  
        })
    }
    export const userDetails =(Id)=>{
        const token = `Bearer ${localStorage.getItem('jwt')}`
        return axios.get(`http://localhost:9020/customerdetail?id=${Id}`,{
            headers: {
                Authorization: token
             }  
        })
    }
    export const addorder=(data)=>{
        return axios.post("http://localhost:9020/order",data,{
            headers: {
                Authorization: token,
              }
            
        })
    
    }
    