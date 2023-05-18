

import { sessionService } from 'redux-react-session'
import axios from 'axios';
import {toast } from 'react-toastify'
import {Constants} from '../../Constants'
import qs from 'qs'

const FETCH_USER_DETAIL = "FETCH_USER_DETAIL"

const FETCH_USER_PROFILE = "FETCH_USER_PROFILE"
const REFRESH_USER_TOKEN = "REFRESH_USER_TOKEN"
const CHECK_USER_SESSION = "CHECK_USER_SESSION" // check if already has a token in session
const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL"
const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE"
const UPDATE_AUTH_ID = "UPDATE_AUTH_ID"
const UPDATE_LOG_STATUS = "UPDATE_LOG_STATUS"
const UPDATE_LOG_INFO = "UPDATE_LOG_INFO"
const UPDATE_USER_WALLET = "UPDATE_USER_WALLET"
const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"
const UPDATING_USER_AVATAR = "UPDATING_USER_AVATAR"

const BASE = Constants.BASE_URL


export const userLogout = (_history)=>{
    return (dispatch)=>{
        // dispatch(toggle_loader_on())
        sessionService.deleteUser().then(e=>{
            sessionService.deleteSession().then(e=>{
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err)
        }).finally(e=>{
            window.location.href = "/"
        });
    }
}
export const userUpdateDetail =  (userid=null)=>{
    return dispatch=>{
    sessionService.loadSession().then((session)=>{
        if(!session) return false
        axios.get(Constants.endpoints.PROFILE+ session.id)
        .then(data=>{
            if (!data) throw Error("401")
            sessionService.saveUser({ ...data.data }).then(e=>{
                console.log(data.data);
            }).catch(err=>{console.log(err)})
            
            
        }).catch(err=>{
            console.log("user update detail",401);
        }).finally(e=>{
            setTimeout(() => {
                // if(_history)
                // dispatch(toggle_loader_off())
            }, 800);
        })
    }).catch(err=>console.log(err))       
    }
}
export const userLogin = (credentias, tailing, setIsSubmitting)=>{    
    return dispatch=>{
        try {            
             axios.post(Constants.endpoints["LOGIN" + tailing], credentias)
            .then(response=>{
                // dispatch(toggle_loader_on())
                const {data} = response
                const {token, id} = data;
                if(token!=="No Token")
                    toast.success("ورود موفق", {
                          
                            onClose: ()=>{
                                sessionService
                                .saveSession({ token , id}).then(e=>{
                                    dispatch(userUpdateDetail(id, token))
                                }).catch(err=>{
                                    console.log(err);
                                })
                            }
                        
                        })
                else{
                    toast.error("کاربر یافت نشد")
                }
                
            }).catch(err=>{
                if (err.non_field_errors)
                    toast.error(err.non_field_errors[0])
                else
                    toast.error("کد وارد شده صحیح نمی باشد.")
            }).finally(f=>{
                setIsSubmitting(false)
            })
    
        } catch (error) {
                        console.log("ff");

            console.log(error);
            
        }
       }
}
export const userForget = ({mobile,code},_history ,setIsSubmitting)=>{
    return dispatch=>{
        const d = qs.stringify({
            mobile, code
        })
        axios.post(BASE+"/api/v2/token/password/verify/", d,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response=>{
                const {data} = response
                if(data.error === 1){
                    toast.error(data.message)
                }else{
                    toast.success(data.message, {
                        onClose: ()=>{
                            _history.push("/auth/login")
                        }
                    })
                }
            }).catch(err=>{
                toast.error("کد وارد شده صحیح نمی باشد.")
            }).finally(e=>{
                setIsSubmitting(false);
            })
    }
}
export const userSignup = (credentias)=>{
    return dispatch=>{
        return new Promise((resolve, reject)=>{
            axios.post(Constants.endpoints.REGISTER, credentias, {
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(response=>{
                if(response.data === ""){
                    return resolve({status: 400, message: "ایمیل در سیستم ثبت شده است. یا اطلاعات ناقص است"})
                }else{
                    return resolve({status: 200, message: "ثبت نام با موفقیت انجام شد."})
                }
            }).catch(err=>{
                return resolve({status: 400, message: "خطا", data: err})  
            })
        })
    }
}
export const userUpdateName =  (name)=>{
    return dispatch=>{
        sessionService.loadSession().then(session=>{
            axios.post(BASE + "/api/v2/account/verify/", {
                name
            },
            {headers:{
                Authorization: "Bearer " + session.token
            }}
            ).then(data=>{
                toast.success(data.data.message);  
            }).catch(err=>{
                console.log(err);
                toast.error("با خطا مواجه شد.")
            })
        }).catch(err=>{console.log(err);
        })
    }
}
export const userUpdateImage =  (data, toastOpt=0)=>{
    return dispatch=>{
        return new Promise((resolve, reject)=>{
            axios.post(BASE+"/api/v2/account/document/", data,
            ).then(response=>{
                const {data} = response 
                
                if (+data.error === 1){
                    return resolve({status:400, message:data.message})}
                else{
                    return resolve({status:200, message:data.message}) 
                }
            }).catch(err=>{
                return resolve({status:400,message: "با خطا مواجه شد."})
            })
        })
    }
}
export const userUpdateAvatar =  (image, toast=0, toastOpt=0)=>{
   const data = new  FormData()
   data.append('file', image);
    
    return dispatch=>{

        return new Promise((resolve, reject)=>{
            dispatch(uploading_avatar(true))
            axios.post(BASE+"/api/v2/account/avatar/", data,{
                header:{
                    "Content-Type": "application/form-data"
                }
            }
            ).then(data=>{
                if(data.data.error === 1){
                    if(toast) toast.error(data.data.message, toastOpt); 
                }else{
                    if(toast) toast.success(data.data.message, toastOpt); 
                    dispatch(userUpdateDetail())
                }
                return resolve(200) 
            }).catch(err=>{
                console.log(err);
                if(toast) toast.error("با خطا مواجه شد.")
                return reject(400)
            }).finally(f=>{
                dispatch(uploading_avatar(false))
            })
        })
    }
}

export const userUpdatePersonal = (info)=>{
    return dispatch=>{
        
       return new Promise((resolve, reject)=>{
            sessionService.loadSession().then(session=>{
                axios.put(Constants.endpoints.EDIT_PROFILE + session.id, {
                    ...info
                }).then(response=>{
                    const {data} = response;
                    return resolve("sent")
                }).catch(error=>{
                    return resolve("failed")
                })
            }).catch(e=>console.log(e))
        }) 
    }
}

export const uploading_avatar = (is_updating)=>{
    return {
        type: UPDATING_USER_AVATAR,
        payload: is_updating
    }
}
export const udpate_user_detail = (user)=>{
    return {
        type: UPDATE_USER_DETAIL,
        payload: user
    }
}
export const udpate_user_profile = (profile)=>{
    return {
        type: UPDATE_USER_PROFILE,
        payload: profile
    }
}

export const udpate_user_wallet = (wallet)=>{
    return {
        type: UPDATE_USER_WALLET,
        payload: wallet
    }
}
export const update_auth_id = (authID)=>{
    return {
        type: UPDATE_AUTH_ID,
        payload: authID
    }
}
export const update_log_status = (status)=>{
    return {
        type: UPDATE_LOG_STATUS,
        payload: status
    }
}
export const update_log_info = (access, refresh)=>{
    return {
        type: UPDATE_LOG_INFO,
        payload: {access, refresh}
    }
}
export const logout = e=>{
    return {
        type: USER_LOGOUT
    }
}

