import React from 'react'
import './Style.scss';

export const Intro = () => {
    return (
        <div className="intro">
            <span className="intro-circle" onClick={() => alert('کد تخفیف 50 درصدی برای شما فعال شد')}><i className="fa fa-gift"></i></span>
            <div className="container">
                <div className="intro-content">
                    <div className="intro-content__title">به آکادمی <span>سیدرو</span> خوش آمدید</div>
                    <div className="intro-content__subtitle">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </div>
                    <button className="intro-content__button">دوره های آموزشی</button>
                </div>
            </div>
        </div>
    )
}
