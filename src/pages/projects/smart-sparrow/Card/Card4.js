import React from 'react';
import { Card, Col, Row, Text } from '@nextui-org/react';
import { CardButton } from './CardButton';

export const Card4 = () => {
  const handleNotifyMeClick = () => {
    // Redirect to a specific URL when the button is clicked
    window.location.href = 'https://react-weather-app-ten-sable.vercel.app/';
  };

  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="red">
            New
          </Text>
          <Text h3 color="black">
            Weather App
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://i.ibb.co/J5Nj4LD/weather.png"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text weight="bold" color="black" size={13}>
              Available soon.
            </Text>
            <Text color="black" size={14}>
              Try Beta Version.
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
            <CardButton
                auto
                size="mysize"
                color="mycolor2"
                onClick={handleNotifyMeClick}
              >
                Try Now
              </CardButton>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
