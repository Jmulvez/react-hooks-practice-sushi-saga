import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const [sushis, setSushi] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => setSushi(data))
  }, [])

  const getAllSushi = sushis.map((sushi) => {
    return <Sushi key={sushi.id} name={sushi.name} image={sushi.image} price={sushi.price} />
  })
  return (
    <div className="belt">
      {getAllSushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
