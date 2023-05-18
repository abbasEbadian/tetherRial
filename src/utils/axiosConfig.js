import axios from 'axios'
import { sessionService  } from 'redux-react-session';
export const configure = ()=>{
    axios.interceptors.request.use(
        async config => {
            try{
                const session = await sessionService.loadSession()
                if (config.url&&config.url.indexOf("login") === -1&&
                  config.url&&config.url.indexOf("login2") === -1
                 && session && session.token ) {
                   console.log("CAME");
                    config.headers['Authorization'] = 'Bearer ' + session.token;
                }
            }catch(err){
                console.log(err);
                return config
            }
            
            return config
            
        },
        error => {
            console.log(error);
            
            Promise.reject(error) 
        }
      );
      axios.interceptors.response.use((response) => {
        return response
      }, 
      async (error)=> {
         if(error.response && error.response.status===400){         
             return Promise.reject(error)
         }     
         
      
        if (error.response && error.response.status === 401 ) {
            
          sessionService.deleteSession().then(e=>{
          })
           
            return Promise.reject(error)
        }
      
        
      })
}