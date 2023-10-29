import { Link } from "react-router-dom"

function error404() {
  return (
       <><div style={{color:'#86A789',top:'50%',left:'28%',position:'absolute',fontSize:"2rem"}}>Error ! You do not have permission to access this page.</div>
    <div style={{color:'#86A789',top:'57%',left:'28%',position:'absolute',fontSize:"1.4rem"}}>Go back to <Link to="/signin">Signin</Link></div></>
   
  )
}

export default error404
