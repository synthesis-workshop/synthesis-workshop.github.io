import React from "react";
import downloads from "../../../shared/downloads.json";

export default () => {
  return (
    <>
      <section id="downloads" className="downloads">
        <div className="container">
          <div className="section-title">
            <h2>Downloads</h2>
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>File</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((download) => (
                  <tr key={download.title}>
                    <td>
                      <a href={download.path} download>
                        <button className="btn btn-primary">Download</button>
                      </a>
                    </td>
                    <td>{download.title}</td>
                    <td>{download.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
