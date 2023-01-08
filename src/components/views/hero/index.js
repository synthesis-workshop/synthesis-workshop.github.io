import React from "react";
import styled from "styled-components";

const NewCTA = styled.a`
  position: relative;

  .new-flag {
    position: absolute;
    top: -30px;
    right: -25px;
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: bold;
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover .new-flag {
    opacity: 1;
  }
`;

export default () => {
  return (
    <>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container position-relative">
          <h1>Synthesis Workshop</h1>
          <h2>Exploring the Art of Organic Synthesis</h2>
          <a
            href="https://www.youtube.com/c/SynthesisWorkshopVideos/featured"
            className="btn-get-started scrollto"
          >
            See Our Channel
          </a>
          <NewCTA
            href="#tw-symposium"
            className="btn-get-started scrollto ml-2"
          >
            Virtual Posters
            <span className="new-flag">New!</span>
          </NewCTA>
        </div>
      </section>
    </>
  );
};
