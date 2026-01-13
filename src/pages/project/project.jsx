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
      description: 'A modern digital profile for Indonesia’s logistics and freight forwarder association, focusing on credibility, information clarity, and member engagement.',
      fullDescription: 'This project represents the digital presence of the Indonesian Logistics and Freight Forwarders Association (ALFI). The platform is designed to communicate the organization’s role, values, and activities clearly, while providing accessible information for members, partners, and the public. With a clean UI and structured content, it strengthens institutional credibility and supports effective communication within the logistics and forwarding ecosystem.',
      date: 'November 2024',
      technologies: ['React', 'Figma', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Daunnesia Agency',
      category: 'UI / UX Design',
      image: daun,
      description: 'A fresh and modern creative agency website that showcases brand identity, services, and creative works in a clear and engaging way.',
      fullDescription: 'This project presents the digital presence of a fresh creative agency focused on delivering impactful visual communication and branding solutions. The design emphasizes a clean layout, strong typography, and expressive visuals to reflect the agency’s creative character. Built to highlight services, portfolio, and brand values, the interface aims to create a strong first impression and build trust with potential clients.',
      date: 'March 2023',
      technologies: ['Figma'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Kids Montessori',
      category: 'Web Design & Development',
      image: kids,
      description: 'An engaging and child-friendly website designed for a Montessori-based learning environment, focusing on education, growth, and creativity.',
      fullDescription: 'This website is designed to represent a Kids Montessori learning space that emphasizes child-centered education and holistic development. The design combines a warm visual approach with clear information structure, making it easy for parents to understand the learning philosophy, programs, and activities. Built with smooth animations and responsive layouts, the platform delivers a friendly and trustworthy digital experience for families and educators.',
      date: 'Desember 2025',
      technologies: ['React', 'GSAP', 'CSS3'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Stratify',
      category: 'Web Application & UI UX Design',
      image: stratify,
      description: 'A project management web application based on a Kanban board system to help teams organize tasks and track progress efficiently.',
      fullDescription: 'Stratify is a project management web application designed to streamline team workflows using a Kanban board approach. The platform allows users to create, organize, and prioritize tasks across customizable columns, enabling clear visibility of project progress. With an intuitive UI and structured user experience, the application supports better collaboration, task tracking, and productivity for teams managing multiple projects.',
      date: 'Agustus 2023',
      technologies: ['Laravel', 'Bootstrap', 'Figma', 'JavaScript', 'Node', 'Ajax'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Semangat Tax',
      category: 'Landing Page',
      image: stax,
      description: 'A professional company profile landing page for a tax consulting firm, focused on trust, clarity, and service credibility.',
      fullDescription: 'This landing page represents a tax consulting company that provides comprehensive taxation services for individuals and businesses. The design emphasizes professionalism, clear service explanations, and credibility to build trust with potential clients. With a clean layout and well-structured content, the website helps visitors quickly understand the firm’s expertise, services, and value in navigating complex tax regulations.',
      technologies: ['Wordpress'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Oceira',
      category: 'Landing Page',
      image: oceira,
      description: 'A visually immersive landing page that showcases the beauty of Bali’s ocean, nature, and coastal atmosphere.',
      fullDescription: 'Oceira is a landing page designed to highlight the natural beauty of Bali’s ocean and coastal landscapes. The experience focuses on calming visuals, smooth transitions, and elegant layouts to evoke a sense of serenity and connection with nature. Built to inspire exploration and appreciation of marine beauty, the design delivers an immersive and emotionally engaging digital experience.',
      date: 'September 2025',
      technologies: ['Webflow', 'Figma'],
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
