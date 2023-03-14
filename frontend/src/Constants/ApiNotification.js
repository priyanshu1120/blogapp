// Api Notification Massage

export const API_NOTIFICATION_MESSAGES = {
      loading:{
          title:"Loading...",
          message:"Data is being loaded please wait..."
      },
      success:{
        title:"success",
        message:"Data successfully loaded"
    },
    requestFailure:{
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure:{
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError:{
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}


// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }

export const service_URL = {
     userSignup :{url:'/user/signup',method:'post'},
     userLogin :{url:'/user/login',method:'post'},
     uploadFile:{url:'/fileupload',method:'post'},
     createPost:{url:'/blog/create',method:'post'},
     getBlog:{url:"/blog",method:"get",params:true}

}