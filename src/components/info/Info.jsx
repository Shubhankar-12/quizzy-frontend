import './Info.css'
import { BsHeartFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { FaSmileBeam } from "react-icons/fa";



const Info = () => {
    return (
        <div >
            <h1 className='info-h1'>Why Quizzy?</h1>
            <div className='info-container'>
                <div className="info">
                    <div className="info-icon">
                        <BsHeartFill />
                    </div>
                    <h2 className="info-head">
                        We Care About You!
                    </h2>
                    <p className="info-p">
                        We care about your well-being. We want to get to know you on both a professional and personal level to create an atmosphere that will lead to a long-term relationship of exceptional service.
                    </p>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <GoGraph />
                    </div>
                    <h2 className="info-head">We're Here to Help You Succeed</h2>
                    <p className="info-p">
                        Our team of experts come from all different backgrounds. It is without a doubt, that our team of professionals with different levels of skills and experience can help solve your biggest problems!
                    </p>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <FaSmileBeam />
                    </div>
                    <h2 className="info-head">We're Here to Help You Succeed</h2>
                    <p className="info-p">
                        100% Satisfaction is our goal, where our services and solutions have you wanting us back month after month.
                        Our process makes sure you will be satisfied.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Info