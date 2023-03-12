import { CardBody } from "@chakra-ui/react";
import axios from "axios"
import { MdError } from "react-icons/md";
import { API_NOTIFICATION_MESSAGES, service_URL } from "../Constants/ApiNotification";

const API_URL = 'http://localhost:7500';

const axiosInstance = axios.create({
     baseURL:API_URL,
     timeout:10000,
     headers:{
        "content-Type":"application/json"
     }
 

})


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // if(config.TYPE.params){
    //     config.params = config.TYPE.params
    // }else if(config.TYPE.query){
    //     config.url = config.url + '/' + config.TYPE.query;
    // }
    console.log(config)
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
      console.log(response)
      return processResponse(response)
  }, function (error) {
    return Promise.reject(ProcessError(error));
  });


  const processResponse = (response)=>{
     
    if(response?.status == 200){
         return {isSuccess:true,data:response.data}    
    }else{
          return ({
            isFailure:true,
            status:response?.status,
            code:response?.code,
            msg:response?.data.msg
          }) 
    }
       
  }

  const ProcessError = (error)=>{
      if(error.response){
          // get the response with status of above 200 like a error
          console.log("ERROR IN RESPONSE: ", error);
       return  {
              isError: true,
              msg: error.response.data.msg ? error.response.data.msg :"something went wrong",
              code: error.response.status
          }
      
      }else if(error.request){
     // request gone succssfully the response none
     console.log("ERROR IN REQUEST: ",error);
     return {
         isError: true,
         msg: API_NOTIFICATION_MESSAGES.requestFailure,
         code: ""
     }
      }else{
              // other senario comes like something happens on frontend
              console.log("ERROR IN NETWORK: ", error);
              return {
                  isError: true,
                  msg: API_NOTIFICATION_MESSAGES.networkError,
                  code: ""
              }
      }
  }

  const API = {};

  for (const [key, value] of Object.entries(service_URL)) {
    API[key] = (body) =>
        axiosInstance({
            method: value.method,
            url:   value.url,
            data: body,
            responseType: value.responseType,
          
        
            // onUploadProgress: function(progressEvent) {
            //     if (showUploadProgress) {
            //         let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //         showUploadProgress(percentCompleted);
            //     }
            // },
            // onDownloadProgress: function(progressEvent) {
            //     if (showDownloadProgress) {
            //         let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //         showDownloadProgress(percentCompleted);
            //     }
            // }
        });
}

     

  export{API }

