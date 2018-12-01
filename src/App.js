import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} />
        </header>

        <div className={styles.content}>
          <div className={styles.title}>
            Заседание Координационного совета по промышленности
          </div>

          <div className={styles.desc}>
            Под председательством Министра промышленности и торговли РФ Д.В. Мантурова
          </div>

          <div className={styles.date}>
            10-11 декабря 2018 г.
          </div>

          <div className={styles.where}>
            Нижний Новгород
          </div>

          <div className={styles.registration}>
            <a href="https://timepad.ru" className={styles.button}>
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
