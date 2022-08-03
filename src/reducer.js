import { CHIUDI_MODAL,APRI_MODAL} from "./action";
const reducer=(state,action)=>{
    
    if(action.type ===APRI_MODAL){
        console.log(action.dati,' ',action.id);
      return {
        ...state,
        modalContent:action.dati[action.id].email,
        isModalOpen:true
      };
    }
    if(action.type===CHIUDI_MODAL){
        return{
            ...state,
            
            isModalOpen:false
        }
    }

   

    return state;
  };

  export default reducer;