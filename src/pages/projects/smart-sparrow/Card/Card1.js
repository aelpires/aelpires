import React from 'react';
import { Card, Col, Row, Text } from '@nextui-org/react';
import { CardButton } from './CardButton';

export const Card1 = () => {
  const handleNotifyMeClick = () => {
    // Redirect to a specific URL when the button is clicked
    window.location.href = 'https://another-react-page.vercel.app/';
  };

  return (
    <Card>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            New Animations
          </Text>
          <Text h4 color="white">
            Step up your company level.
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src="https://i.ibb.co/D70dpQs/codecove.png"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Card image background"
      />
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#0f111466',
          borderTop: '$borderWeights$light solid $gray800',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  ReactJs + Animate.Css + NodeMailer
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <CardButton
                auto
                size="mysize"
                color="mycolor2"
                onClick={handleNotifyMeClick}
              >
                Take a look
              </CardButton>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
