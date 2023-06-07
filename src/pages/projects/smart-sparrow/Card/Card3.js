import React, { useState } from 'react';
import { Card, Col, Row, Text } from '@nextui-org/react';
import { CardButton } from './CardButton';

export const Card3 = () => {
  const [gifSrc, setGifSrc] = useState('static_image.jpg');

  const handleMouseEnter = () => {
    setGifSrc('https://i.ibb.co/6rGjK89/Untitled.gif');
  };

  const handleMouseLeave = () => {
    setGifSrc('https://i.ibb.co/KbGYzC6/Sem-T-tulo.jpg');
  };

  const handleNotifyMeClick = () => {
    // Redirect to a specific URL when "Notify Me" button is clicked
    window.location.href = 'https://apple-3-d-page.vercel.app/';
  };

  return (
    <Card css={{ bg: '$black', w: '100%' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            ThreeJs
          </Text>
          <Text h4 color="white">
            Create animations like a beast
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        placeholder={'https://i.ibb.co/KbGYzC6/Sem-T-tulo.jpg'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={gifSrc}
        width="100%"
        height={340}
        objectFit="cover"
        alt="Card image background"
      />
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
            <Text color="white" size={12}>
              iPhone Page.
            </Text>
            <Text color="white" size={9.5}>
              Created with ViteJs and ThreeJs.
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
                Take a look
              </CardButton>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
