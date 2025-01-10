import './Home.css';
import pfp from '../images/pfp.jpeg';

const Home = ({ showMouse }) => {
    return (
        <>
            <div className='container'>
                <h1 className='container-title'>Anant Dhokia</h1>
            </div>
                <div className="scroll-down">
                    <div className={`scroll-down ${!showMouse ? 'hidden' : ''}`}>
                        <div className="mouse"></div>
                    </div>
                </div>

            <div className='container-content'>
                <div className='sub-container'>
                    <h2 className='intro-header'>Hey There!</h2>
                    
                    <p className='intro-paragraph'> 
                        My name is Anant Dhokia and I'm currently a junior at the University of Washington studying Informatics and software devleopment! Alongside my coursework, 
                        I enjoy developing and creating projects to learn and improve my skills while putting my talent to good use by creating meaningful software.
                    </p>

                    <p className='intro-paragraph'>
                        Outside of the classroom, I'm an avid skier, lift weights, hangout with friends and love listening to music and watching movies. 
                        I'm always looking for new opportunities to learn and grow, so feel free to reach out!
                    </p>

                    <p className='intro-paragraph'>
                        I'm always looking for new opportunities to learn and grow, so feel free to reach out! You can download my resume here.
                    </p>
                </div>

                <img className='image' src={pfp} alt='A headshot of me (Anant Dhokia)'/>
            </div>
        </>
    );
};

export default Home;
