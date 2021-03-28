import React, { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/reports", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(result => {
        setReports(result.reports);
        console.log(result.reports);
      })
      .catch(err => console.log(err)); // this error is from the server
  }, []);

  const handleUpdate = id => {
    fetch(`http://localhost:3001/api/reports/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          let updatedReports = reports.filter(
            report => report.id !== result.deleteSingleReport.id
          );
          setReports(updatedReports);
        } else {
          console.log(result);
        }
      });
  };

  const handleBlock = (id) => {
    fetch(`http://localhost:3001/api/reports/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          let updatedReports = reports.filter(
            report => report.id !== result.deleteSingleReport.id
          );
          setReports(updatedReports);
        } else {
          console.log(result);
        }
      });
  };
  return (
    <div>
      <h1>Reports</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {reports.map(report => {
          return (
            <div
              key={report.id}
              style={{
                width: "42em",
                margin: "0 auto",
                border: "0.1rem solid black",
                padding: "1.5rem",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "22em",
                }}
              >
                <p>Id: {report.id}</p>
                <p>State: {report.state}</p>
              </div>
              <div
                style={{
                  width: "22em",
                }}
              >
                <p>Type: {report.payload.reportType}</p>
                <p>Message: {report.payload.message}$</p>
              </div>
              <div>
                <button
                  onClick={handleBlock}
                  style={{
                    padding: "0.2rem",
                    textAlign: "center",
                    width: "9rem",
                  }}
                >
                  Block
                </button>
                <button
                  onClick={handleUpdate}
                  style={{
                    padding: "0.2rem",
                    textAlign: "center",
                    width: "9rem",
                  }}
                >
                  Resolve
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
