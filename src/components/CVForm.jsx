import propTypes from 'prop-types';

const CVForm = ({ cvData, setCvData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, [name]: value });
    }

    return(
        <div className='cv__form'>
            <div className='personal__1'>
                <form>
                    <h2>Personal Information</h2>
                    <label>
                        <h3>Name:</h3>
                        <input 
                            name="name"
                            value={cvData.name}
                            onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
};

CVForm.propTypes= {
    cvData: propTypes.object.isRequired,
    setCvData: propTypes.object.isRequired
}

export default CVForm;