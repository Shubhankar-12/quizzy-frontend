import './hero.css'
import heroBanner from '../../assets/hero-banner.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Hero = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleHeroSignupBtn = () => {
        navigate('/signup');
    }
    const handleTestBtn = () => {
        navigate('/quiz');
    }
    return (
        <div className='hero-section'>
            <div className="hero-img">
                <img src={heroBanner} className='banner' alt="" />
            </div>
            <div className="hero-data">
                <h1 className='hero-heading'>Embark on a journey to learn new languages in a <span className='hero-hlt'>fun way</span></h1>
                <p className='hero-para'>Quizzes help students learn and engage with subjects in a fun and challenging way, expanding general knowledge and encouraging critical thinking.</p>
                {userInfo
                    ? (<button className='hero-btn' onClick={handleTestBtn}>Try quizzy now!</button>)
                    : (<button className='hero-btn' onClick={handleHeroSignupBtn}>Sign up for free!</button>)
                }
            </div>
        </div>
    )
}

export default Hero