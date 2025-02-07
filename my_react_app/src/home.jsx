import React from 'react';
import './Home.css'; // Optional: for styling

const Home = () => {
  const name = process.env.REACT_APP_MY_NAME;
  const email = process.env.REACT_APP_CONTACT_EMAIL;
  const phone = process.env.REACT_APP_CONTACT_PHONE;

  return (
    <div className="home">
      <h1>{name}</h1>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  );
};

export default Home;
