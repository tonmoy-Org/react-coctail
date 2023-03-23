import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
      <footer class="bg-dark mt-5" id="footer-color">
      <div class="row row-cols-1 row-cols-md-4 d-flex justify-content-center align-top w-75 mx-auto p-5">
        <div>
          <h3 className='fw-bolder'>The Cocktail</h3>
          <p class="pt-4" id="footer-description">
            There are many variations of passages of available,
            but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>
        <div>
          <h5 class="fw-bold">Usefull Link</h5>
          <br/>
          <ul class="ul-list" id="footer-description">
            <li class="list-group-item pb-2"><a href="/home">Home</a></li>
            <li class="list-group-item pb-2"><a href="/home">About Us</a></li>
            <li class="list-group-item pb-2"><a href="/home">Cases</a></li>
            <li class="list-group-item pb-2"><a href="/home">Blog</a></li>
            <li class="list-group-item pb-2"><a href="/home">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 class="fw-bold">Contact Now</h5>
          <br/>
          <p id="footer-description">
            555 4th 5t NW, Washington <br/>
            DC 20530, United States
          </p>
         
          <p id="footer-description">
            +88 01750 000 000 <br/>
            +88 01750 000 000
          </p>
          
          <p id="footer-description">
            info@gmail.com <br/>
            info@gmail.com
          </p>
        </div>
        <div>
          <h5 class="fw-bold">Subscribe</h5>
          <br/>
          <p id="footer-description">
            Subscribe for our latest & Articles. We Won’t Give You Spam Mails
          </p>
          <div class="mb-4 d-flex">  
            <input type="email" class="form-control p-2 fw-semibold mx-2" id="exampleFormControlInput" placeholder="Your email"/>
           <button className='btn btn-outline-warning text-white fw-bold'>Submit</button>
          </div>

        </div>
        <p className='pt-5'>Copyright 2023</p>
      </div>
      
    </footer>
        </div>
    );
};

export default Footer;