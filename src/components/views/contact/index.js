import React, { useState, useCallback } from 'react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfC4j_lyHmHWRUp1shKlNxzPIdE_QVIzfXwIfLLoBqlVo_12A/formResponse";

export default () => {

    const [hiddenFrameLoaded, setHiddenFrameLoaded] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangeSubject = (e) => setSubject(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);

    const isSubmitButtonEnabled = useCallback(() => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return name.length > 0
            && emailRegex.test(email)
            && subject.length > 0
            && message.length > 0;
    }, [name, email, subject, message]);

    const handleHiddenFrameLoaded = useCallback(() => {
        if(hiddenFrameLoaded) {
            setSubmittedForm(true);
        } else {
            setHiddenFrameLoaded(true);
        }
    }, [hiddenFrameLoaded]);

    return (
        <>
            <section id="contact" class="contact section-bg">
                <div class="container">
                    <iframe
                        title="hidden_iframe"
                        name="hidden_iframe"
                        id="hidden_iframe"
                        style={{ display: "none" }}
                        onLoad={handleHiddenFrameLoaded}
                    ></iframe>

                    <div class="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div class="row">

                        <div class="col-lg-12">
                            {submittedForm ? (
                                <div class="info-box">
                                    <i class="bx bx-envelope"></i>
                                    <h3>Thank you for your message! We will be in touch soon.</h3>
                                    <h3>-Synthesis Workshop</h3>
                                </div>
                            ) : (
                                    <>
                                        <div class="info-box">
                                            <i class="bx bx-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>synthesisworkshopvideos@gmail.com</p>
                                        </div>
                                        <form
                                            target="hidden_iframe"
                                            action={GOOGLE_FORM_URL}
                                            method="post"
                                            class="php-email-form"
                                        >
                                            <div class="form-row">
                                                <div class="col-md-6 form-group">
                                                    <input onChange={onChangeName} type="text" name="entry.2005620554" class="form-control" id="name" placeholder="Your Name" />
                                                    <p class="input-required">* required</p>
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input onChange={onChangeEmail} type="email" class="form-control" name="entry.1045781291" id="email" placeholder="Your Email" />
                                                    <p class="input-required">* required</p>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input onChange={onChangeSubject} type="text" class="form-control" name="entry.1065046570" id="subject" placeholder="Subject" />
                                                <p class="input-required">* required</p>
                                            </div>
                                            <div class="form-group">
                                                <textarea onChange={onChangeMessage} class="form-control" name="entry.1166974658" rows="5" placeholder="Message"></textarea>
                                                <p class="input-required">* required</p>
                                            </div>
                                            <div class="text-center">
                                                <button
                                                    type="submit"
                                                    className={!isSubmitButtonEnabled() ? "disabled" : ""}
                                                    disabled={!isSubmitButtonEnabled()}
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}