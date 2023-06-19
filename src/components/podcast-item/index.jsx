import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PodcastItem = (props) => {
  console.log(props)
  const { category, id, link, rights, summary, title } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/podcast/" + id.attributes["im:id"])}>
      <img src={props["im:image"][0].label} />
      {title.label}
      <p>Author: {props["im:artist"].label} </p>
    </div>
  )
}

export default PodcastItem