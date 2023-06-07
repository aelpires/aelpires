import React from 'react';
import { Card, Col, Row, Text } from '@nextui-org/react';
import { CardButton } from './CardButton';

export const Card2 = () => {
  const handleNotifyMeClick = () => {
    // Redirect to a specific URL when "Notify Me" button is clicked
    window.location.href = 'https://business-page-reactjs.vercel.app/';
  };

  return (
    <Card css={{ w: '100%' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Planning a new project?
          </Text>
          <Text h4 color="white">
            Start from here
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src="https://i.ibb.co/NtVz6CQ/bank.jpg"
        width="100%"
        height={340}
        objectFit="cover"
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
                  ReactJs + TailwindCss
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Managed by GraphCMS.
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
