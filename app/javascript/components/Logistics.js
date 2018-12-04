import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Logistics.module.css';

class Logistics extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.in}>
          <div className={styles.title}>
            Как добраться
          </div>

          <div className={styles.list}>
            <div className={styles.item}>
              <div className={classNames(styles.icon, styles.air)}>
                1 час
              </div>
              <div className={styles.desc}>
                <p>
                  <strong>От аэропорта</strong>
                </p>
                <p>
                  На такси время в пути до исторического центра пл. Минина — 1 час. Используйте популярные приложения Яндекс.Такси, Uber, Gett. Для более комфортной поездки закажите трансфер заранее в «Новое такси Нижегородец».
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={classNames(styles.icon, styles.rr)}>
                20 мин.
              </div>
              <div className={styles.desc}>
                <p>
                  <strong>От ж.-д. вокзала</strong>
                </p>

                <p>
                  От вокзала до исторического центра можно добраться на такси, но быстрее всего одну станцию на метро до станции «Горьковская».
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.in}>
          <div className={styles.title}>
            Где разместиться
          </div>

          <div className={styles.list}>
            <div className={styles.item}>
              <div className={classNames(styles.icon, styles.hotel)}>
                от 6900 руб.
              </div>
              <div className={styles.desc}>
                <p>
                  <strong>Sheraton 5*</strong>
                </p>
                <p>
                  Расположен в центре Нижнего Новгорода, всего в 2 минутах ходьбы от входа в Кремль.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={classNames(styles.icon, styles.hotel)}>
                от 6000 руб.
              </div>
              <div className={styles.desc}>
                <p>
                  <strong>Courtyard by Mariott 4*</strong>
                </p>

                <p>
                  Отель с фитнес-центром находится в 20 минутах ходьбы от Нижегородского кремля.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logistics;
