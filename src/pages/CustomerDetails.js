import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layouts from '../components/layouts';
import '../pages/css/styles.css';
import '../pages/css/customerdetails.css';

function CustomerDetails() { 

    
    return (
        <Layouts title="Customer Details">
    <div className="customer-details-main-container">
    <div className="dashboard">
      <div className="left-column">
        <div className="box personal">
          <div className="section-header">
            <h3>Personal</h3>
            <span className="arrow">▼</span>
          </div>
          <div className="info-table">
            <div className="table-row">
              <div className="table-cell">
                <div className="label">Customer ID</div>
                <div className="value">#123ABC</div>
              </div>
              <div className="table-cell">
                <div className="label">First Name</div>
                <div className="value">Avon</div>
              </div>
              <div className="table-cell">
                <div className="label">Middle Name</div>
                <div className="value">Peter</div>
              </div>
              <div className="table-cell">
                <div className="label">Last Name</div>
                <div className="value">Rodriguez</div>
              </div>
              <div className="table-cell">
                <div className="label">Date of Birth</div>
                <div className="value">17/06/1988</div>
              </div>
              <div className="table-cell">
                <div className="label">Gender</div>
                <div className="value">Male</div>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <div className="label">Email address</div>
                <div className="value">PeterJRodriguez@dayrep.com</div>
              </div>
              <div className="table-cell">
                <div className="label">Phone Number</div>
                <div className="value">818-837-2203</div>
              </div>
              <div className="table-cell address-cell">
                <div className="label">Billing Address</div>
                <div className="value">
                  <div>4723 Koontz Lane</div>
                  <div>San Fernando, CA 91340</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="box account">
          <div className="section-header">
            <h3>Account Details</h3>
            <span className="arrow">▼</span>
          </div>
          <div className="customer-details-container">
            <table className="account-info-table">
              <tr>
                <td className="info-box">Account Number : <b>**1234</b></td>
                <td className="info-box">Type : <b>Savings</b></td>
                <td className="info-box">Customer Since : <b>19-02-2020</b></td>
              </tr>
            </table>

            <div className="section-title">Card Type</div>
            <table>
              <thead>
                <tr>
                  <th>Card No.</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>**1234</td>
                  <td>Debit</td>
                  <td>Visa</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**1234</td>
                  <td>Credit</td>
                  <td>Master</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**1234</td>
                  <td>Debit</td>
                  <td>Visa</td>
                  <td><span className="status-inactive">Inactive <span className="dot dot-red"></span></span></td>
                </tr>
                <tr>
                  <td>**1234</td>
                  <td>Credit</td>
                  <td>Master</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
              </tbody>
            </table>

            <div className="section-title">UPI ID</div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Linked To</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>GooglePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>GooglePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>PhonePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>GooglePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>PhonePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>GooglePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>PhonePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
                <tr>
                  <td>**abc@oksbi</td>
                  <td>PhonePay</td>
                  <td><span className="status-active">Active <span className="dot dot-green"></span></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="right-column">
        <div className="box graph">
          <div className="top-section">
            <div className="risk-score">
              <span>Risk Score</span>
              <span className="score">2.2</span>
            </div>
            <div className="profile-image">
              <img src="https://i.ibb.co/GfMDrJyZ/svgviewer-png-output-11.png" alt="Profile Image"/>
            </div>
          </div>
          <h4>Transaction Frequency</h4>
          <div className="graph-box">
            <div className="graph-header">
              <p>Total, Monthly till June 2011</p>
              <button>Apply date range</button>
            </div>
            <img src="https://i.ibb.co/Ndy7DCGQ/svgviewer-png-output-8.png" alt="Transaction Graph"/>
          </div>
          <div className="graph-box">
            <div className="graph-header">
              <p>Total, Monthly till June 2011</p>
              <button>Apply date range</button>
            </div>
            <img src="https://i.ibb.co/Ndy7DCGQ/svgviewer-png-output-8.png" alt="Amount Graph"/>
          </div>
          <div className="graph-box">
            <div className="graph-header">
              <p>Total, Monthly till June 2011</p>
              <button>Apply date range</button>
            </div>
            <img src="https://i.ibb.co/qM5wkwPC/svgviewer-png-output-10.png" alt="Frequency Graph"/>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Layouts>
    );
}

export default CustomerDetails;