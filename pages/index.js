import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before the content appears
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Product Management System - Django',
      image: '/p1.jpg',
      github: 'https://github.com/sirawtadesse/django_product_management',
    },
    {
      title: 'Traffic Collision Analysis - Python',
      image: '/p2.jpg',
      github: 'https://github.com/sirawtadesse/Traffic_Collision_Analysis',
    },
    {
      title: 'Etho Handcrafts - Laravel',
      image: '/p3.jpg',
      github: 'https://github.com/sirawtadesse/ethio-handcrafts',
    },
    {
      title: 'HRMS Telegram Bot - Python',
      image: '/p4.jpg',
      github: 'https://github.com/sirawtadesse/hr-tg-bot',
    },
    {
      title: 'Vehicle Insurance MGT System - Nextjs & Django',
      image: '/p5.jpg',
      github: 'https://github.com/sirawtadesse/django-nextjs-project',
    },
    {
      title: 'HRMS - Angular & In-memory Web Api',
      image: '/p6.jpg',
      github: 'https://github.com/sirawtadesse/HRMS-ANGULAR',
    },
    {
      title: 'Event MGT system - Django',
      image: '/p7.jpg',
      github: 'https://github.com/sirawtadesse/Event-django',
    },
    {
      title: 'Ethio-dev Knowledge Mgt Porta - Django',
      image: '/p8.jpg',
      github: 'https://github.com/sirawtadesse/KM-portal-Django',
    },
    {
      title: 'My 1st Personal Website - HTML CSS JS',
      image: '/p9.jpg',
      github: 'https://github.com/sirawtadesse/mypersonalwebsite',
    },
    // {
    //   title: 'Integrated business management system - Laravel',
    //   image: '/p10.jpg',
    //   github: 'https://github.com/sirawtadesse/business-management',
    // },
  ];

  const experiences = [
    {
      title: 'IT Officer Intern',
      company: 'Guba Lafto Consulting Architects and Engineers PLC',
      date: 'July 2023 - Sept 2023',
      description: 'Worked on troubleshooting hardware and software issues, installing IP cameras, and setting up computer networks.',
    },
    {
      title: 'Web Development Project - Django',
      company: 'Yenetta Code',
      date: 'Oct 2023 - Nov 2023',
      description: 'Built a website using Django, focusing on responsive design and user experience.',
    },
    {
      title: 'Full-Stack Software Developer',
      company: 'RE Technology Solutions PLC',
      date: 'Nov 2024 - Present',
      description: 'Developing and maintaining web applications using Laravel and modern frontend technologies.',
    },
  ];

  return (
    <Layout>
      {/* Home Section */}
      <section
        id="home"
        className="hero h-screen md:h-96 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/sis.jpg')" }}
      >
        <div className="absolute top-20 left-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-4">
          <h1 className="text-3xl md:text-4xl text-white text-center mb-2">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-2xl text-white text-center">
            I am Siraw Tadesse, Full-Stack Software Developer
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row p-6 md:p-10 items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="/srw.jpg"
            alt="Siraw Tadesse"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-10">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi! I’m Siraw Tadesse, a passionate full stack software developer and information systems graduate from Addis Ababa University. I thrive on creating dynamic, user-friendly applications that solve real-world problems.
          </p>
          <a
            href="/Siraw_CV_19.pdf"
            download
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded transition hover:bg-blue-700"
          >
            Download My CV
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-6 md:p-10">
        <h2 className="text-3xl text-center mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="font-bold mb-2">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-6 md:p-10 bg-gray-100">
        <h2 className="text-3xl text-center mb-6">My Experience</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 transform transition hover:scale-105 md:flex-1"
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-md text-gray-600">{exp.company}</h4>
              <p className="text-sm text-gray-500">{exp.date}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-6 md:p-10 bg-gray-100">
        <h2 className="text-3xl text-center mb-6">My Education</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-sm">
            <h3 className="text-xl font-bold">
              Bachelor of Science in Information Systems
            </h3>
            <p className="text-gray-600">Addis Ababa University</p>
            <p className="text-sm text-gray-500">Graduated: 2024</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-6 md:p-10 bg-gray-200">
        <h2 className="text-3xl text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'HTML CSS JS',
            'Reactjs, Nextjs, Angular',
            'Python - Django, Flask',
            'PHP - Laravel',
            'Mysql',
            'Data analysis - Python',
            'Computer Network Config.',
            'IP Camera Installation',
            'Telegram Bot development',
          ].map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-3 w-32 text-center">
              <h3 className="text-lg font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 md:p-10 bg-gray-100">
        <h2 className="text-3xl text-center mb-6">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
          <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Me
              </button>
            </div>
          </form>

          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
              Contact Me
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Email: sirawbizutadesse21@gmail.com
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Or: daveyetadulij@gmail.com
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Phone: (+251) 919-901362
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Address: Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
