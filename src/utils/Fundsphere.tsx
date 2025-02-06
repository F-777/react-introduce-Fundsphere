import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css'
import '../global.css'
import Amazon from '../assets/amazon.svg';
import Ebay from '../assets/ebay.svg';
import Uber from '../assets/uber.svg';
import Walmart from '../assets/walmart.svg';
import Logo from '../utils/Logo.svg';
import MoneyCharger from '../assets/moneycharger.svg';
import ConstRedution from '../assets/constredution.svg';
import MaskGroup from '../assets/Mask group.svg';
import VectorLeft from '../assets/vectorleft.svg';
import VectorRight from '../assets/vectorright.svg';
import HeroGradient from '../assets/herogradient.svg';


gsap.registerPlugin(ScrollTrigger);

function Fundsphere() {

    
    useEffect(() => {
        const sections = document.querySelectorAll(".slide-in");

        sections.forEach((section) => {
            const direction = section.classList.contains("left") ? -100 : 100;

            gsap.fromTo(
                section,
                { x: direction, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Mulai animasi saat 80% viewport
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);
    return (
        <>
            {/* Fundsphere Subheading Navbar Menus*/}
            <section className="navbar-logo-left">
                <nav className="navbar-logo-left-container">
                    <div className="nav-container">
                        <div className="navbar-wrapper">
                            <div className="div-block">
                                <img src={Logo} alt="logo" />
                                <div className="nav-menu-wrapper">
                                    <ul className="nav-menu-two">
                                        <li className="dropdown">
                                            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
                                                Features ▾
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Feature 1</a></li>
                                                <li><a href="#">Feature 2</a></li>
                                                <li><a href="#">Feature 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="nav-link" href="#">Pricing</a></li>
                                        <li><a className="nav-link" href="#">About Us</a></li>
                                        <li><a className="nav-link" href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <button className="btn-transparent">Sign In</button>
                                    <button className="btn-primary">Free Trial</button>
                                </div>
                                <button className="hamburger"></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

            {/* Section of Developments */}
            <section className="section-hero-home" id="home">
                <div className="container">
                    <div className="hero-home-container">
                        <div className="hero-home">
                            <img src={HeroGradient} alt="hero-gradient" />
                            <img src={MoneyCharger} alt="money-charger" />
                            <div className="image-wrapper-v2">
                                <img src={ConstRedution} alt="const-redution" />
                                <img src={MaskGroup} alt="mask-group" />
                            </div>
                        </div>
                        <div className="hero-home-content">
                            <div className="hero-heading">
                                <div className="label-badge">
                                    <text>BEST CHOICE</text>
                                </div>
                                <h1>Future strategic finance for <text>Enterprenurs</text></h1>
                                <p>Scale with checking and savings accounts, custom tools, and access to our investor network.</p>
                            </div>
                            <form action="input">
                                <div className="cta-btn-wrapper">
                                    <button type="submit">Get Started</button>
                                    <input type="Your work email" />
                                </div>
                            </form>
                            <div className="overview-content">
                                <div className="overview-item">
                                    <text>10%</text>
                                    <p>Benefical Cashback</p>
                                </div>
                                <div className="overview-item">
                                    <text>7M</text>
                                    <p>Satisfied Customer</p>
                                </div>
                                <div className="overview-item">
                                    <text>40+</text>
                                    <p>Country Available</p>
                                </div>
                            </div>
                            <img src={VectorLeft} alt="vector-left" />
                            <img src={VectorRight} alt="vector-right" />
                        </div>
                    </div>
                </div>
            </section>


            {/* section overview */}
            <section>
                <div className="container">
                    <div className="overview-content">
                        <div className="company-logo">
                            <img src={Uber} alt="uber-logo" />
                            <img src={Amazon} alt="amazon-logo" />
                            <img src={Ebay} alt="ebay-logo" />
                            <img src={Walmart} alt="walmart" />
                        </div>
                    </div>
                </div>
            </section>

            {/* section features */}

            <section>
                <div className="container">
                    <div className="subsecsection-heading">
                        <div className="label-badge">
                            <text>FEATURES</text>
                        </div>
                        <h2>Features designed for you</h2>
                        <p>Growth-accelerating products for startups, ecommerce stores, angel investors, & more.</p>
                    </div>
                    <div className="features-content">
                        <div className="features-wrapper-up">
                            <div className="features-card-wrapper-1">
                                <div className="features-card">
                                    <div className="features-card-heading">
                                        <h3>Pay with Fundsphere, quick, simple and easy</h3>
                                        <p>Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-card-wrapper-2">
                                <div className="features-card">
                                    <div className="features-card-heading">
                                        <h3>Bank-level Security</h3>
                                        <p>Personal information is encrypted and protected by industry standard banking security.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-wrapper"></div>
                    </div>
                    <button className="btn-primary">See More Features</button>
                </div>
            </section>
        </>
    )
}

export default Fundsphere;