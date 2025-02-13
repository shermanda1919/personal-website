import React from 'react';
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-y-auto">
      <Banner/>
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-12 mb-4">Hello, I'm Amanda Sherman</h1>
        <p className="text-2xl italic text-gray-600 mb-6">3rd Year CS Major @ UMass Amherst</p>
        <img src="https://amanda-sherman.netlify.app/2024_profile_pic.png" alt="Amanda Sherman's profile" className="h-auto w-80 max-w-xs sm_max-w-sm sm:rounded-md mx-auto" />
      </div>
      <div className = "text-center">
        <h1 className="text-4xl font-bold mt-6 mb-6">My Technical Skills</h1>
        <div className="ml-2">
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">Languages: Java, Python, JavaScript, HTML/CSS, Git, C</li>
            <li className="text-gray-600">Frameworks: React, WordPress</li>
            <li className="text-gray-600">Developer Tools: Git, VS Code, Linux</li>
            <li className="text-gray-600">Libraries: pandas, NumPy, Matplotlib</li>
          </ul>
        </div>
      </div>
      <div className = "text-center">
        <h1 className="text-4xl font-bold mt-6 mb-6">Classes I've Taken</h1>
        <div className="ml-2">
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">CS 121: Intro to Programming</li>
            <li className="text-gray-600">Math 131: Calculus I</li>
            <li className="text-gray-600">Math 132: Calculus II</li>
            <li className="text-gray-600">Math 235: Linear Algebra</li>
            <li className="text-gray-600">Math 233: Calculus III</li>
            <li className="text-gray-600">CICS 160: Object Oriented Programming</li>
            <li className="text-gray-600">CICS 198c: Intro to C Programming</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-6 mb-6">My Experience</h1>
        <div className="ml-2">
          <p className="text-left text-xl">Research Assistant @UMass Amherst (Oct 2024 - Present)</p>
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">Conducting research on NLP (Natural Language Processing), specifically simplifying text outputs from prompts, under PhD candidate Maha Alkhairy</li>
            <li className="text-gray-600">Experimenting with prompt engineering techniques (e.x. zero shot, one shot, few shot, chain of thought)</li>
          </ul>
          <p className="text-left text-xl">Research Assistant @UMass Amherst (Jun 2024 - Aug 2024)</p>
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">Accepted into URV (Undergraduate Research Volunteers) program to perform collaborative research study on Membership Inference Attacks in Federated Learning with two teammates under PhD mentor Dayeon Kang</li>
            <li className="text-gray-600">Graphed and analyzed benchmark ML datasets (CIFAR-10, CIFAR-100, MNIST, FMNIST, etc.) using Python and Tensorflow in Matplotlib</li>
            <li className="text-gray-600">Spearheaded research presentation to fellow undergraduate and graduate students at First Friday Fair</li>
          </ul>
          <p className="text-left text-xl">Fellow @Valley Venture Mentors (Jun 2024 - Aug 2024)</p>
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">Learned about process of launching successful startup</li>
            <li className="text-gray-600">Networked and collaborated with Pioneer Valley entrepreneurs to refine FuseBloom's business model</li>
          </ul>
          <p className="text-left text-xl">Founder @FuseBloom (Jun 2020 - Oct 2023)</p>
          <ul className="text-left list-disc text-left mb-4">
            <li className="text-gray-600">Founder of FuseBloom, a free online platform for high schoolers that custom curates internship and summer opportunities to advance educational equality</li>
            <li className="text-gray-600">1000+ high schoolers subscribed to our opportunities newsletter</li>
            <li className="text-gray-600">800+ followers on Instagram</li>
            <li className="text-gray-600">2nd Place Winner of 2023 Minute Pitch entrepreneurship competition</li>
            <li className="text-gray-600">60% Acceptance Rate of high school students into internships (12 out of 20 students total)</li>
          </ul>
          <p className="text-left text-xl">Director of Outreach @Hack3 (Jul 2020 - Jun 2022)</p>
          <ul className="list-disc text-left mb-4">
            <li className="text-gray-600">Coordinate all outreach and social media operations for Hack3</li>
            <li className="text-gray-600">Design, lay out, and post content on our Instagram feed</li>
            <li className="text-gray-600">Gained 275+ participants during 2020 hackathon</li>
            <li className="text-gray-600">Gained nearly 350 participants during 2021 hackathon (largest high school hackathon of 2021!)</li>
            <li className="text-gray-600">Gained 377 participants during 2022 hackathon (largest high school hackathon of 2022 so far!)</li>
            <li className="text-gray-600">2022 MLH Hackathon</li>
          </ul>
        </div>
        {/*
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-4 mb-4">Contact Me</h1>
          <p className="text-2xl italic text-gray-600 mb-6"></p>
          <img src="" className="w-32 h-auto mx-auto" />
        </div>
        }
        {/*Resume Download Button */}
        <div className="mt-8 mb-8">
        <a href="/resume.pdf" download="resume.pdf" className="bg-blue-500 text-white text-xl font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mb-4">Download My Resume</a>
        </div>
        
      </div>
      <div className="mb-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;