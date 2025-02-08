import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css';
import Amazon from '../assets/amazon.svg';
import Ebay from '../assets/ebay.svg';
import Uber from '../assets/uber.svg';
import Walmart from '../assets/walmart.svg';
import Logo from '../utils/Logo.svg';
import MoneyCharger from '../assets/moneycharger.svg';
import Costreduction from '../assets/constredution.svg';
import MaskGrup from '../assets/Mask group.svg';


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
                                                <li><a href="#">Landing Page V1</a></li>
                                                <li><a href="#">Landing Page V2</a></li>
                                                <li><a href="#">Landing Page V3</a></li>
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
                            <img src={MoneyCharger} alt="money-charger" />
                            <div className="griden-comp">
                                <img src={Costreduction} alt="cost-reduct" />
                                <img src={MaskGrup} alt="mask-grup" />
                            </div>
                        </div>
                        <div className="hero-home-content">
                            <div className="hero-heading">
                                <div className="label-badge-head">
                                    <text>BEST CHOICE</text>
                                </div>
                                <h1>Future strategic finance for <br /><text>Enterprenurs</text></h1>
                                <p>Scale with checking and savings accounts, custom tools, and access to our investor network.</p>
                            </div>
                            <form action="input">
                                <div className="cta-btn-wrapper">
                                    <button type="submit">Get Started</button>
                                    <input type="text" placeholder="Your work email" />
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
                        </div>
                    </div>
                </div>
            </section>


            {/* section overview */}
            <section className="section-overview">
                <div className="container-overview">
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

            <section className="sec-features">
                <div className="container-features">
                    <div className="subsection-heading">
                        <div className="label-badge-feature">
                            <text>FEATURES</text>
                        </div>
                        <h2>Features <br />designed for you</h2>
                        <p>Growth-accelerating products for startups,<br /> ecommerce stores, angel investors, & more.</p>
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
                        <div className="features-wrapper-low">
                            <div className="features-card-wrapper-3">
                                <div className="features-card-heading">
                                    <h3>Integrates with best of breed solution</h3>
                                    <p>Integrate with best of payment processors and accounting software.</p>
                                </div>
                            </div>
                            <div className="features-card-wrapper-4">
                                <div className="features-card-heading">
                                    <h3>Cost Reduction</h3>
                                    <p>Fundsphere Reduced Payments maintenance and processing fees. No hidden fees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary">See More Features</button>
                </div>
            </section>

            {/* section pricing plan */}

            <section className="sec-pricing">
                <div className="container-pricing">
                    <div className="sub-head-pricing">
                        <div className="label-badge-pricing">
                            <text>PRICING PLAN</text>
                        </div>
                        <h2>Choose Package</h2>
                        <p>Join our pro features for unlimited<br /> without any contract and cancel anytime.</p>
                    </div>
                    <form action="form-block">
                        <div className="form-switcher">
                            <span>Monthly</span>
                            <label className="toggle-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <span>Yearly</span>
                        </div>
                    </form>
                    <div className="pricing-content">
                        <div className="package-card">
                            <div className="package-gap-2">
                                <div className="package-heading">
                                    <h3 className="sub-head">Basic</h3>
                                    <p className="sub-desc">Kickstart product research <br/>in your business at no cost.</p>
                                </div>
                                <ul>
                                    <li><text>Unlimited workspace</text></li>
                                    <li><text>Access to RestAPI</text></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fundsphere;
