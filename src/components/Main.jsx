import React from "react";
import "../styles/Main.css";
import car1 from "../assets/first-car.png";
import plastic from "../assets/plastic.png";
import motorcycle from "../assets/motocycle.png";
import tyers from "../assets/tyers.png";
import arrow1 from '../assets/Arrow 1.png'
const Main = () => {
  return (
    <>
      <div className="container my-4 my-md-4 main px-md-5 pb-md-5 d-md-flex row align-items-center m-auto">
        <p className="text-dark text-md-center m-auto main-p pb-5">
          What We Do
        </p>
        <div className="sub-main mb-5">
          <div className="d-lg-flex align-items-center gap-5 p-5">
            <img src={car1} alt="car1" className="main-img img-fluid m-auto" />
            <div className=" ">
              <div className="mb-5 d-flex row gap-3">
                <h2 className="m-auto pt-4">Automobile Manufacturing</h2>
                <p className="text-dark sub-p">
                  Innoson Vehicle Manufacturing [IVM] introduces automotive
                  products from China, Japan and Germany. Our product line
                  includes heavy duty vehicles, middle and high level buses,
                  special environment friendly vehicles. The company carries out
                  optimization design and assembly according to African road
                  condition so as produce suitable products at affordable
                  prices.
                </p>
              </div>
              <button className="btn-1">Learn More <img src={arrow1} alt="" className="arrow" /></button>
            </div>
          </div>
        </div>
        {/* FOR PLASTICS */}
        <div className="sub-main mb-5">
          <div className="d-lg-flex align-items-center gap-5 p-5">
            <div className="mb-5 d-flex row gap-3">
            <img src={plastic} alt="car1" className="main-img img-fluid d-lg-none" />
              <h2 className="m-auto">Plastic Manufacturing</h2>
              <p className="text-dark sub-p">
                Innoson Technical & Industrial Co. Ltd manufactures high quality
                household and industrial plastics, health & safety accessories,
                storage containers, fixtures & fittings, electrical components &
                accessories. Plastic products manufactured include; plastic
                chairs, tables, trays, plates, spoons, cups, jerry cans of
                different sizes and many other allied products.
              </p>
              <button className="btn-2 ms-2">Learn More <img src={arrow1} alt="" className="arrow" /></button>
            </div>
            <img src={plastic} alt="car1" className="main-img img-fluid d-lg-block d-none" />
          </div>
        </div>
        {/* FOR MOTORCYCLE */}
        <div className="sub-main mb-5">
          <div className="d-lg-flex align-items-center gap-5 p-5">
            <img src={motorcycle} alt="car1" className="main-img img-fluid" />
            <div className=" ">
              <div className="mb-5 d-flex row gap-3">
                <h2 className="m-auto">Motorcycle Manufacturing</h2>
                <p className="text-dark sub-p">
                  Innoson Nigeria Limited Nnewi Manufactures motorcycles,
                  tri-cycles, spare parts and accessories. We pioneered the
                  first Made-in-Nigeria Motorcycle brand that sold for as low as
                  N60,000. By year 2002, we successfully drove out tokunbo
                  (foreign used) motorcycles out of Nigeria forever
                </p>
              </div>
              <button className="btn-1">Learn More <img src={arrow1} alt="" className="arrow" /></button>
            </div>
          </div>
        </div>
        {/* FOR TYERS */}
        <div className="sub-main ">
          <div className="d-lg-flex align-items-center gap-5 p-5">
            <div className="mb-5 d-flex row gap-3">
            <img src={tyers} alt="car1" className="main-img img-fluid d-lg-none" />
              <h2 className="m-auto">Tires & Tubes Manufacturing</h2>
              <p className="text-dark sub-p">
                General Tyres & Tubes Co. Ltd Enugu, manufacturers of high
                quality tyres & Tubes. The plant has a production capacity of
                about 8,000 pieces of motorcycle tyres daily and 13,000 tubes
                daily.
              </p>
              <button className="btn-2 ms-2">Learn More <img src={arrow1} alt="" className="arrow" /></button>
            </div>
            <img src={tyers} alt="car1" className="main-img img-fluid d-lg-block d-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
