import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am an aspiring Full-Stack Developer with a strong passion for problem-solving and creating intuitive, efficient digital solutions. Proficient in Java, JavaScript, React.js, Node.js, and MongoDB, I specialize in developing responsive web applications that enhance user experiences.',
        line2: 'With hands-on experience as a Web Developer Intern at Marcello Tech, I built AIMG, an AI-powered text-to-image application, where I implemented JWT authentication, real-time API integration, and a credit-based user system. I have also developed Code-Go, an online compiler supporting multiple programming languages, showcasing my ability to integrate backend APIs seamlessly.',
        line3: 'Beyond coding, I am an enthusiastic learner, always exploring new technologies and refining my skills. I hold certifications in Networking, Cybersecurity, and Full-Stack Development and enjoy problem-solving, reading tech blogs, and playing chess. My goal is to contribute to impactful projects that drive innovation and efficiency in technology.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}