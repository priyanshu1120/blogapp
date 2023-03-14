

export const getAccessToken  = ()=>{
       return sessionStorage.getItem("accesstoken")

}

export function reduceString(str) {
       if (str.length > 200) {
         return str.slice(0, 200) + '...more';
       }
       return str;
     }


     export const getType = (value, body) => {
       if (value.params) {
           return { params: body }
       } else if (value.query) {
           if (typeof body === 'object') {
               return { query: body._id }
           } else {
               return { query: body }
           }
       }
       return {};
   }
       