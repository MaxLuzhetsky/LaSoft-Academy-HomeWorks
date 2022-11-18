import "../index.css"
import topImage from "../img/top.png"
import botImage from "../img/bot.png"
import React from 'react'

export default function Main() {
    return (
        <>
            <main>
                <section className="top_section">
                    <div className="top_section_text_content">
                        <div className="top_section_content">
                            <h3 className="top_section_title">Desperate to learn drawing? We’ll teach you!</h3>
                            <p className="top_section_text">Our school has more than 20 years of experience in teaching people who
                                always thought that they
                                don’t have even a slightest hint of a talent. Some other descriptive stuff that I’m too lazy to
                                make up. </p>
                            <h5 className="top_section_text">With us you will get:</h5>
                            <ul className="top_section_text top_section_text_list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Vestibulum commodo id amet non facilisis in.</li>
                                <li>Est eros, vestibulum cursus luctus luctus aenean molestie.</li>
                                <li>Augue ultricies non tristique malesuada justo neque mi, pellentesque lacus.</li>
                            </ul>
                            <a className="apply_button" href="">Apply now</a>
                        </div>
                    </div>
                    <div className="top_section_image_container">
                        <img className="top_section_image" src={topImage} />
                    </div>
                </section>
                <section className="bottom_section">
                    <div>
                        <img className="bottom_section_image" src={botImage} />
                    </div>
                    <div className="bottom_section_content_text">
                        <h3 className="bottom_section_title">Interested but currently have other plans?</h3>
                        <p className="bottom_section_text">Subscribe to our newsletter to stay tuned and get hottest updates and
                            deals</p>
                        <a className="bottom_section_button" href="">Subscribe</a>
                    </div>
                </section>
            </main>

        </>
    )
}
