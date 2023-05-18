import React from "react";
import "./css/HomeFeeBox.css";
import IRT from '../../common/IRT'
const HomeFeeBox = (props) => {
  return (
    <div className="home-fee-box-container" data-aos="fade-up" data-aos-delay={props.delay+1700}>
      <div>
        <div>
        <img className="logo-crypto" src={require("../../../assets/images/logo-crypto/"+ props.acronym +".png").default} />

          <p className="home-fee-box-margin-right home-fee-box-currency-type">
            {props.currencyType}
          </p>
          <p className="home-fee-box-margin-right home-fee-box-low-opacity acronym-and-price">
            {props.acronym}
          </p>
        </div>

        <div>
          <p className="home-fee-box-orange acronym-and-price">
            {!props.IRT?
              props.purchagePrice:
              <IRT amount={props.purchagePrice}/>
            }
          </p>

          {props.IRT?<p className="home-fee-box-margin-right home-fee-box-low-opacity home-fee-box-orange home-fee-box-currency-description">
            تومان
          </p>:null}
        </div>
      </div>

      <div>
        <p className="home-fee-box-fee-description">قیمت خرید از ما</p>
        <div>
          <p className="acronym-and-price">
            {!props.IRT?
            props.purchagePrice:
            <IRT amount={props.purchagePrice} />
            }
          </p>
          {props.IRT?<p className="home-fee-box-margin-right home-fee-box-low-opacity home-fee-box-currency-description">
            تومان
          </p>:null}
        </div>
      </div>

      <div>
        <p className="home-fee-box-fee-description">قیمت فروش به ما</p>
        <div>
          <p className="acronym-and-price">
            {props.IRT? 
            <IRT amount={props.sellPrice}/>:props.sellPrice}
          </p>
          {props.IRT? <p className="home-fee-box-margin-right home-fee-box-low-opacity home-fee-box-currency-description">
            تومان
          </p>:null}
        </div>
      </div>
    </div>
  );
};

export default HomeFeeBox;
