import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Projects</h2>
            <div className="project">
                <h3 className="project-title">Project 1</h3>
                <p className="project-description">Description of project 1</p>
            </div>
            <div className="project">
                <h3 className="project-title">Project 2</h3>
                <p className="project-description">Description of project 2</p>
            </div>
            <div className="project">
                <h3 className="project-title">Project 3</h3>
                <p className="project-description">Description of project 3</p>
            </div>
        </section>
    )
}

export default Projects;