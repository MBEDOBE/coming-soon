import React, { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './counter.css';

export default function Counter() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let timeInterval = useRef();

  const startTimer = () => {
    const launchDate = new Date('July 30 2022 00:00:00').getTime();

    timeInterval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeDifference = launchDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (timeDifference < 0) {
        //stop
        clearInterval(timeInterval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let timeInterval = null; //to resolve eslint issue (The ref value timeInterval.current will likely have changed by the time this effect cleanup function runs)
    startTimer();
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div>
      <h1 className="m-5">Mbedobe's Portfolio Website</h1>
      <h2 className="m-4">Coming Soon In </h2>
      <Row>
        <Col>
          <Card
            border="info"
            style={{ width: '10rem', height: '12rem' }}
            className="mx-4"
          >
            <Card.Header>DAYS</Card.Header>
            <Card.Body>
              <Card.Title>{String(timerDays).padStart(2, '0')}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="mx-4"
            border="info"
            style={{ width: '10rem', height: '12rem' }}
          >
            <Card.Header>HOURS</Card.Header>
            <Card.Body>
              <Card.Title>{String(timerHours).padStart(2, '0')}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="mx-4"
            border="info"
            style={{ width: '10rem', height: '12rem' }}
          >
            <Card.Header>MINUTES</Card.Header>
            <Card.Body>
              <Card.Title>{String(timerMinutes).padStart(2, '0')}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="mx-4"
            border="info"
            style={{ width: '10rem', height: '12rem' }}
          >
            <Card.Header>SECONDS</Card.Header>
            <Card.Body>
              <Card.Title>{String(timerSeconds).padStart(2, '0')}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button
        variant="outline-info"
        className="my-5 btn-contact"
        type="button"
        onClick={(e) => {
          window.open('https://github.com/MBEDOBE', '_blank');
        }}
      >
        <i className="fa-brands fa-github"></i> Say Hi On Github
      </Button>
    </div>
  );
}
