



export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section" data-aos="fade-up">

            
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Hey</p>
                    <h1 className="hero--section--title">
                        I'm <span className="hero--section--title--color">Ankit</span>
                        <br />Web Developer
                    </h1>
                    
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '32px' }}>
                    <button className="btn btn-primary">Get In Touch</button>
                    <a href="https://github.com/ankit123-jh" target="_blank" rel="noopener noreferrer">
                        <img src="./img/github-icon.png" alt="GitHub" style={{ width: '25px', height: '25px' }} />
                    </a>
                    <a href="https://linkedin.com/in/ankit-kumar-4b93aa290" target="_blank" rel="noopener noreferrer">
                        <img src="./img/linkedin-icon.png" alt="LinkedIn" style={{ width: '25px', height: '25px' }} />
                    </a>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}
