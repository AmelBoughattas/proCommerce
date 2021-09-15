 import React, { useEffect } from 'react'
 import './ProfilsScreen.css';
  import { useDispatch, useSelector} from 'react-redux';
import CommandList from '../components/CommandList';
import { getMyCommand } from '../redux/actions/commandActions';

const ProfileScreen = () => {

     const auth =useSelector(state => state.auth) 
     
     const commandList = useSelector(state=>state.auth.user.cmdList)
     
     const dispatch = useDispatch()
     
     useEffect(() => {
      dispatch(getMyCommand())
   }, [])


    return (
       <div className="container_profile">
          <h1 className="title_profile">
          liste des Comandes {auth.user && auth.user.firstname}
         </h1>
         <CommandList  commandList={commandList}  className="cmd"/>
       </div> 

        
    )
}

export default ProfileScreen
