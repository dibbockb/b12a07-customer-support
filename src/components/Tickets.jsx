import React, { useState, useEffect } from "react";
import "./Tickets.css";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch("/assets/tickets.json");
      const data = await response.json();
      setTickets(data);
      // console.log("fetched");
    };

    fetchTickets();
  }, []);

  // console.log("Fetched tickets:", tickets);

  return (
    <div id="tickets-container">
      <div className="tickets-cards-parent">
        <p className="tickets-title">Customer Tickets</p>
        <div className="tickets-gallery">
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[0]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[0]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[0]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[0]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[0]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[0]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[0]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[2]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[2]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[2]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[2]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[2]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[2]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[2]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[2]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[2]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[2]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[2]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[3]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[3]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[3]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[3]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[3]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[3]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[3]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[3]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[3]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[4]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[4]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[4]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[4]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[4]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[4]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[4]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[4]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[4]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[5]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[5]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[5]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[5]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[5]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[5]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[5]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[5]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[5]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[6]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[6]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[6]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[6]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[6]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[6]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[6]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[6]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[6]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[7]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[7]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[7]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[7]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[7]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[7]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[7]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[7]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[7]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[8]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[8]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[8]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[8]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[8]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[8]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[8]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[8]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[8]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[9]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[9]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[9]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[9]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[9]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[9]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[9]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[9]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[9]?.date}
              </p>
            </div>
          </div>
          {/* .... */}
          {/* *** */}
          <div className="ticket-card">
            <div className="tickets-1st">
              <p className="ticket-title">{tickets[10]?.title}</p>
              <div
                className="ticket-status"
                style={{
                  backgroundColor:
                    tickets[10]?.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                }}
              >
                {tickets[10]?.status}
              </div>
            </div>
            <p className="ticket-desc">{tickets[10]?.description}</p>
            <div className="ticket-3rd">
              <div className="ticket-3rd-left">
                <p className="ticket-id">{tickets[10]?.id}</p>
                <p
                  className="ticket-priority"
                  style={{
                    color:
                      tickets[10]?.priority === "High" ? "#F83044" : "#FEBB0C",
                  }}
                >
                  {tickets[10]?.priority}
                </p>
              </div>

              <p className="ticket-username">
                <img className="user-svg" src="./assets/user.svg" alt="" />
                {tickets[10]?.username}
              </p>

              <p className="ticket-date">
                {" "}
                <img className="date-svg" src="./assets/date.svg" alt="" />{" "}
                {tickets[10]?.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tickets-status">
        <div className="tickets-status-right">
          <p className="status-title">Task Status</p>
          <p className="status-subtitle">
            Select a ticket to add to Task Status
          </p>
        </div>
        <div className="tickets-resolved">
          <p className="resolved-title2">Resolved Task</p>
          <p className="resolved-subtitle">No resolved tasks yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
