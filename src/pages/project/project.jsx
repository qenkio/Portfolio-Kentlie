import { useState, useEffect, useRef } from 'react'
import './project.css'
import dpw from '../../assets/dpw.png'
import daun from '../../assets/Homepage.png'
import kids from '../../assets/kids.png'
import stratify from '../../assets/stratify.png'
import stax from '../../assets/stax.png'
import oceira from '../../assets/oceira.png'


function Project() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)
  const cardsRef = useRef([])

  const projects = [
    {
      id: 1,
      title: 'DPW ALFI Jakarta',
      category: 'UI Design',
      image: dpw,
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      fullDescription: 'This comprehensive e-commerce solution provides a seamless shopping experience with advanced features including real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern web technologies to ensure scalability and performance.',
      date: 'January 2024',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Daunnesia Agency',
      category: 'UI / UX Design',
      image: daun,
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      fullDescription: 'A powerful task management tool designed for teams to collaborate effectively. Features include real-time synchronization, drag-and-drop interface, file attachments, and comprehensive notification system. Available on both web and mobile platforms.',
      date: 'March 2024',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux', 'Material UI'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Kids Montessori',
      category: 'Web Design & Development',
      image: kids,
      description: 'Modern and responsive portfolio website showcasing creative work and professional experience.',
      fullDescription: 'A beautifully designed portfolio website that highlights creative projects and professional achievements. Features smooth animations, responsive design, and optimized performance. Built with attention to detail and user experience.',
      date: 'May 2024',
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'CSS3', 'Vercel'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Stratify',
      category: 'Web Application & UI UX Design',
      image: stratify,
      description: 'Real-time weather dashboard with interactive maps and detailed forecasts.',
      fullDescription: 'An intuitive weather application providing real-time weather data, interactive maps, and detailed forecasts. Features include location-based weather, hourly and daily forecasts, weather alerts, and beautiful data visualizations.',
      date: 'July 2024',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Leaflet', 'SCSS'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Semangat Tax',
      category: 'Landing Page',
      image: stax,
      description: 'Analytics dashboard for tracking social media performance and engagement metrics.',
      fullDescription: 'A comprehensive analytics platform for social media managers to track performance across multiple platforms. Features include real-time metrics, customizable reports, trend analysis, and export capabilities.',
      date: 'September 2024',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Express.js'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Oceira',
      category: 'Landing Page',
      image: oceira,
      description: 'Mobile application for food ordering and delivery with real-time tracking.',
      fullDescription: 'A feature-rich food delivery application connecting customers with local restaurants. Includes real-time order tracking, multiple payment options, restaurant ratings, and personalized recommendations.',
      date: 'November 2024',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
      link: '#',
      github: '#'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = cardsRef.current

    cards.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
    }, 300)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <section id="project" className="project-section">
      <div className="project-container">
        {/* Header */}
        <div className="project-header">
          <div className="project-title-wrapper">
            <span className="project-icon">✦</span>
            <h2 className="project-title">Projects</h2>
          </div>
          <div className="project-divider"></div>
          <p className="project-subtitle">
            A collection of my recent work and creative projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => openModal(project)}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <span className="project-card-view">View Details</span>
                </div>
              </div>
              <div className="project-card-content">
                <span className="project-card-category">{project.category}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-footer">
                  <span className="project-card-date">{project.date}</span>
                  <span className="project-card-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={handleBackdropClick}
        >
          <div
            className="modal-content"
            ref={modalRef}
            tabIndex={-1}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>

            <div className="modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
            </div>

            <div className="modal-body">
              <div className="modal-header">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className="modal-date">{selectedProject.date}</span>
              </div>

              <div className="modal-description">
                <h3>About This Project</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="technologies-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Project
