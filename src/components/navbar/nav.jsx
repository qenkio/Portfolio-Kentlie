import { useEffect, useRef, useState } from 'react'
import logoBlack from '../../assets/logo black.png'
import logoWhite from '../../assets/logo white.png'
import './nav.css'

const navItems = [
	{
		label: 'Home', href: '#home', icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
				<path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
			</svg>
		)
	},
	{
		label: 'About', href: '#about', icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
				<path d="M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5229 17.5229 22 12 22ZM13 7H11V9H13V7ZM13 11H11V17H13V11Z"></path>
			</svg>
		)
	},
	{
		label: 'Project', href: '#project', icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
				<path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path>
			</svg>
		)
	},
	{
		label: 'Contact', href: '#contact', icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
				<path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path>
			</svg>
		)
	},
]

export default function Nav() {
	const navRef = useRef(null)
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const navEl = navRef.current
		const maxScroll = 1000
		let rafId = null

		// Initialize theme
		const stored = localStorage.getItem('theme')
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		const initialTheme = stored || (prefersDark ? 'dark' : 'light')
		setTheme(initialTheme)
		document.documentElement.setAttribute('data-theme', initialTheme)

		const updateNav = () => {
			if (!navEl) return
			if (window.scrollY > 0) {
				navEl.classList.add('scrolling')
				const scrollProgress = Math.min(window.scrollY / maxScroll, 1)
				const easeProgress = 1 - Math.pow(1 - scrollProgress, 4)
				const minWidth = 528
				const maxWidth = window.innerWidth * 0.8
				const currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress
				if (window.innerWidth >= 768) {
					navEl.style.setProperty('width', `${currentWidth}px`)
				}
			} else {
				navEl.classList.remove('scrolling')
				navEl.style.setProperty('width', '80%')
			}
			rafId = null
		}

		const onScroll = () => {
			if (!rafId) {
				rafId = requestAnimationFrame(updateNav)
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		const onAnchorClick = (e) => {
			const target = e.currentTarget
			const href = target.getAttribute('href') || ''
			if (href.startsWith('#')) {
				e.preventDefault()
				const id = href.substring(1)
				const el = document.getElementById(id)
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}

		const anchorEls = Array.from(document.querySelectorAll('nav a[href^="#"]'))
		anchorEls.forEach((a) => a.addEventListener('click', onAnchorClick))

		const sections = Array.from(document.querySelectorAll('section[id]'))
		const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'))

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						navLinks.forEach((link) => link.classList.remove('active'))
						const id = entry.target.getAttribute('id')
						const activeLink = document.querySelector(`nav a[href="#${id}"]`)
						if (activeLink) activeLink.classList.add('active')
					}
				})
			},
			{ threshold: 0.55 }
		)

		sections.forEach((section) => observer.observe(section))

		// Initial state
		updateNav()

		return () => {
			window.removeEventListener('scroll', onScroll)
			anchorEls.forEach((a) => a.removeEventListener('click', onAnchorClick))
			observer.disconnect()
		}
	}, [])

	const toggleTheme = () => {
		const next = theme === 'dark' ? 'light' : 'dark'
		setTheme(next)
		document.documentElement.setAttribute('data-theme', next)
		localStorage.setItem('theme', next)
	}



	// ... existing imports

	// inside Nav component
	const Logo = () => (
		<img
			src={theme === 'dark' ? logoWhite : logoBlack}
			alt="Ken Logo"
			style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
		/>
	)

	return (
		<div className="nav-outer">
			{/* Mobile/Tablet topbar: logo + theme toggle */}
			<div className="topbar">
				<div className="topbar-inner">
					<div className="brand-left mobile-only-inline" aria-label="Ken logo">
						<span className="brand-logo"><Logo /></span>
					</div>
					<div className="actions-right mobile-only-inline">
						<button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
							{theme === 'dark' ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM12 4V1h-0v3h0zm0 19v-3h-0v3h0zM4 12H1v0h3v0zm19 0h-3v0h3v0zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zm12.69-1.79l-1.42 1.42-1.8-1.79 1.42-1.42 1.8 1.79zM12 8a4 4 0 100 8 4 4 0 000-8z" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M21.752 15.002A9 9 0 1111 2.248a7 7 0 1010.752 12.754z" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<nav id="main-nav" ref={navRef} className="main-nav transparent">
				<div className="nav-container">
					<div className="brand-left desktop-only-inline" aria-label="Ken logo">
						<span className="brand-logo"><Logo /></span>
					</div>
					<ul className="nav-list">
						{navItems.map((item) => (
							<li key={item.href} className="nav-item">
								<a href={item.href} className="nav-link">
									<span className="nav-indicator" />
									<span className="nav-icon mobile-only">{item.icon}</span>
									<span className="nav-label desktop-only">{item.label}</span>
									<span className="nav-label mobile-only">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
					<div className="actions-right">
						<button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
							{theme === 'dark' ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM12 4V1h-0v3h0zm0 19v-3h-0v3h0zM4 12H1v0h3v0zm19 0h-3v0h3v0zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zm12.69-1.79l-1.42 1.42-1.8-1.79 1.42-1.42 1.8 1.79zM12 8a4 4 0 100 8 4 4 0 000-8z" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M21.752 15.002A9 9 0 1111 2.248a7 7 0 1010.752 12.754z" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</nav>
		</div>
	)
}


