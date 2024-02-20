import React from 'react'
import './css/ThirdSectionMenu.css'
const ThirdSectionMenu = () => {
  return (
    <section className='ThirdSectionMenu' id='ThirdSectionMenu'>
        <div class="faq-container" id='faq-container'>
            <div className='FAQ'>
                <p class="faq-header">FAQ</p>
                <h2>Common questions</h2>
                <p>Here are some of the most common questions that we get.</p>
            </div>
            
            <div className='questions'>
            <div class="faq">
                <p class="question">What engineering tools are available on this website?</p>
                <p class="answer">We offer a wide range of engineering tools including calculators, converters, simulators, and more.</p>
            </div>

            <div class="faq">
                <p class="question">Are the engineering tools on this website free to use?</p>
                <p class="answer">Yes, all the engineering tools on our website are completely free to use.</p>
            </div>

            <div class="faq">
                <p class="question">Can I access the engineering tools on this website without creating an account?</p>
                <p class="answer">Yes, you can access and use all the engineering tools on our website without the need for creating an account.</p>
            </div>

            <div class="faq">
                <p class="question">Are the engineering tools on this website suitable for both students and professionals?</p>
                <p class="answer">Absolutely! Our engineering tools are designed to cater to the needs of both students and professionals in various fields of engineering.</p>
            </div>

            <div class="faq">
                <p class="question">How frequently are the engineering tools on this website updated?</p>
                <p class="answer">We strive to regularly update and improve our engineering tools to ensure they are accurate, reliable, and up-to-date with the latest industry standards.</p>
            </div>
            </div>            
        </div>

        <footer class="footer-container">
            <div class="footer-title">TOOLS</div>
            
            <ul class="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
            <div class="social-icons">
                <a href="#" aria-label="Twitter"><img src="twitter-icon.png" alt="Twitter"/></a>
                <a href="#" aria-label="Instagram"><img src="instagram-icon.png" alt="Instagram"/></a>
                <a href="#" aria-label="Facebook"><img src="facebook-icon.png" alt="Facebook"/></a>
            </div>
            
            <div class="copyright">
                © 2023 myCompany, All Rights Reserved.
            </div>
            </footer>
    </section>    
  )
}

export default ThirdSectionMenu