import React from "react";
import { Link, Outlet } from "react-router-dom";
import './dashboard-component.scss'
import bulutImg from './imges/bulutpng.png'
import Up  from './imges/upUpg.svg'
import bars from './imges/bars.svg'
import card from './imges/card.svg'
import file from './imges/file.svg'
import medal from './imges/medal.png'
import setting from './imges/settingis.svg'
import cloudBottom from './imges/bottom-cloud.svg'

import { FaArrowUpLong } from "react-icons/fa6";
const DashboardComponents = () => {
  return <section className="dashboard">
        <div className="container">

          <nav className="panel">
            <div className="panel-top">
              <div className="bulut">
                <img src={bulutImg} alt="Cloud " />
              </div>

              <nav className="dashboard-links">
                <Link to={'/'}>
                <div className="dashboard-link-item" style={{backgroundColor:'#F0F7FF'}}>
                  <img src={Up} alt="" />
                  <h5 style={{color:'#197BBD'}}>Overview</h5>
                </div>
                </Link>
                <Link to={'/transactions'}>
                <div className="dashboard-link-item">
                  <img src={bars} alt="" />
                  <h5>Transactions</h5>
                </div>
                </Link>
                <Link to={'/cards'}>
                <div className="dashboard-link-item">
                  <img src={card} alt="" />
                  <h5>Cards</h5>
                </div>
                </Link>
                <Link to={'/invoices'}>
                <div className="dashboard-link-item">
                  <img src={file} alt="" />
                  <h5>Invoices</h5>
                </div>
                </Link>
                <Link to={'/goals'}>
                <div className="dashboard-link-item">
                  <img src={medal} alt="" />
                  <h5>Goals</h5>
                </div>
                </Link>
                <Link to={'/settings'}>
                <div className="dashboard-link-item">
                  <img src={setting} alt="" />
                  <h5>Settings</h5>
                </div>
                </Link>
              </nav>

            </div>
            <div className="panel-bottom">
                <img src={cloudBottom} alt="img" />
                <h6>Give your money
                awesome space in cloud</h6>
                <button>Upgrade to premium <FaArrowUpLong /></button>
            </div>
          </nav>


          <Outlet/>
        </div>
        </section>;
};

export default DashboardComponents;
