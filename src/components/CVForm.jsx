import propTypes from 'prop-types';

const CVForm = ({ cvData, setCvData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, [name]: value });
    }

    function loadtest() {
        setCvData({ ...cvData, name: "John", 
                               name2: "Wick",
                               headline: "jobless",
                               emailAddress: "user@gmail.com",
                               phoneNumber: "+0123456789",
                               website: "website.com",
                               skills: "Microsoft Office (Word, Excel, PowerPoint), Basic Programming (e.g., Python, JavaScript, HTML/CSS), Data Entry, Email Management (Outlook, Gmail), Web Browsing and Research, Typing Speed (e.g., 50+ WPM), Active Listening, Clear Written Communication, Verbal Presentation Skills, Basic Public Speaking, Interpersonal Skills, Conflict Resolution, Team Player, Collaboration with Cross-Functional Teams, Basic Leadership Skills, Ability to Work Under Supervision, Time Management in Team Projects"
        })
    }


    return(
        <div className='cv__form'>
            <h2>Personal Information</h2>
            {/* first input case*/}
            <div className='personal__1'>
                <div className="photo" />
                <form>
                    <label className='personal__first__label'>
                        <div className="personal__first">
                            <div className="input__container">
                                {/* <h3>Given name</h3> */}
                                <input
                                    className='small'
                                    name="name"
                                    placeholder='Given name'
                                    value={cvData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input__container">
                                {/* <h3>Family name</h3> */}
                                <input 
                                    className='small'
                                    name="name2"
                                    placeholder='Family name'
                                    value={cvData.name2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                            <div className='personal__second'>
                                <div className="input__container">
                                {/* <h3>Family name</h3> */}
                                <input 
                                    className="big"
                                    name="headline"
                                    placeholder='headline'
                                    value={cvData.headline}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </label>
                </form>
            </div>
            {/* second input case */}
            <div className='personal__2'>
                <form>
                    <label>
                        <div className='personal__third'>
                            <div className="input__container third">
                                {/* <h3>Family name</h3> */}
                                <input 
                                    className="personal__third__input"
                                    name="emailAddress"
                                    placeholder='Email Address'
                                    value={cvData.emailAddress}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input__container">
                                {/* <h3>Family name</h3> */}
                                <input 
                                    className="personal__third__input"
                                    name="phoneNumber"
                                    placeholder='Phone Number'
                                    value={cvData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="personal__fourth">
                            <div className="input__container">
                                {/* <h3>Family name</h3> */}
                                <input 
                                    className="personal__fourth__input"
                                    name="website"
                                    placeholder='website'
                                    value={cvData.website}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="personal__fifth">
                            <div className="input__container">
                                {/* <h3>Family name</h3> */}
                                <textarea
                                    maxLength={600}
                                    className="personal__fourth__input"
                                    name="skills"
                                    placeholder='skills'
                                    value={cvData.skills}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </label>
                </form>
            </div>
            <div className='nav'>
                    <button onClick={loadtest}>Load-test</button>                </div>
        </div>
    );
};

CVForm.propTypes= {
    cvData: propTypes.object.isRequired,
    setCvData: propTypes.func.isRequired
}

export default CVForm;