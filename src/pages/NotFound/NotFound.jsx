import {useEffect}  from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {
 const navigate = useNavigate ()
 useEffect (() => {
        setTimeout(() => {
            navigate ("/")
        },2000)
 }, [navigate])

    return (
    <div>
        <h1>Error Page</h1>
        <p>Usted será redirigido a la Home Page en 2 segundos... </p>
    </div>
  )
}

export default NotFound