import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const submissions = [
  {
    name: "NaTMP Catalyzed Perdeuteration of Unactivated Arenes via Hydrogen Isotope Exchange",
    authors: "Andreu Tortajada and Eva Hevia, University of Bern",
    image: "/img/andreu_tortajada.jpg",
  },
  {
    name: "Oxidative Cyclisation of Vinyl Silanes: Mild Access to Strained, Saturated Heterocycles",
    authors: "Dean D. Roberts & Mark G. McLaughlin, Lancaster University",
    image: "/img/dean_roberts.png",
  },
];

const SubmissionGrid = styled.div`
  gap: 16px;
  flex-wrap: wrap;

  .image-panel {
    max-width: 500px;
    padding: 32px;
    text-align: left;
    font-weight: bold;
    background-color: #f7f8fa;
  }

  p {
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .expandable-image {
    max-width: 100%;
    height: 250px;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 2px solid transparent;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .expandable-image:hover {
    border: 2px solid #ffc107;
  }

  .expandable-image::before {
    opacity: 0;
    content: "Click to enlarge";
    background: rgba(45, 53, 69, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    color: #ffc107;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
  }

  .expandable-image:hover::before {
    opacity: 1;
  }

  .title {
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 4px;
  }

  .subtitle {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }

  .download {
    font-size: 14px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};

  :hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export default () => {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <section
        id="posters"
        className="d-flex align-items-center justify-content-center section-bg"
      >
        <div className="container position-relative">
          <h1>Posters</h1>
          <p className="text-white mt-2">
            If you are interested in sharing your published work in the form of
            a virtual research poster, feel free to reach out via{" "}
            <StyledLink href="mailto:synthesisworkshopvideos@gmail.com">
              synthesisworkshopvideos@gmail.com
            </StyledLink>{" "}
            and download the{" "}
            <StyledLink download href="downloads/poster_template.pptx">
              template
            </StyledLink>
            .
          </p>
          <SubmissionGrid className="d-flex justify-content-center mt-4">
            {submissions.map((submission) => (
              <div className="image-panel rounded">
                <div
                  className="expandable-image"
                  style={{ backgroundImage: `url(${submission.image})` }}
                  onClick={() => setShowModal(submission)}
                />
                <p className="title">{submission.name}</p>
                <p className="subtitle">{submission.authors}</p>
                <a className="download" href={submission.image} download>
                  <i className="bx bx-download mr-1" />
                  Download
                </a>
              </div>
            ))}
          </SubmissionGrid>
        </div>
        <Modal size="xl" show={showModal} onHide={() => setShowModal(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{showModal?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="w-100"
              src={showModal?.image}
              alt={showModal?.name}
            />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};
