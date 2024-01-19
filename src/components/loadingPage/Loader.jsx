import { GridLoader } from 'react-spinners'
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader-container'>
            <GridLoader size={15} margin={5} color='#012ab7' />
        </div>
    )
}

export default Loader