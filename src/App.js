import React, { useEffect, useState } from "react";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [notificationCount, setNotificationCount] = useState("3");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      });
  }, []);

  return (
    <div className="container">
      <section className="content">
        <header className="header">
          <h1 className="header__title">
            Notifications
            <span className="header__count">{notificationCount}</span>
          </h1>
          <button className="header__btn">
            <span>Mark all as read</span>
          </button>
        </header>

        <main className="main">
          <Notification data={notifications} />
        </main>
      </section>
    </div>
  );
}

export default App;
