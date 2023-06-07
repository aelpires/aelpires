import { Card, Col, Row, Text } from '@nextui-org/react';
import { CardButton } from './CardButton';

export const Card5 = () => {
  const handleNotifyMeClick = () => {
    // Redirect to a specific URL when "Notify Me" button is clicked
    window.location.href = 'https://business-page-reactjs.vercel.app/';
  };

  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text h3 color="black">
            Learn more about Front-End Development
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          showSkeleton
          src="https://i.ibb.co/44mqcHK/blog.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
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
                <Text weight="bold" color="black" size={13}>
                  ReactJs + GraphQl Blog
                </Text>
                <Text weight="bold" color="#333333" size={12}>
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
                Learn More
              </CardButton>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
