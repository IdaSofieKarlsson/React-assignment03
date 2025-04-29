import '../components/ProjectProfile.css';

function ProjectProfile(props) {
    return (
        <div className='project'>
        <h3>Project name: </h3>
        <h1 className='project-title'>{props.title}</h1>
        <img className='img' src={props.screenshotconsole} alt="screenshot console" />
        <img className='img' src={props.screenshotcode} alt="screenshoot code" />
        <a href={props.linkRepo} target='_blank'>Github repo</a>
        <h3 className='h3-title'>Tech used: {props.techUsed}</h3>
        <p className='p-description'>{props.description}</p>
        <ul>
            <li>{props.projectDoes}</li>
            <li>{props.projectSkills}</li>
            <li>{props.isCollaboration ? "This was a collaboration" : "This was not a collaboration"}</li>
            <li>{props.challenges}</li>
        </ul>
        </div>
    )
};

export default ProjectProfile;