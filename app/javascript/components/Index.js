import React, { Component } from 'react';
import classNames from 'classnames';
import update from 'immutability-helper';
import axios from 'axios';

import Program from './Program';
import Logistics from './Logistics';
import Organizers from './Organizers';

import logo from '../images/logo.svg';
import styles from './Index.module.css';

import { Sales } from '../Sales';
import { Museums } from '../Museums';

class Index extends Component {
  state = {
    start: false,
    send: false,
    done: false,
    values: {
      name: '',
      surname: '',
      middlename: '',
      phone: '',
      email: '',
      hotel: '',
      museums: Museums.reduce((o, v) => ({...o, [v.id]: false}), {}),
      sales: Sales.reduce((o, v) => ({...o, [v.id]: false}), {}),
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(state => ({
      values: { ...state.values, [name]: value }
    }));
  }

  handleCheckboxChange = (e) => {
    const target = e.target;
    const value = target.checked;
    const name = parseInt(target.value);

    const vs = update(this.state.values[target.name], {
      [name]: { $set: value }
    });

    this.setState(state => ({
      values: { ...state.values, [target.name]: vs }
    }));
  }

  handleSubmit = e => {
    if(this._canSubmit()) {
      this.setState({ send: true });

      axios.post('/persons.json', {
        person: {
          ...this.state.values,
          sales: Object.entries(this.state.values.sales).filter(ob => ob[1]).reduce((acc, ob) => ({...acc, [ob[0]]: Sales.find(s => s.id == ob[0])}), {}),
          museums: Object.entries(this.state.values.museums).filter(ob => ob[1]).reduce((acc, ob) => ({...acc, [ob[0]]: Museums.find(s => s.id == ob[0])}), {})
        },
      }).then(res => {
        this.setState({
          done: true
        });
      });
    }
    e.preventDefault();
  }

  _canSubmit() {
    return (
      this.state.values.email &&
      this.state.values.hotel &&
      this.state.values.phone &&
      this.state.values.name &&
      this.state.values.surname &&
      this.state.values.middlename &&
      !this.state.send
    );
  }

  render() {
    const { start, values, done } = this.state;

    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} />
        </header>

        <div className={styles.content}>
          <div className={styles.what}>
            Координационный совет
          </div>

          <div className={styles.title}>
            Развитие промышленного экспорта, экспортные программы
          </div>

          <div className={styles.desc}>
            Под председательством Министра промышленности и торговли РФ Д.В. Мантурова
          </div>

          <div className={styles.when}>
            10-11 декабря 2018 г.
          </div>

          <div className={styles.where}>
            Нижний Новгород
          </div>

          {!start &&
            <div className={styles.registration}>
              <span className={styles.button} onClick={() => this.setState({ start: true })}>
                Регистрация
              </span>
            </div>
          }

          {start && !done &&
            <div className={classNames(styles.form, { [styles.start]: start })}>
              <form className={styles.form} onSubmit={this.handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Имя
                  </div>
                  <div className={styles.formInput}>
                    <input type="text" name="name" value={values.name} onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Фамилия
                  </div>
                  <div className={styles.formInput}>
                    <input type="text" name="surname" value={values.surname} onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Отчество
                  </div>
                  <div className={styles.formInput}>
                    <input type="text" name="middlename" value={values.middlename} onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Электронная почта
                  </div>
                  <div className={styles.formInput}>
                    <input type="text" name="email" value={values.email} onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Контактный телефон
                  </div>
                  <div className={styles.formInput}>
                    <input type="text" name="phone" value={values.phone} onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Отель
                  </div>

                  <div className={styles.formHint}>
                    Доставка осуществляется только от указанных отелей!
                  </div>

                  <div className={styles.formInput}>
                    <div className={styles.radio}>
                      <label>
                        <input name="hotel" type="radio" checked={'courtyard' == values.hotel} value="courtyard" onChange={this.handleInputChange} />
                        Courtyard by Marriott
                      </label>
                    </div>

                    <div className={styles.radio}>
                      <label>
                        <input name="hotel" type="radio" checked={'sheraton' == values.hotel} value="sheraton" onChange={this.handleInputChange} />
                        Sheraton Kremlin
                      </label>
                    </div>

                    <div className={styles.radio}>
                      <label>
                        <input name="hotel" type="radio" checked={'none' == values.hotel} value="none" onChange={this.handleInputChange} />
                        Другой
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                   «Культурная программа (по желанию)»
                  </div>

                  <div className={styles.checkbox}>
                    {Museums.map(museum =>
                      <label key={museum.id}>
                        <input type="checkbox" name="museums" onChange={this.handleCheckboxChange} checked={values.museums[museum.id]} value={museum.id} />
                        {museum.name}
                        <br />
                        <span className={styles.dd}>
                          {museum.desc}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formLabel}>
                    Список торговых представителей
                  </div>

                  <div className={styles.formHint}>
                    Необязательно для заполнения. Только для представителей органов исполнительной власти субъектов РФ и предприятий по приглашениям (или приглашенным предприятиям).
                  </div>

                  <div className={styles.checkbox}>
                    {Sales.map(sale =>
                      <label key={sale.id}>
                        <input type="checkbox" name="sales" onChange={this.handleCheckboxChange} checked={values.sales[sale.id]} value={sale.id} />
                        {sale.name}
                        <br />
                        <span className={styles.dd}>
                          {sale.desc}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className={styles.submit}>
                  <input type="submit" value="Зарегистрироваться" className={styles.button} disabled={!this._canSubmit()} />
                </div>
              </form>
            </div>
          }

          {start && done &&
            <div className={styles.done}>
              Вы успешно подали заявку на участие в координационном совете. В ближайшее время с вами свяжутся наши координаторы чтобы подтвердить участие.
            </div>
          }

          {!start &&
            <>
              <div className={styles.program}>
                <Program />
              </div>

              <div className={styles.logistics}>
                <Logistics />
              </div>

              <div className={styles.organizers}>
                <Organizers />
              </div>
            </>
          }
        </div>
      </div>
    );
  }
}

export default Index;
