const initialLoginState = {
    isLoading: false,
    userToken: null,
    user:{},
    feed:[],
    emailError:'',
    updateFeed:[],
    isFontLoaded:false,
    openModal:false,
    cmtPostId:'',
    appError:null,
    content:'',
    image:null,
    uploading:false,
    updated:false,
    SignupError:'',
  };
//reducer
export const userReducer=(state=initialLoginState,action)=>{
    switch(action.type){
        case 'DO_LOGIN' :
            if(action.token=='logged'){
            return{
                ...state,
                user:action.payload,
                isLoading:false,
                userToken:action.token
            }
        }else{
            return{
                ...state,
                isLoading:false,
                userToken:action.token
            } 
        }
        case 'DO_SIGNUP_ERROR':
            return{
                ...state,
                SignupError:null,
                emailError:action.payload,
            }
        case 'DO_LOADING':
            return{
                ...state,
                isLoading:true,
            }  
        case 'FETCH_FEED' :
            return{
                ...state,
                feed:action.payload,
            }
        case 'DELETE_FEED' :
            return{
                ...state,
                feed:state.feed.filter((item) => item.id !== action.key),
                isLoading:false
            }   
        case 'LIKE_FEED': {
            const index = state.feed.findIndex(todo => todo.id ==action.key); //finding index of the item
            const newArray = [...state.feed]; //making a new array
            newArray[index].userLikedStatus = !state.feed[index].userLikedStatus//changing value in the new array
           
            console.log("newArray",newArray[index])
            return { 
            ...state, //copying the orignal state
            feed: newArray, //reassingning feed to new array
            isLoading:false
        }
        }
        case 'OPEN_MODAL' :
            console.log("ddddd",action.key)
            return{
                ...state,
                openModal:!action.key,
                cmtPostId:action.postId
            }
        case 'COMMENT_FEED' :{
            const index = state.feed.findIndex(todo => todo.id ==action.key); //finding index of the item
            const newArray = [...state.feed]; //making a new array //payload.commentsDetails //feedComments
            newArray[index].feedComments=[action.payload,...state.feed[index].feedComments]
            console.log("newss", newArray[index].feedComments)
            return{
                ...state,
                openModal:false,
                feed: newArray,
            } 
        }
        case 'SET_FEED' :{
            const newArray = [action.payload,...state.feed]; //making a new array //payload.commentsDetails //feedComments
            return{
                ...state,
                updated:false,
                isLoading:false,
                feed: newArray,
            } 
        }
        case 'SET_UPLOADING':
            return{
                ...state,
                uploading:!state.uploading,
            }
        case 'SET_IMAGE_UPLOAD':
            return{
                ...state,
                updated:!state.updated
            }
        case 'SET_CONTENT':
           
            return{
                ...state,
                content:action.value
            }
        case 'SET_IMAGE':
                return{
                    ...state,
                    image:action.value
                }
        case 'SET_SINGLE_POST':
            console.log("action.value",action.value)
            return{
                ...state,
                singlePost:action.value
            }
        case 'ON_ERROR' :
            return{
                ...state,
                appError:action.error
            }

        
        case 'SIGNUP_ERROR' :
            return{
                ...state,
                SignupError:action.error
            }
        
        case 'LOGOUT': 
        return {
            ...state,
            isLoading:false,
            userToken: null,
        };
        default: return state
    }
}