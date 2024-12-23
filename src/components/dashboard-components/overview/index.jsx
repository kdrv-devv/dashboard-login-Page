import React from "react";
import "./owerview.scss";
import "antd/dist/reset.css";
import { Table } from "antd";
import sms from "../imges/sms.svg";
import userImg from "../imges/userUpgImg.png";
import { GoBellFill } from "react-icons/go";
import { Badge } from "antd";
import { FaPlus } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import cardImg from "../imges/card-img.png";
import { Switch } from "antd";
// swiper import
import { FaCarSide } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import img
import transactionRight from "../imges/goooo.png";
import { FaChevronRight } from "react-icons/fa6";

import mountain from "../imges/mountain-goals.svg";
import xbox from "../imges/xbox-goals.svg";
import ann from "../imges/ann.png";
import monica from "../imges/munisa.png";
import jon from "../imges/jon.png";
import mike from "../imges/mike.png";
import mia from "../imges/misa.png";
import { Link } from "react-router-dom";
// import useForm 
import { useForm} from "react-hook-form";

function myForm (){
  const {register , handleSubmit , formState:{errors} } = useForm()

  const onSubmit = (data)=>{
    console.log(data)
  }
}



const Owerview = () => {
  const data = [
    {
      key: "1",
      receiver: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: "$75.67",
    },
    {
      key: "2",
      receiver: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: "$250.00",
    },
    {
      key: "3",
      receiver: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: "$19.50",
    },
    {
      key: "4",
      receiver: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: "$350",
    },
    {
      key: "5",
      receiver: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: "$430",
    },
  ];

  // Jadval ustunlari
  const columns = [
    {
      title: "Receiver",
      dataIndex: "receiver",
      key: "receiver",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  return (
    <section className="owerview">
      <div className="dash-top">
        <div className="dash-top-left">
          <h1>Weekly sumup</h1>
          <h4>Get summary of your weekly online transactions here.</h4>
        </div>
        <div className="dash-top-right">
          <button>
            <img src={sms} alt="sms img" />
          </button>
          <Badge count={0} showZero>
            <button>
              <GoBellFill />
            </button>
          </Badge>

          {localStorage.getItem("token") ? (
            <div className="user">
              <img src={userImg} alt="img" />
              <div className="user-name">
                <h5>Andrew</h5>
                <h6>Admin account</h6>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              {" "}
              <h3 className="log-in">Log in</h3>{" "}
            </Link>
          )}
        </div>
      </div>

      <div className="dash-bottom">
        <div className="dash-bottom-left">
          <div className="card-info">
            <h3>Cards</h3>

            <div className="card-balance">
              <div className="card-swiper">
                <img src={cardImg} alt="img" />
              </div>
              <div className="sum">
                <div className="cur-balance">
                  <h4>
                    <sub>$</sub> 2850.75
                  </h4>
                  <h6>Current balance</h6>
                </div>
                <div className="income">
                  <h4>$ 1500.50</h4>
                  <p>Income</p>
                </div>
                <div className="outcome">
                  <h5>$ 350.60</h5>
                  <p>Outcome</p>
                </div>
                <div className="deactivate">
                  <Switch />
                  <h5>Deacivate card</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="transaction-history">
            <h2>Transaction history</h2>
            <div className="transaction-info">
              <Table dataSource={data} columns={columns} pagination={false} />
            </div>
          </div>
        </div>

        <div className="dash-bottom-right">
          <div className="goals">
            <div className="goals-top">
              <h3>Goals</h3>{" "}
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="goals-swiper">
              <Swiper
                className="swiper-con"
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="goals-card">
                      <div className="goals-card-top">
                        <h4>$550</h4>
                        <p>12/20/20</p>
                      </div>
                      <div className="goals-card-bottom">
                        <img src={mountain} alt="mountain" />
                        <h1>Holidays</h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card">
                      <div className="goals-card">
                        <div className="goals-card-top">
                          <h4>$850</h4>
                          <p>12/20/20</p>
                        </div>
                        <div className="goals-card-bottom">
                          <img src={xbox} alt="mountain" />
                          <h1>Renovation</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card">
                      <div className="goals-card">
                        <div className="goals-card-top">
                          <h4>$250</h4>
                          <p>12/20/20</p>
                        </div>
                        <div className="goals-card-bottom">
                          <img src={xbox} alt="mountain" />
                          <h1>Xbox</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card">
                      <div className="goals-card">
                        <div className="goals-card-top">
                          <h4>$950</h4>
                          <p>12/20/20</p>
                        </div>
                        <div className="goals-card-bottom">
                          <img src={mountain} alt="mountain" />
                          <h1>Holidays</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card">
                      <div className="goals-card">
                        <div className="goals-card-top">
                          <h4>$150</h4>
                          <p>12/20/20</p>
                        </div>
                        <div className="goals-card-bottom">
                          <img src={xbox} alt="mountain" />
                          <h1>Holidays</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="outcome">
            <h2>Outcome Statistics</h2>
            <div className="outcome-bottom">
              <div className="outcome-item">
                <button className="outcome-1">
                  <IoCartOutline />
                </button>
                <div className="outome-item-center">
                  <div class="progress-bar">
                    <div class="progress-bar-fill"></div>
                  </div>
                  <h6>Shoppping</h6>
                </div>
                <h4>52%</h4>
              </div>
              <div className="outcome-item">
                <button className="outcome-2">
                  <FaCarSide />
                </button>
                <div className="outome-item-center">
                  <div class="progress-bar2">
                    <div class="progress-bar-fill2"></div>
                  </div>
                  <h6>Electronics</h6>
                </div>
                <h4>21%</h4>
              </div>
              <div className="outcome-item">
                <button className="outcome-3">
                  <GiCommercialAirplane />
                </button>
                <div className="outome-item-center">
                  <div class="progress-bar3">
                    <div class="progress-bar-fill3"></div>
                  </div>
                  <h6>Travels</h6>
                </div>
                <h4>74%</h4>
              </div>
            </div>
          </div>

          <div className="new-transaction">
            <div className="new-transaction-left">
              <h2>New transaction</h2>
              <div className="humans">
                <div className="human">
                  <img src={ann} alt="" />
                  <h6>Ann</h6>
                </div>
                <div className="human">
                  <img src={monica} alt="" />
                  <h6>Monica</h6>
                </div>
                <div className="human">
                  <img src={jon} alt="" />
                  <h6>John</h6>
                </div>
                <div className="human">
                  <img src={mike} alt="" />
                  <h6>Mike</h6>
                </div>
                <div className="human">
                  <img src={mia} alt="" />
                  <h6>Mia</h6>
                </div>
                <div className="add">
                  <button>
                    <FaPlus />
                  </button>
                  <h6>Add New</h6>
                </div>
              </div>
              <div className="send-money">
                <div className="moeny-input">
                  <input type="number" placeholder="0" />
                  <h6>$</h6>
                </div>
                <button>
                  Send the transfer <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="new-transaction-rigth">
              <img src={transactionRight} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owerview;
