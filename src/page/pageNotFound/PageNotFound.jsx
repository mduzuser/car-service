import { Link } from 'react-router-dom'
import './pageNotFound.scss'
import { Geer } from '../../source/import/import'

function PageNotFound() {
  return (
    <>
       <div className="pageNotFound">

         <p>404 - Page Not Found</p>

         <div className="image">
            <img src={Geer} alt="Opps!" />
         </div>

         <Link to={'/'}>Back to Home page !</Link>
       </div>
    </>
  )
}

export default PageNotFound