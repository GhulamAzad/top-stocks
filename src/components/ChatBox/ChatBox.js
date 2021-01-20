import React, { useState } from "react";


const ChatBox = () => {

    const [isChatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(prevState => !prevState);
    }

    return (

        <React.Fragment>
            {/* Chat Button */}
            <div className="chat-button" onClick={toggleChat} style={{ backgroundColor: isChatOpen ? '#455a64' : '#195a75' }}>
                <i className={isChatOpen ? 'ri-close-fill' : 'ri-chat-2-fill'}></i>
            </div>


            <div className={isChatOpen ? 'chat-box chat-box--open' : 'chat-box'} >

                <div className="chat-box__top">
                    TOP STOCKS EVERY DAY

                    <div className="chat-box__close" onClick={toggleChat}>
                        <i className='ri-close-fill'></i>
                    </div>

                </div>

                <form className="chat-box__form">

                    <div className="chat-box__hi mb-1_5">
                        Hi! Let us know how we can help and we’ll respond shortly.
                        </div>

                    <input className="chat-box__name mb-1_5" type="text" placeholder="Name*" required />

                    <input className="chat-box__email mb-1_5" type="email" placeholder="Email*" required />

                    <textarea className="chat-box__text-area mb-1_5" cols="30" rows="8" placeholder="How can we help?*" required></textarea>



                    <input className="btn chat-box__send mb-1_5" type="submit" value="SEND" />


                    <p className="chat-box__captcha mb-1_5">This site is protected by reCAPTCHA and the Google
                <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>

                </form>



            </div>


        </React.Fragment >
    );
}

export default ChatBox;