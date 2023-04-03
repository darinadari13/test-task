import React, { useState } from 'react';
import styles from './index.module.scss';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  
  const handleInputChange = event => {
    setEmail(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email);
    setEmail('');
  }

  return (
    <section className={styles.root}>
      <span>Subscribe to our news letter</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <input className={styles.input} type="email" value={email} onChange={handleInputChange} placeholder="Your Email"/>
        </label>
      <button className={styles.button} type="submit">Subscribe</button>
      </form>
    </section>
  )
};

export default SubscribeForm;