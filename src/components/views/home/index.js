import React from 'react';
import {
    Container,
    Col,
    Row,
    Card
} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import {
    FullPageSection
} from '../../shared/styled';
import {
    TitleText,
    IntroText
} from './styled';

export default () => {
    return (
        <Container fluid className="p-0">
            <FullPageSection
                backgroundColor={({ theme }) => theme.colors.primary.base}
                className="d-flex flex-column align-items-center"
            >
                <TitleText className="m-2">
                    Synthesis Workshop Videos
                </TitleText>
                <Row
                    className="w-50 flex-grow-1 d-flex flex-column justify-content-center"
                >
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=1q1cQg8tWGM"
                        controls={true}
                        width="100%"
                    />
                </Row>
                <Row className="ml-5 mr-5 mb-5">
                    <IntroText>
                        <p>
                            Synthesis Workshop is an open access video podcast exploring the field of organic synthesis.
                            Through four complementary modules - Total Synthesis, Named Reactions, Research Spotlights,
                            and Culture of Chemistry - we investigate advances in many areas of the field and delve into
                            the “human aspects” of having a career in chemistry.
                        </p>
                    </IntroText>
                </Row>
            </FullPageSection>
        </Container>
    )
}