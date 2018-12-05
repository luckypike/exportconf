import React, { Component } from 'react';
import classNames from 'classnames';
import organizers from '../images/organizers.jpg';

import styles from './Organizers.module.css';

class Organizers extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.title}>
          Организаторы
        </div>

        <div className={styles.organizers}>
          <img src={organizers} />
        </div>
      </div>
    );
  }
}

export default Organizers;
