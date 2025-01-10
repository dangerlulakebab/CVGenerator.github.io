import propTypes from 'prop-types';

const CVPreview = ({ cvData }) => {


    return (
        <div className="cv__preview">
            <h2>{cvData.name}</h2>
        </div>
    );
};

CVPreview.propTypes= {
    cvData: propTypes.object.isRequired,
}

export default CVPreview;