import axios from "axios";

const axiosConfig= axios.create({
//   baseUrl: "https://money-manager-backend-7xc8.onrender.com/api/v1.0",
    baseUrl:"http://localhost:8080/api/v1.0",
    
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// list of endpoints that do not required authorization header
const excludeEndpoints = ["/login","/register","/status","/activate","/health"];


//request Interceptor
axiosConfig.interceptors.request.use(
    (config) => {
        const shouldSkipToken = excludeEndPoints.some((endPoint) =>{
           config.url?.includes(endPoint)
    });

        if (!shouldSkipToken) {
            const accessToken = localStorage.getItem("token");
            if (accessToken) {
                config.headers["Authorization"] = `${accessToken}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);


//response interceptor
axiosConfig.interceptors.response.use((response)=>{
    return response;
},(error) => {
    if(error.response){
        if(error.response.status===401){
            window.location.href="/login";
        } else if(error.response.status===500){
            console.error("server error.Please try again later")
        } 
    } else if(error.code=== "ECONNABORTED"){
        console.error("Request timeout. Please try again.")
    }
})