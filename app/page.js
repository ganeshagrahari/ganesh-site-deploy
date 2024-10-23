"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.onload = () => {
      var options = {
        strings: ["Ganesh Agrahari", "Python Expert ","ML Expert ", "an AI Enthusiast","a Data Scientist ", "a Web Developer" ],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
      };

      new Typed(".auto-type", options);
    };
    document.body.appendChild(script);
  }, []);

  

  
  


  return (
    <><header>
		<a href="#" className="logo-holder">
			<div className="logo">G</div>
			<div className="logo-text">Portfolio Website</div>
		</a>
		<link rel="icon" type="image/jpg" href="./imgs/favicon.jpg"></link>
		<nav>
			<ul id="menu" className={menuOpen ? "active" : ""}>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
				<a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:ganeshagrahari108@gmail.com" className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>
            </a>
        </nav>
    </header>
    <main>
        <section id="home"className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi I'm</small>
                        <span className="auto-type"></span>
                    </h1>
                    
                    <p>
                        Pursuing a BCA course in Data Science and Artificial Intelligence at BBD University, Lucknow.
                        Skilled in machine learning, deep learning, Python, web development, and Java, with hands-on
                        experience in projects like a Face Recognition Attendance System. Eager to apply technical
                        expertise to real-world challenges, driven by a passion for innovation and technology.






                        <span>I'm interested in AI topics which is why I also add things like ChatGPT into my projects
                            these days.</span>
                    </p>
						
					<div className="call-to-action">
						<a href="./Ganesh Agrahari Resume.pdf" className="button black">
							View Resume
						</a>
						<a href="mailto:ganeshagrahari108@gmail.com" className="button white">
							Contact Me
						</a>
					</div>
					<div className="social-links">
						<a href="https://github.com/ganeshagrahari" target="_blank">
							<img src="./imgs/github.png" alt="GitHub" width="48" />
						</a>
						<a href="https://www.linkedin.com/in/ganesh-agrahari-727746263/" target="_blank">
							<img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
						</a>
						<a href="https://www.instagram.com/quantum_viag/" target="_blank">
							<img src="./imgs/instagram.png" alt="instagram" width="60" />
						</a>
						<a href="mailto:ganeshagrahari108@gmail.com" target="_blank">
							<img src="./imgs/email.png" alt="email" width="43" />
						</a>
					</div>
				</div>
			</div>
			<div className="hero-yellow">
				<img src="./imgs/hero-image.png" alt="Adrian Twarog" width="100%" />
			</div>
		</section>
		<section className="logos container">
			<div className="marquee">
				<div className="track">
					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/python.png" width="128" alt="Python" />
					<img src="./imgs/java.png" width="128" alt="VS Code" />
					<img src="./imgs/ml.png" width="128" alt="Sass" />
					<img src="./imgs/AI.png" width="128" alt="React" />
					<img src="./imgs/Sql.png" width="132" alt="Next JS" />
					<img src="./imgs/nodejs.png" width="128" alt="Azure" />
					<img src="./imgs/linux.png" alt="HTML" width="128" />
					<img src="./imgs/powerbi.png" alt="CSS" width="128" />
					<img src="./imgs/mongodb.png" alt="JS" width="138" />

					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/python.png" width="128" alt="Python" />
					<img src="./imgs/java.png" width="128" alt="VS Code" />
					<img src="./imgs/ml.png" width="128" alt="Sass" />
					<img src="./imgs/AI.png" width="128" alt="React" />
					<img src="./imgs/Sql.png" width="132" alt="Next JS" />
					<img src="./imgs/nodejs.png" width="128" alt="Azure" />
					<img src="./imgs/linux.png" alt="HTML" width="128" />
					<img src="./imgs/powerbi.png" alt="CSS" width="128" />
					<img src="./imgs/mongodb.png" alt="JS" width="138" />







				</div>
			</div>
		</section>
		<section id="skills" className="skills container">
			<h2>
				<small>About Me</small>
				Skills
			</h2>
			<div className="holder-blue">
				<div className="left-column">
					<h3>Advanced</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>Python</li>
						<li>Machine Learning</li>
						<li>DeepLearning(CNN)</li>
						<li>DSA</li>
					</ul>
					<h3>Learning</h3>
					<ul>
						<li>Node.js</li>
						<li>Java</li>
						<li>PowerBi</li>
						<li>Mongodb</li>
						<li>Docker</li>
						<li>Linux</li>
					</ul>
				</div>
				<div className="right-column">
					<h3>Education & My project Experties</h3>
					<p>

					Ganesh Agrahari is pursuing a BCA in Data Science and Artificial Intelligence at BBD University,
					 Lucknow, expecting to graduate in September 2026. They have strong skills in machine learning, deep learning (CNN),
					  Python, Java (including DSA), web development (HTML, CSS, JavaScript, Node.js), and data visualization using Power BI...
					</p>
					<p>
					Ganesh's projects include a Face Recognition Attendance System using Python, OpenCV, and deep learning, as well as a Movie Recommendation System leveraging Python libraries like Pandas and Scikit-learn.
					 They have also built a portfolio website showcasing their technical expertise and projects...
					</p>
					<p>You can check My project on github repositories mentioned below :</p>
					<div className="social-links"><a href="https://github.com/ganeshagrahari?tab=repositories" target="_blank" >
					<img src="./imgs/githubrepo.png" alt="GitHub" width="60" /></a></div>
					 </div> 
			</div>
		</section>
		<section id="recent project-ex" className="work-experience container">
			<h2>
				<small>Recent</small>
				Project Experience(FRAS)
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-1.png" alt="Face Recognition Attendance System" width="100%" />
							<figcaption>
							Face Recognition Attendance System
							</figcaption>
						</div>
					</figure>
					<h3>Face Recognition Attendance System</h3>
					<div>2024-july</div>
					<p>FRAS is DeepLearning based  project which is used to mark attendance of students using face recognition technology, for GUI i used ttk enter module and for recognition I used haar cascade face detection !</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-2.png" alt="Face recognizer" width="100%" />
							<figcaption>
						     Face Recognizer
							</figcaption>
						</div>
					</figure>
					<h3>FRAS-Face regognizer!</h3>
					<div>Part of FRAS</div>
					<p>It recognize the faces  of students and mark their attendance. For recognizing it uses lbph algorithm, and it divide one image into 100 pixel and assign array for each pixel than perform Deep learning on it!</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-3.png" alt="Attendance Management System" width="100%" />
							<figcaption>
							Attendance Management System
							</figcaption>
						</div>
					</figure>
					<h3>FRAS-Attendance Management System!</h3>
					<div>Part of Fras</div>
					<p>This module detects and recognizes faces using OpenCV, marking attendance and creating a record for it in an Excel sheet. It ensures accurate, real-time tracking with simple functionality!</p>
				</article>

			</div>
		</section>
		<section id="projects" className="bento container">
			<h2>
				<small>
					Previous
				</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-4.png" alt="workplace-4" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-1.png" alt="workplace-1" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-3.png" alt="workplace-3" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-2.png" alt="workplace-2" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-5.png" alt="workplace-5" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/workplace-6.jpg" alt="School" width="100%" />
				</a>
			</div>
		</section>
		<section id="contact" className="chatbot container">
    <div id="contact">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <div className="contact-container">
            <h1><i className="fa-solid fa-user"></i> Contact Me</h1>
            <div className="row">
                <div className="left-contact">
                    <p><i className="fa-solid fa-envelope"></i> ganeshagrahari108@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> +91 904-423-2872</p>
                    <p><i className="fa-solid fa-map-pin"></i> Lucknow</p>
                    <div id="msg"></div>
                </div>
                <div className="right-contact">
                    <form action="https://api.web3forms.com/submit" method="POST" name="submit-to-google-sheet">
					<input type="hidden" name="access_key" value="a6b6c25d-bfdd-4695-b793-2dc861f5e5d8"/>
                        <input type="text" name="Name" placeholder="Name" required />
                        <input type="email" name="Email" placeholder="Email" required />
                        <textarea name="Message" placeholder="Message" rows="5" required></textarea>
                        <button type="submit" className="sub-btn">Submit <i className="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<footer>
        <div className="container">
            <div className="copyright">
                <h3>Ganesh's Portfolio</h3>
                <p>Thanks for visiting my portfolio, Here I have shared with you my project experience and skills! </p>
            </div>
            <div className="quic-links">
                <h3>Quic Links</h3>
                <a href="#home"><i className="ri-send-plane-2-line"></i> Home</a>
                <a href="#skills"><i className="ri-send-plane-2-line"></i> Skills</a>
                <a href="#projects"><i className="ri-send-plane-2-line"></i> Projects</a>
				<a href="#recent project-ex"><i className="ri-send-plane-2-line"></i> Project Experience</a> 
				<a href="#contact"><i className="ri-send-plane-2-line"></i> Contact</a> 
                
                
            </div>
            <div className="contact-info">
                <h3>Contact info</h3>
                <p><i className="fa-solid fa-envelope"></i> ganeshagrahari108@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i> +91 904-423-2872</p>
                <p><i className="fa-solid fa-map-pin"></i> Lucknow</p>
                
                <ul className="footer-social">
                    <li><a href="https://github.com/ganeshagrahari" target="_blank"><i className="fa-brands fa-github-alt"></i></a></li>
    
                    <li><a href="https://www.instagram.com/quantum_viag/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
    
                    <li><a href="https://www.linkedin.com/in/ganesh-agrahari-727746263/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
    
                    
                </ul>
            </div>
        </div>
        <div id="copyright-message">
            <p>Copyright &copy; Ganesh, Made  By <span>Ganesh Agrahari</span></p>
        </div>
    </footer>
		

		
	</main></>
      
  );
}
