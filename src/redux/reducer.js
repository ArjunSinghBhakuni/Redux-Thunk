import * as types from './actiontype'

const intialState = {
 todos : [],
 isLoading : false,
 isError : false
}

const reducer = (state = intialState,{type,payload})=>{

switch(type){
 case types.GET_TODO_REQUEST :{

  return {
   ...state , 
   isLoading : true,
   isError :false
  }

 }

 case types.GET_TODO_SUCCESS :{

  return {
   ...state , 
   todos : payload,
   isLoading : false,
   isError :false
  }

 }
 case types.ADD_TODO_ERROR :{

  return {
   ...state , 
   isLoading : false,
   isError :true,
  }

 }
 case types.ADD_TODO_REQUEST :{

  return {
   ...state , 
   isLoading : true,
   isError :false
  }

 }

 case types.ADD_TODO_SUCCESS :{

 

  return {
   ...state , 
  
   isLoading : false,
   isError :false
  }

 }
 case types.ADD_TODO_ERROR :{

  return {
   ...state , 
   isLoading : false,
   isError :true,
  }

 }




 default : {
  return state
 }
}

}

export default reducer;