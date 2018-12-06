import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Program.module.css';

class Program extends Component {
  state = {
    f: false,
    s: false
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.title}>
          Программа пребывания участников координационного совета по промышленности в Нижегородской области
        </div>

        <div className={styles.program}>
          <div className={styles.date}>
            9 декабря, воскресенье
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              В течение дня
            </div>

            <div className={styles.action}>
              Прибытие и размещение участников
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              19:00 — 20:00
            </div>
             <div className={styles.action}>
              Регистрация участников в холле конференц-зоны отеля Sheraton N.Novgorod Kremlin
             </div>
          </div>
           <div className={styles.row}>
            <div className={styles.time}>
              20:00
            </div>
             <div className={styles.action}>
              <p>
                <strong>Рабочая встреча Торговых представителей с заместителем Министра промышленности и торговли Российской Федерации А.В. Груздевым</strong>
              </p>
              <p>
                Зал «Пожарский», отель Sheraton N.Novgorod Kremlin
              </p>
            </div>
          </div>

          <div className={styles.date}>
            10 декабря, понедельник
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              8:00 — 9:00
            </div>

            <div className={styles.action}>
              <p>
                <strong>Деловой завтрак</strong>
              </p>
              <p>
                Ресторан отеля Sheraton N.Novgorod Kremlin
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              9:00 — 12:00
            </div>

            <div className={styles.action}>
              <p>
                <strong>Биржа контактов</strong>
              </p>
              <p>
                Конференц-зал отеля Sheraton N.Novgorod Kremlin
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              12:00 — 13:00
            </div>

            <div className={styles.action}>
              <p>
                <strong>Обед</strong>
              </p>
              <p>
                Sheraton N.Novgorod Kremlin
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              13:00 — 13:30
            </div>

            <div className={styles.action}>
              <p>
                <strong>Переезд до места проведения выставки и координационного совета</strong>
              </p>
              <p>
                Технопарк «Анкудиновка», г.Н.Новгород, ул.Академика Сахарова, д.4
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              14:00 — 14:30
            </div>

            <div className={styles.action}>
              <p>
                <strong>Посещение выставки промышленного потенциала Нижегородской области</strong>
              </p>
              <p>
                1 этаж, выставочный зал первого этажа
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              15:00 — 17:00
            </div>

            <div className={styles.action}>
              <p>
                <strong>Координационный совет по промышленности под председательством Министра промышленности и торговли РФ Д.В. Мантурова</strong>
              </p>
              <p>
                <strong>
                  «Развитие промышленного экспорта. Экспортные программы»
                </strong>
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              17:00 — 17:30
            </div>

            <div className={styles.action}>
              Пресс-подход  Министра промышленности и торговли РФ Д.В.Мантурова и Губернатора Нижегородской области Г.С.Никитина
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              17:30 — 18:00
            </div>

            <div className={styles.action}>
              <p>
                Переезд к месту проведения официального приема от имени Губернатора Нижегородской области Г.С.Никитина
              </p>
              <p>
                Нижегородская ярмарка. Гербовый зал, ул. Совнаркомовская, д.13
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              18:00 — 21:00
            </div>

            <div className={styles.action}>
              <p>
                Официальный прием от имени Губернатора Нижегородской области
              </p>
              <p>
                Нижегородская ярмарка. Гербовый зал, ул. Совнаркомовская, д. 13
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              21:00 — 21:30
            </div>

            <div className={styles.action}>
              Переезд к аккредитованным отелям
            </div>
          </div>

          <div className={styles.date}>
            11 декабря, вторник
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              9:20 — 10:00
            </div>

            <div className={styles.action}>
              <strong>
                Переезд от аккредитованных отелей к предприятиям
              </strong>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              10:00 — 14:00
            </div>

            <div className={styles.action}>
              <div>
                <strong>
                  Посещение предприятий участниками Координационного совета
                </strong>
              </div>

              <div className={styles.places}>
                <div className={styles.place}>
                  <strong>
                    1. ПАО «ГАЗ»
                  </strong>

                  <br />
                  Осмотр производства, посещение музея ГАЗ

                  <div className={classNames(styles.info, { [styles.open]: this.state.f })}>
                    <p>
                      Основной акционер – машиностроительный холдинг «Русские машины», входит в промышленную группу «Базовый Элемент»
                    </p>

                    <p>
                      Предприятие основано в 1932 году. С именем Горьковского автозавода связан масштабный переход страны на автомобильный транспорт, оснащение сельского хозяйства среднетоннажными грузовиками, организация пассажирских перевозок и т.д. С момента основания ГАЗ выпустил более 18 млн. грузовых и легковых автомобилей, освоил производство свыше 350.
                    </p>

                    <p>
                      «Группа ГАЗ» специализируется на разработке и производстве легких и среднетоннажных коммерческих автомобилей, автобусов, тяжелых грузовиков, легковых автомобилей, силовых агрегатов и автокомпонентов.
                    </p>

                    <p>
                      «Группа ГАЗ» – ведущий производитель коммерческого транспорта в России, входит в десятку крупнейших производителей легких коммерческих автомобилей и автобусов в Европе. В составе компании – собственный инженерный центр, 13 предприятий в России, сборочные площадки в Турции и Казахстане.
                    </p>

                    <p>
                      На сегодняшний день «Группа ГАЗ» реализует ряд инвестиционных проектов:
                      <br />
                      - Проект «ГАЗель Next 1 этап (шасси с однорядной и двухрядной кабиной, каркасный автобус)».
                      <br />
                      - Проект «ГАЗель Next 2 этап (цельнометаллические фургоны и автобусы)»
                      <br />
                      - Проект «Контрактная сборка автомобилей Volkswagen/Skoda»
                    </p>
                  </div>

                  <div className={styles.toggle} onClick={() => this.setState(state => ({ f: !state.f }))}>Подробнее</div>
                </div>

                <div className={styles.place}>
                  <strong>
                    2. Центр компетенций по повышению производительности труда
                  </strong>

                  <div className={classNames(styles.info, { [styles.open]: this.state.s })}>
                    <p>
                      Нижегородская область активно включилась в работу по внедрению бережливых технологий и повышению производительности труда в промышленности, сельском хозяйстве, здравоохранении, образовании государственном и муниципальном управлении и стала пилотным регионом по реализации проекта «Эффективная Губерния». Сейчас в области реализуется государственная программа повышения производительности труда и поддержки занятости населения. В рамках данной программы в феврале 2018 года решением Управляющего комитета создан региональный Центр компетенции по повышению производительности труда. Главная задача центра сегодня - поддержка предприятий, планирующих внедрение бережливых технологий в производство, как наиболее конкурентоспособной технологии повышения производительности труда с минимальными финансовыми вложениями.
                    </p>

                    <p>
                      За прошедшее время специалисты Центра реализовали проекты по бережливому производству на 18 промышленных предприятиях и 4 сельхозпредприятиях региона, в 225 учреждениях социальной сферы (дома-интернаты для престарелых, детские дома- интернаты, центры социального обслуживания граждан и другие) и 55 медицинских учреждениях. Также в Региональном Центре Компетенций Нижегородской области активно разрабатывают проекты для строительной сферы, государственного, муниципального управления и образования.
                    </p>
                  </div>

                  <div className={styles.toggle} onClick={() => this.setState(state => ({ s: !state.s }))}>Подробнее</div>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>
              14:00 — 14:30
            </div>

            <div className={styles.action}>
              Отъезд участников Координационного совета
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Program;
