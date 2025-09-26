import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Tickets.css";

const Tickets = ({ setProgressCount }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch("/assets/tickets.json");
      const data = await response.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  const [ongoingTickets, setOngoingTickets] = useState([]);

  const ticketClickHandler = (ticket) => {
    toast("Added to Ongoing Tickets!");

    if (!ongoingTickets.find((t) => t.id === ticket.id)) {
      setOngoingTickets([...ongoingTickets, ticket]);
    }
    setProgressCount((prev) => prev + 1);
  };

  const completedHandler = () => {
    toast("Clicked Complted button");
  };

  return (
    <div id="tickets-container">
      <div className="tickets-cards-parent">
        <p className="tickets-title">Customer Tickets</p>
        <div className="tickets-gallery">
          {tickets.map((ticket) => (
            <div
              className="ticket-card"
              onClick={() => ticketClickHandler(ticket)}
            >
              <div className="tickets-1st">
                <p className="ticket-title">{ticket.title}</p>
                <div
                  className="ticket-status"
                  style={{
                    backgroundColor:
                      ticket.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                  }}
                >
                  {ticket.status}
                </div>
              </div>
              <p className="ticket-desc">{ticket.description}</p>
              <div className="ticket-3rd">
                <div className="ticket-3rd-left">
                  <p className="ticket-id">{ticket.id}</p>
                  <p
                    className="ticket-priority"
                    style={{
                      color: ticket.priority === "High" ? "#F83044" : "#FEBB0C",
                    }}
                  >
                    {ticket.priority}
                  </p>
                </div>
                <p className="ticket-username">
                  <img className="user-svg" src="./assets/user.svg" alt="" />
                  {ticket.username}
                </p>
                <p className="ticket-date">
                  <img className="date-svg" src="./assets/date.svg" alt="" />
                  {ticket.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ongoing-tickets-abba">
        <p className="tickets-title">Ongoing Tickets</p>
        <div className="ongoing-cards">
          {ongoingTickets.length === 0 && <p>Click on a ticket to add.</p>}
          {ongoingTickets.map((ticket) => (
            <div key={ticket.id} className="ongoing-card">
              <p className="ongoing-card-title">{ticket.title}</p>
              <button
                className="ongoing-card-btn"
                onClick={() => completedHandler()}
              >
                Complete
              </button>
            </div>
          ))}
        </div>

        <div className="resolved-abba">
          <p className="resolved-title2">Resolved Task</p>
          <p className="resolved-subtitle">No resolved tasks yet.</p>
          {/* <div className="resolved-cards">
            {" "}
            <p className="resolved-card-title">Email server outage</p>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
