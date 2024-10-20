"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define your bot responses
  const responses = {
    "What skills are you best at?": "I'm skilled in machine learning, deep learning (CNN), Python, web development (HTML, CSS, JavaScript, Node.js), and Java (with DSA).",
    "Tell me about your projects.": "I've developed a Face Recognition Attendance System and a Movie Recommendation System.",
    "What are you studying?": "I'm pursuing a BCA course in Data Science and Artificial Intelligence at BBD University, Lucknow.",
    "Contact details?": "You can reach me at ganeshagrahari108@gmail.com.",
    // Add more questions and answers as needed
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const botReply = responses[userMessage] || "I'm sorry, I don't understand that.";
      setChatLog([...chatLog, { user: userMessage, bot: botReply }]);
      setUserMessage(""); // Clear the input field
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  // Render chat messages
  const renderChatLog = () => {
    return chatLog.map((entry, index) => (
      <li key={index}>
        <span className="avatar user">User</span>
        <div className="message">{entry.user}</div>
        <span className="avatar bot">AI</span>
        <div className="message">{entry.bot}</div>
      </li>
    ));
  };
  


  return (
    <><header>
		<a href="#" class="logo-holder">
			<div className="logo">L</div>
			<div className="logo-text">Portfolio Website</div>
		</a>
		<nav>
			<ul id="menu" className={menuOpen ? "active" : ""}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="ganeshagrahari108@gmail.com" class="button">Contact Me</a>
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
		<section className="hero container">
			<div className="hero-blue">
				<div>
					<h1><small>Hi I'm</small>
						Ganesh Agrahari
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
					<h3>Basic</h3>
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
					<h3>A bit about me</h3>
					<p>

						I am Ganesh Agrahari, a BCA student in Data Science and AI at BBD University, Lucknow,
						graduating in September 2026. My expertise includes machine learning, deep learning (CNN),
						Python, web development (HTML, CSS, JavaScript, Node.js), and Java (with DSA). I’ve developed
						projects like a Face Recognition Attendance System and a Movie Recommendation System and hold
						certifications in Data Science and Machine Learning !!
					</p>
					<p>
						I am eager to apply my skills through internship opportunities. I am passionate about
						international affairs and networking, and contribute to my university’s technical team in the
						cultural group 'Aaina'.
					</p>
				</div>
			</div>
		</section>
		<section className="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-1.jpg" alt="Workplace 1 - YouTube Creator" width="100%" />
							<figcaption>
								Workplace - 1 YouTube Creator
							</figcaption>
						</div>
					</figure>
					<h3>YouTube Content Creator</h3>
					<div>2020-current</div>
					<p>Content creation online teaching people about how to code using HTML, CSS, JS.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Moshi Moshi Marketing" width="100%" />
							<figcaption>
								Workplace - Moshi Moshi Marketing
							</figcaption>
						</div>
					</figure>
					<h3>Moshi Moshi Marketing</h3>
					<div>20018-2020</div>
					<p>Marketing agency building websites and programming them from the ground up. </p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-3.jpg" alt="Workplace 3 - Chamber of Commerce" width="100%" />
							<figcaption>
								Workplace - Chamber of Commerce
							</figcaption>
						</div>
					</figure>
					<h3>Chamber of Commerce</h3>
					<div>2013-2018</div>
					<p>A small to large business organisation that helps facilitate advice and support.</p>
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
					<img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-7.jpg" alt="School" width="100%" />
				</a>
			</div>
		</section>
		<section className="chatbot container">
      <h2>
        <small>Talk to me</small>
        Chatbot
      </h2>
      <div className="chatbot-blue">
        <div className="chat-info">
          <h3>Chatbot Description</h3>
          <p>
		  I developed a simple chatbot designed for basic interactions. While it effectively handles straightforward queries and responses, it is currently limited in its functionality. Users can engage in simple conversations, but the chatbot does not support complex tasks or advanced
		   interactions at this stage. Future improvements are planned to enhance its capabilities and user experience.
          </p>
          <p>
		  I am seeking internship opportunities to apply my skills in machine learning, Python, and web development. Currently pursuing a BCA in Data Science and AI, I'm eager to gain
		   hands-on experience and contribute to a dynamic team while further developing my technical expertise. You can download my resume using the button below.
          </p>
          <a href="./Ganesh Agrahari Resume.pdf" className="button black">Download Resume</a>
        </div>
        <div className="chat-box">
          <div className="scroll-area">
            <ul id="chat-log">
              {renderChatLog()}
			  <li>
								<span class="avatar bot">AI</span>
								<div class="message">
									Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How
									can I help?
								</div>
							</li>            
            </ul>
          </div>
          <div className="chat-message">
            <input 
              id="text" 
              type="text" 
              name="msg" 
              placeholder="Hey Ganesh, what skills are you best at?" 
              value={userMessage} 
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key
            />
            <button type="submit" id="send" className="button black" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
	</main></>
      
  );
}
