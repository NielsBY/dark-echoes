import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an Episode</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>
          {selectedEpisode.title} is about {selectedEpisode.description}
        </p>
      </section>
    );
  }

  function Selection() {
    return (
      <section className="selection">
        <h2>Episode Selection</h2>
        <ul className="selection">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episode Selector</h1>
      </header>
      <main>
        <Selection />
        <EpisodeDetails />
      </main>
    </>
  );
}
