import React from "react";
import "./css/RankContainer.css";

const RankContainer = (props) => {
  console.log(props);
  return (
    <div className="rank-cotainer">
      {
        [1,2,3,4].map(item=>{
          return <div key={item}
                  onClick={() => {
                    if (+props.userRank === +item  ){
                      if(props.showHoverLevel){
                        props.setShowHoverLevel(false);
                      }else{
                        props.handleRank(item);
                        props.setShowHoverLevel(true);
                      }

                    }else{
                      props.handleRank(item);
                      props.setShowHoverLevel(true);                     
                    }
                  }}
                >
                  <p className={props.rank===item?"text-danger":""}>{item}</p>
                  {Array.from({length: item}).map(x=><div/>)}
            </div>
        })
      }
    </div>
  );
};

export default RankContainer;
