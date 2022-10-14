import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, useNavigate } from 'react-router-dom';



const Message = () => {
    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/table')

    },3000)
    return ( 
        <div style={{margin:'14rem auto'}}>
            <div style={{textAlign:'center'}}>
                <CheckCircleIcon style={{color:'green',width:'70px',height:'70px'}}/>
                <h2>Thank you for completing the information</h2>
                <Link to='/table'><button type='button' style={{width: '110px',height:'38px',border:'none',backgroundColor:'#9370DB',borderRadius:'3px',color:'#fff',cursor:'pointer'}}>Close</button></Link>
            </div>
        </div>
     );
}
 
export default Message;