import React from "react";
import problemSets from "../../../shared/problem-sets.json";

const VID_ID = "{VID_ID}";
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${VID_ID}`;

export default () => {
  return (
    <>
      <section id="problem-sets" className="episode-list">
        <div className="container">
          <div className="section-title">
            <h2>Problem Sets</h2>
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-10">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Topic</th>
                    <th scope="col">Problem Set Link</th>
                    <th scope="col">Solution Set Link</th>
                    <th scope="col">Related Video</th>
                  </tr>
                </thead>
                <tbody>
                  {problemSets.map((set) => {
                    return (
                      <tr key={set.videoId}>
                        <th scope="row">{set.topic}</th>
                        <td>
                          <a href={set.problemSetLink} download>
                            <button className="btn btn-primary">
                              Download
                            </button>
                          </a>
                        </td>
                        <td>
                          <a href={set.solutionSetLink} download>
                            <button className="btn btn-primary">
                              Download
                            </button>
                          </a>
                        </td>
                        <td>
                          {set.relatedVideoId ? (
                            <a
                              style={{ fontWeight: "bold" }}
                              href={YOUTUBE_WATCH_URL.replace(
                                VID_ID,
                                set.relatedVideoId
                              )}
                            >
                              Episode Link
                            </a>
                          ) : (
                            <span>-</span>
                          )}
                        </td>
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
