import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className="general-top bg-success">
      <div className="container">
        <div className="headerName">
          <p>Услуги дизайнеров</p>
        </div>
        <div className="headerInfo1">
          <p> Disigner – более тысячи заказов каждый день, 1.5М дизайнеров</p>
        </div>
        <div className="headerInfo2">
          <p> Работа по безопасной сделке.</p>
          <p>Честные отзывы и актуальный рейтинг.</p>
          <p>Широкие возможности для заказчиков и фрилансеров.</p>
          <p>Достойное вознаграждение и ожидаемый результат.</p>
        </div>

        <div className="row">
          <div className="col text-right ">
            <button className="btn btn-light iOrders ">Я заказчик</button>
          </div>
          <div className="col text-left  ">
            <button className="btn btn-light iExecutors">Я исполнитель</button>
          </div>
        </div>
      </div>
    </div>
  );
};
