
import googleIcon from './../../res/google.jpg';
import whatsApp from './../../res/whatsapp.png';

const Home = () => {
    return (
        <section className="home">

            <section className="hero">

                <div className="hero__circle flex">
                    <h1 className="hero__text heading-1">Welcome to <br /> Top Stocks <br /> Every Day</h1>
                </div>

            </section>

            <section className="middle">

                <h1 className="heading-1 mb-2">Subscribe</h1>
                <p className="default-text mb-2">SUBSCRIBE TO RECEIVE EVERY DAY TOP STOCK GAINERS AND LOSERS</p>

                <form className="middle__input-wrapper">
                    <div>
                        <input className="middle__input" type="email" name="email" id="email" placeholder="Email" />
                        <label className="middle__label" htmlFor="email">Email</label>
                    </div>
                    <button className="btn">Subscribe</button>
                </form>


            </section>

            <section className="review">
                <h1 className="review__heading heading-1 center-text mb-4">REVIEWS</h1>
                <div className="review__box">
                    <div className="review__circle mb-2">
                        <img src={googleIcon} alt="google icon" />
                    </div>
                    <h2 className="heading-2">Reviews coming soon!</h2>
                </div>
            </section>

            <section className="contact">
                <div className="contact__left">
                    <h1 className="heading-1 mb-3 text-shadow">Contact Us</h1>
                    <h2 className="heading-2 mb-2">HOW CAN WE HELP?</h2>
                    <p className="default-text mb-2">We love helping businesses thrive. So, contact us, and let's see how we can help you impact your business growth. </p>
                    <button className="contact__btn btn mb-2">
                        <img src={whatsApp} alt=" whatsapp icon" />
                  Message us on WhatsApp
                </button>
                    <h2 className="heading-2 mb-2">TOP STOCKS EVERY DAY</h2>
                    <p className="default-text mb-3">New York, NY, USA</p>
                    <h2 className="heading-2 mb-2">HOURS</h2>
                    <p className="default-text">
                        Monday - Friday: 9am - 5pm <br />

                    Saturday: By appointment <br />

                    Sunday: Closed <br />
                    </p>
                </div>

                <div className="contact__right">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96775.64909310154!2d-74.07601272505498!3d40.71275413455759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe535207f7f71bdfe!2sThe%20Oculus!5e0!3m2!1sen!2sin!4v1610045224394!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:"0"}}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>

            </section>

        </section>)
}

export default Home;