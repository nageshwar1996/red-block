import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layouts from '../components/layouts';
import '../pages/css/styles.css';
import '../pages/css/transctiondetails.css'

function TransactionDetail() {

    
    return (
        <Layouts title="Transaction Details">
          <div className="transaction-content">
        <div className="left-column">
          <section className="card transaction-card">
            <h3>Transaction Detail</h3>
            <div className="transaction-grid">
              <div><strong>Transaction ID</strong><p>#123ABC</p></div>
              <div><strong>Merchant</strong><p>Zee5.com</p></div>
              <div><strong>Merchant ID</strong><p>M000012</p></div>
              <div><strong>Customer ID</strong><p>M000012</p></div>
              <div><strong>Account Type</strong><p>Visa8258</p></div>
              <div><strong>Amount</strong><p>450</p></div>
              <div><strong>Currency</strong><p>INR</p></div>
              <div><strong>Timestamp</strong><p>01-02-2024 | 4:35:45</p></div>
              <div><strong>IP Address</strong><p>192.168.0.2</p></div>
              <div><strong>Action</strong><p><i className="fa-solid fa-flag red-flag"></i></p></div>
            </div>
          </section>


          <section className="card geo-card">
            <h3>Geolocation</h3>
            <div className="geo-data">
              <div>ID : <strong>0</strong></div>
              <div>Latitude : <strong>22.572645</strong></div>
              <div>Longitude : <strong>88.363892</strong></div>
              <div>Coordinates : <strong>39° N, 77° W</strong></div>
            </div>
            <div className="map-placeholder">
              <iframe 
                width="100%" 
                height="300" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=88.363892,22.572645,88.363892,22.572645&layer=hot&marker=22.572645,88.363892"
                style={{ border: '1px solid #ccc' }}>
              </iframe>
            </div>
          </section>
        </div>

        <div className="right-column">

          <section className="card risk-card">
            <div className="gauge-container">
              <canvas id="gaugeChart" width="100" height="40"></canvas>
              <p className="score-label"> 7.2 <br/>
                Risk Score</p>
            </div>
          </section>


          <section className="card device-card">  
            <h3>Device Usage</h3>
            <div className="device apple">
              <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_177_441)">
                  <path d="M25.0576 19.6581C25.0127 14.9729 28.8619 12.7243 29.0342 12.6115C26.8699 9.43044 23.4925 8.99426 22.2943 8.94914C19.4261 8.65585 16.6927 10.6487 15.2399 10.6487C13.787 10.6487 11.5404 8.99427 9.15898 9.03939C6.02868 9.08451 3.1455 10.8668 1.53542 13.6794C-1.71471 19.3422 0.704166 27.7274 3.87191 32.3223C5.42209 34.5709 7.26433 37.0977 9.69069 37C12.0272 36.9097 12.9034 35.4809 15.7266 35.4809C18.5499 35.4809 19.3437 37 21.8075 36.9473C24.3162 36.9022 25.9114 34.6611 27.4466 32.405C29.2214 29.7955 29.9553 27.2687 30.0002 27.1408C29.9478 27.1182 25.1101 25.2532 25.0576 19.6581Z" fill="black"/>
                  <path d="M20.4221 5.91098C21.7102 4.34675 22.5789 2.17337 22.3392 0C20.4895 0.0752032 18.2429 1.23333 16.9099 2.79756C15.7192 4.18882 14.6782 6.39228 14.9553 8.52053C17.0222 8.67845 19.134 7.46768 20.4221 5.90345V5.91098Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_177_441">
                    <rect width="30" height="37" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Apple<br/><small>13.0.3 (32-bit)</small></span>
            </div>
            <div className="device">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_177_458)">
                  <path d="M11.25 1.875L24 0V11.25H11.25V1.875Z" fill="#67C947"/>
                  <path d="M0 3.52498L9.75 2.09998V11.25H0V3.52498Z" fill="#E54848"/>
                  <path d="M11.25 22.125L24 24V12.75H11.25V22.125Z" fill="#F7CD48"/>
                  <path d="M0 20.475L9.75 21.9V12.75H0V20.475Z" fill="#11A2EA"/>
                </g>
                <defs>
                  <clipPath id="clip0_177_458">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Windows<br/><small>10.0.26100.26</small></span>
            </div>
            <div className="device">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_178_464)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.3598 12.0145C32.107 12.0145 31.0917 13.003 31.0917 14.2202V23.6609C31.0917 24.878 32.107 25.8666 33.3598 25.8666C34.6127 25.8666 35.625 24.878 35.625 23.6609V14.2202C35.625 13.003 34.6097 12.0145 33.3598 12.0145ZM4.64313 12.0145C3.39031 12.0145 2.375 13.003 2.375 14.2202V23.6609C2.375 24.878 3.39031 25.8666 4.64313 25.8666C5.89594 25.8666 6.90828 24.878 6.90828 23.6609V14.2202C6.90828 13.003 5.89297 12.0145 4.64313 12.0145ZM8.58563 12.0145H8.42234V28.1941C8.42234 29.4796 9.49406 30.5246 10.8152 30.5246H12.54C12.4806 30.7176 12.448 30.9224 12.448 31.1362V35.7941C12.448 37.0113 13.4662 37.9999 14.7161 37.9999C15.9659 37.9999 16.9842 37.0113 16.9842 35.7941V31.1362C16.9842 30.9224 16.9486 30.7176 16.8922 30.5246H21.1019C21.0455 30.7176 21.0128 30.9224 21.0128 31.1362V35.7941C21.0128 37.0113 22.0281 37.9999 23.278 37.9999C24.5278 37.9999 25.5491 37.0113 25.5491 35.7941V31.1362C25.5491 30.9224 25.5134 30.7176 25.4541 30.5246H27.1819C28.503 30.5246 29.5747 29.4796 29.5747 28.1941V12.0145H8.58563ZM24.2042 3.18242L24.6258 2.56195L25.0473 1.95039L25.9884 0.57289C26.1042 0.403672 26.0567 0.175078 25.8816 0.0622654C25.7094 -0.0505471 25.4719 -0.00601583 25.362 0.166172L23.9252 2.25914L23.4947 2.88852C22.1291 2.37195 20.6061 2.08398 19 2.08398C17.3939 2.08398 15.8709 2.37195 14.5053 2.88852L14.0748 2.25914L13.6503 1.63867L12.6409 0.163203C12.5252 -0.00601583 12.2906 -0.0505471 12.1155 0.0592967C11.9433 0.172109 11.8958 0.397734 12.0086 0.569922L12.9497 1.94742L13.3713 2.55898L13.7958 3.17945C10.5895 4.63414 8.41938 7.38914 8.41938 10.542H29.5747C29.5747 7.38914 27.4045 4.63414 24.2012 3.17945L24.2042 3.18242ZM14.4667 7.59992C13.8403 7.59992 13.3327 7.10711 13.3327 6.49555C13.3327 5.88398 13.8403 5.39414 14.4667 5.39414C15.0931 5.39414 15.6008 5.88695 15.6008 6.49555C15.6008 7.10414 15.0931 7.59992 14.4667 7.59992ZM23.5333 7.59992C22.9069 7.59992 22.3992 7.10711 22.3992 6.49555C22.3992 5.88398 22.9069 5.39414 23.5333 5.39414C24.1597 5.39414 24.6673 5.88695 24.6673 6.49555C24.6673 7.10414 24.1597 7.59992 23.5333 7.59992Z" fill="#95CF00"/>
                </g>
                <defs>
                  <clipPath id="clip0_178_464">
                    <rect width="38" height="38" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Android<br/><small>15, Vanilla</small></span>
            </div>
          </section>
        </div>
      </div>
      </Layouts>
    );
}

export default TransactionDetail;