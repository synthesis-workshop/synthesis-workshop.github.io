import React from "react";

import { BLUE, RED, GREEN, YELLOW } from "../../../shared/constants";
import videos from "../../../shared/videos.json";

const VID_ID = "{VID_ID}";
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${VID_ID}`;
const allVideos = [
  ...videos["total-synthesis"].map((video) => ({
    ...video,
    type: "total-synthesis",
  })),
  ...videos["research-spotlight"].map((video) => ({
    ...video,
    type: "research-spotlight",
  })),
  ...videos["named-reactions"].map((video) => ({
    ...video,
    type: "named-reactions",
  })),
  ...videos["culture-of-chemistry"].map((video) => ({
    ...video,
    type: "culture-of-chemistry",
  })),
].sort((a, b) => {
  return a.episodeNumber - b.episodeNumber;
});

export default () => {
  return (
    <>
      <section id="episode-list" className="episode-list">
        <div className="container">
          <div className="section-title">
            <h2>Episode Directory</h2>
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            {/* <div className="col-lg-4 d-flex align-items-center justify-content-center">
                            <img width="100%" src="img/about.svg" className="img-fluid" alt="" />
                        </div> */}
            <div className="col-lg-10">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Episode Number</th>
                    <th scope="col">Episode Title</th>
                    <th scope="col">Episode Type</th>
                  </tr>
                </thead>
                <tbody>
                  {allVideos.map((video) => {
                    let color =
                      video.type === "total-synthesis"
                        ? BLUE
                        : video.type === "research-spotlight"
                        ? GREEN
                        : video.type === "named-reactions"
                        ? RED
                        : YELLOW;
                    let type =
                      video.type === "total-synthesis"
                        ? "Total Synthesis"
                        : video.type === "research-spotlight"
                        ? "Research Spotlight"
                        : video.type === "named-reactions"
                        ? "Named Reaction"
                        : "Culture of Chemistry";
                    return (
                      <tr key={video.videoId}>
                        <th scope="row">{video.episodeNumber}</th>
                        <td>
                          <a
                            style={{ color, fontWeight: "bold" }}
                            href={YOUTUBE_WATCH_URL.replace(
                              VID_ID,
                              video.videoId
                            )}
                          >
                            {video.displayTitle}
                          </a>
                        </td>
                        <td style={{ color, fontWeight: "bold" }}>{type}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
