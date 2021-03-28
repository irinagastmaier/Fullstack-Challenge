import React,{useEffect, useState} from "react";

export default function Reports() {
  const {reports, setReports} = useState({})
  useEffect(() => {
    fetch("http://localhost:3001/reports", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Get Request" }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setReports(result.allReports);
        } else {
          console.log(result.message); //error from the response
        }
      })
      .catch(err => console.log(err)); // this error is from the server
  }, []);

  const handleUpdate = id => {
    fetch(`http://localhost:3001/reports/:reportId/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React PUT Request" }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          let updatedReports = reports.filter(
            report => report._id !== result.reportDeleted._id
          );
          setReports(updatedReports);
        } else {
          console.log(result.message);
        }
      });
  };

  return (
    <div>
      <div>
        <p>Id: {reports.elements.id}</p>
        <p>State: {reports.elements.state}</p>
      </div>
      <div>
        <p>Type: {reports.elements.payload.reportType}</p>
        <p>Message: {reports.elements.payload.message}</p>
      </div>
      <div>
        <button>Block</button>
        <button onClick={() => handleUpdate(reports._id)}>Resolve</button>
      </div>
    </div>
  );
}
