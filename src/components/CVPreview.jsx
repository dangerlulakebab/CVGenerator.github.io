import propTypes from 'prop-types';

const CVPreview = ({ cvData }) => {


    return (
        <div className="cv__preview">
            <div className="cv_main">
                <div className="cv__first">
                    <h2 className="resume">Resume</h2>
                    <h2 className="resume">{cvData.headline}</h2>

                    <hr />
                    <div style={{display: 'flex', flexDirection: "row"}}>
                        <h2>{cvData.name}</h2> 
                        <>&nbsp;</>
                        <h2>{cvData.name2}</h2>
                    </div>

                    <h2>{cvData.emailAddress}</h2>
                    <h2>{cvData.phoneNumber}</h2>
                </div>
            </div>
        </div>
    );
};

CVPreview.propTypes= {
    cvData: propTypes.object.isRequired,
}

export default CVPreview;