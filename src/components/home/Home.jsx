import React from "react";
import homecss from "../home/Home.module.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Footerhome from "./Footerhome";
const Home = () => {
  return (
    <section>
      <section className={homecss.sec1}>
        <h1>BUJO</h1>
        <p className="">a productivity tool that helps you manage your tasks, track your progress, and achieve your goals. Stay organized and stay focused.</p>
      </section>
      <section className={homecss.sec2}>
        <h1>start adding tasks</h1>
        <button className={homecss.sec2btn}>
          <Link to="/components/Tasks">add tasks</Link>
        </button>
      </section>
      <section className={homecss.sec3}>
      <Card className={homecss.cardcontainer} style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Title className="p-4  d-flex justify-content-center align-items-center"><ion-icon size="large" name="chevron-back-outline"></ion-icon></Card.Title>
        <Card.Subtitle className="mb-2 p-1 text-muted text-uppercase text-center">Track the past</Card.Subtitle>
        <Card.Text className="text-justify">
        Learn how to quickly create a record of your life that will help discover personal patterns and trends. Clearly see what is and what isn't working so that you can shed distractions and focus on what matters.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={homecss.cardcontainer} style={{ width: '18rem' }}>
      <Card.Body className="">
        <Card.Title className="pb-5 pt-5 d-flex justify-content-center align-items-center">
        <ion-icon size="large" name="chevron-down-outline"></ion-icon>
        </Card.Title>
        <Card.Subtitle className="mb-2  p-1 text-muted text-uppercase text-center">Card Subtitle</Card.Subtitle>
        <Card.Text className="text-justify">
        Easily organize your tasks, thoughts, and even your feelings. Learn a simple, flexible framework that helps you stay focused, productive, clear, and present.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={homecss.cardcontainer} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="p-5 d-flex justify-content-center align-items-center ">
        <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
        </Card.Title>
        <Card.Subtitle className="mb-2 p-1 text-muted text-center">WRITE YOUR FUTURE</Card.Subtitle>
        <Card.Text>
        Get the tools to set clear goals and create actionable plans, helping you turn your ideas into reality. Learn how to achieve the future you envision for tomorrow by living intentionally today.
        </Card.Text>
      </Card.Body>
    </Card>
      </section>
    </section>
  );
};
export default Home;
