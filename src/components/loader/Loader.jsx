import { LoaderSvg } from '../../source/import/import'
import './loader.scss'

function Loader() {
  return (
    <div className="loader">
        <img src={LoaderSvg} alt="Loader" />
    </div>
  )
}

export default Loader