import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Footer() {


    return (
<footer className="footer">
    <p>Copyright © 2025. All Rights Reserved</p>
    <div className="footer-links">
      <a href="#">TERMS & CONDITIONS</a>
      <span>|</span>
      <a href="#">PRIVACY POLICY</a>
    </div>
  </footer>
  );
}

export default Footer;