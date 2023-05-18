import React from 'react';
import { toast } from 'react-toastify';
import icons from "../../../utils/icons";

function AddCard({setBank, bank}) {
    const [cardNumber, setCardNumber] = React.useState("")
    const [shabaNumber, setShabaNumber] = React.useState("")
    const [cardErr, setCardErr] = React.useState("")
    const [shabaErr, setShabaErr] = React.useState("")

    const onChangeCard = (e)=>{
        const v = e.target.value.replace(/[^0-9]/g, "")
        if(v.length >16) return false;
        setCardNumber(v)
        if(v.length !== 16) setCardErr("16 رقمی")
        else setCardErr("")

    }
    const onChangeShaba = (e)=>{
        const v = e.target.value.replace(/[^0-9]/g, "")
        if(v.length >22) return false;

        setShabaNumber(v)
        if(v.length !== 22) setShabaErr("22 رقمی")
        else setShabaErr("")

    }
    
  const removeItem = (card) => {
    setBank(bank=>bank.filter((i) => i.card !== card));
  }
    return  <section data-aos="fade-up" id="debit-card">
    <p className="form-title">اطلاعات بانکی</p>
        <div>
        <div className={"authentication-input-text-container authentication-input-text-container-one with-counter " + (cardErr?"with-error":"")}>
            <input
            type="text"
            onChange={(e) => onChangeCard(e)}
            style={{ textAlign: "left" }}
            value={cardNumber}
            />
            {cardNumber && <small className="text-counter">{cardNumber.length}/16</small>}

            {cardErr&& <span className='error-text'>{cardErr}</span>}
            <label style={{ top: cardNumber !== "" ? "-10px" : null }}>
            شماره کارت
            </label>
        </div>

        <div className={"authentication-input-text-container authentication-input-text-container-one with-counter " + (shabaErr?"with-error":"")}>
            <input
            type="text"
            onChange={(e) => onChangeShaba(e)}
            style={{ textAlign: "left" }}
            value={shabaNumber}
            />
            {shabaErr&& <span className='error-text'>{shabaErr}</span>}
            {shabaNumber && <small className="text-counter">{shabaNumber.length}/22</small>}
            <label style={{ top: shabaNumber !== "" ? "-10px" : null }}>
            شماره شبا  بدون IR
            </label>
        </div>

        

        <button
        className="btn btn-primary-gradient"
            type="button"
            onClick={e=>{
            const already = bank.filter(i=>i.card===cardNumber)
            if(already.length) {toast.warning("کارت از قبل موجود می باشد"); return false}
            if(!cardErr && !shabaErr && shabaNumber && cardNumber){
                setBank(s=>[...s, {card: cardNumber, shaba: "IR"+shabaNumber}])
                setCardNumber("")
                setShabaNumber("")
            }
            }}
        >
            ثبت کارت
        </button>
        </div>
        {bank.map((item, idx) => (
        <div className="bank-container" key={idx}>
            <p className="custon-ones-one">{item.card}</p>
            <p className="custon-ones-one">{item.shaba}</p>
            <img src={icons.others.bin} onClick={() => removeItem(item.card)} />
        </div>
        ))}

        </section>
}

export default AddCard;
