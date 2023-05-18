import React from "react";
import "./css/HoverUserLevel.css";
import {useSelector} from 'react-redux'
const HoverUserLevel = (props) => {
  const [number, setNumber] = React.useState(0)
  const [fee, setFee] = React.useState(0)
  const fees = useSelector(state=>state.kucoin.fees)
  console.log(props);
  React.useEffect(()=>{
    if(fees && fees["ETH"]){
      setFee(fees["ETH"][props.rank-1])
    }
    switch (props.rank) {
      case 1:
        setNumber("تا 20 میلیون ")
        break;
      case 2: 
        setNumber("20 تا 50 میلیون ")
        break
      case 3: 
        setNumber("50 تا 100 میلیون ")
        break
      case 4: 
          setNumber("بالای 100 میلیون ")
          break
      default:
        break;
    }
  }, [props.rank])
  return (
    <div
      className="hover-user-level-container"
      style={{ display: props.display }}
    >
      <div>
        <p>سطح {props.rank.toLocaleString("fa")} کاربری</p>
        <p>کارمزد {fee}٪</p>
      </div>

      <div>
        <p>حجم معامله برای این سطح</p>

        <p>{number.toLocaleString("fa")} تومان</p>
      </div>

      
    </div>
  );
};

export default HoverUserLevel;
