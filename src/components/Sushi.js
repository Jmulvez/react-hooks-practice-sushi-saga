import React, { useEffect, useState } from "react";

function Sushi(props) {
  const [sushi, setSushi] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => setSushi(data))
  }, [])
  return (
    <div className="sushi">
      <div className="plate" onClick={setSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.image}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
