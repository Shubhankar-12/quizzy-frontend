import './userSummary.css'


const UserSummary = ({ stats, userInfo }) => {

    const proficiencyLevel = Math.floor((stats?.proficiency / 100) * 5)
    return (
        <div className='summary-container'>
            <div className="greeting">
                <h1>Welcome Back,<span className='user-name'>{userInfo ? userInfo.name : "User Name"}</span></h1>
                <p>Welcome to our online learning platform! We're excited to have you here and help you achieve your goals.
                    <br /> Good Luck with your learning.</p>
            </div>
            <div className="summary-details">
                <div className="proficiency">
                    <h2 className='summary-head'>Proficiency Level:</h2>
                    <h3 className='card-h3'><span>{proficiencyLevel}</span>/5</h3>
                </div>
                <div className="language">
                    <h2 className='summary-head'>Preferred Language:</h2>
                    <h3 className='card-h3'><span>English</span></h3>
                </div>
                <div className="points">
                    <h2 className='summary-head'>Total Points:</h2>
                    <h3 className='card-h3'><span>{stats?.currentPoints}</span>/{stats?.totalPoints}</h3>
                </div>
                <div className="ranking">
                    <h2 className='summary-head'>Leaderboard Ranking:</h2>
                    <h3 className='card-h3'><span>3</span>/5</h3>
                </div>
            </div>
        </div>
    )
}

export default UserSummary