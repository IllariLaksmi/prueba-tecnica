import React, { useState, useEffect } from 'react'
import { getData } from '../../services/data';
import PodcastItem from '../../components/podcast-item';
const Main = () => {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("")

  useEffect(() => {
    getData().then(data => setData(data))
  }, []);

  const renderPodcasts = () => {
    const { feed } = data;

    if (feed) {
      return feed.entry.map((podcast, key) => {
        if (podcast["im:artist"].label.toLowerCase().includes(filterValue.toLowerCase()) || podcast.title.label.toLowerCase().includes(filterValue.toLowerCase()))
          return <PodcastItem key={key} {...podcast} />
      })
    }
  }

  return (
    <>
      <h1>Podcaster</h1>
      <hr />
      <input value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />

      {renderPodcasts()}
    </>
  )
}

export default Main