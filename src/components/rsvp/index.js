import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

export const Rsvp = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        function validateForm() {
            var x = document.forms["marryform"]["user_name"].value;
            var y = document.forms["marryform"]["user_rsvp"].value;
            var z = document.forms["marryform"]["events"].value;

            if (x === "" || y === "" || z === "") {
                alert("Si us plau, omple tots els camps.");
            } else {
                emailjs.sendForm(
                    'service_fm5e4h4',
                    'template_pl04cua',
                    form.current,
                    'T9pImrkPFQOVYoEEc'
                )
                    .then((result) => {
                        console.log(result.text);
                        document.getElementById("create-course-form").reset();
                        alert("Moltes gràcies! 💯");
                    }, (error) => {
                        console.log(error.text);
                    });
            }
        }

        validateForm();
    };

    return (
        <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="rsvp-wrap">
                            <div className="col-12">
                                <div className="section-title section-title4 text-center">
                                    <h2>T'hi apuntes?</h2>
                                    <p>Omple l'enquesta per confirmar la teva assistència.<br></br>Moltes gràcies!</p>
                                </div>
                            </div>
                            <form name="marryform" ref={form} onSubmit={sendEmail} id="create-course-form">
                                <div className="contact-form form-style">
                                    <div className="row">

                                        <div className="col-12 col-sm-6">
                                            <input type="text" placeholder="Nom*" id="name" name="user_name" />
                                        </div>

                                        <div className="col col-sm-6 col-12">
                                            <select className="form-control" name="user_rsvp">
                                                <option value="">Número d'assistents*</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="col col-sm-6 col-12">
                                            <select className="form-control" name="events">
                                                <option value="">Vinc a ...*</option>
                                                <option value="Casament">Casament</option>
                                                <option value="Casament + dormir">Casament + dormir</option>
                                                <option value="Casament + dormir + dinar de l'endemà">Casament + dormir + dinar de l'endemà (+25€)</option>
                                                <option value="Casament + dinar de l'endemà">Casament + dinar de l'endemà (+25€)</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-12 test">
                                        <textarea className="contact-textarea-alergies" placeholder="Restriccions alimentàries" name="alergies"></textarea>
                                    </div>
                                    <div className="col-12 col-sm-12 test">
                                        <textarea className="contact-textarea" placeholder="Ens voleu comentar alguna cosa més?" name="notes"></textarea>
                                    </div>

                                    <div className="col-12 text-center">
                                        <button id="submit" type="submit" className="submit">Confirmar</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rsvp;