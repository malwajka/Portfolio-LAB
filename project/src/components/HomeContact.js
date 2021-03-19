import React from 'react';
import {useState} from 'react';
import './HomeContact.scss';
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

export const HomeContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState("");
    const [sended, setSended] = useState(false);


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = [];
        console.log(errors);

        if (name.length <= 0 || name.includes(' ')) {
            errors.push("Imię nie może być puste oraz zawierać spacji!")
        }

        if (!validateEmail(email)) {
            errors.push("Email jest nieprawidłowy!")
        }

        if (message.length <= 0 || message.length <= 120) {
            errors.push("Wiadomość nie może być pusta i musi zawierać min. 120 znaków!")
        }

        if (errors.length !== 0) {
            setErrors(errors);
        } else {
            setSended(true);
            setErrors("");
            setName("");
            setEmail("");
            setMessage("");

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: "POST",
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                setName('');
                setEmail('');
                setMessage('');
                setSended(`Wiadomość została wysłana.
        Wkrótce się skontaktujemy`)
            })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='contact_container'>
            <section className='contact' id='contact'>
                <div className='form_container'>
                    <h3 className='form_title'>Skontaktuj się z nami</h3>
                    <img src={Decoration} alt='decoration'/>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form_details'>
                            <div className='form_name'>
                                <label className='form_label' htmlFor='name'>Wpisz swoje imię</label>
                                <input type='text'
                                       className='form_input'
                                       onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className='form_email'>
                                <label className='form_label' htmlFor='email'>Wpisz swój email</label>
                                <input type='text'
                                       className='form_input'
                                       onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='form_textarea-container'>
                            <label className='textarea_label' htmlFor='message'>Wpisz swoją wiadomość</label>
                            <textarea className='form_textarea'
                                      onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                        <div className='btn'>
                            <button type='submit' className='btn_send'>Wyślij</button>
                        </div>
                        <div className='form__validation'>
                            {sended && <h4 className='sent_confirm'>Wiadomość została wysłana!</h4>}
                            {errors.length > 0 && <h4 className='error_alert'>{errors.map(error =>
                                <ul className='error_list'>
                                    <li className='error'>{error}</li>
                                </ul>)}</h4>}
                        </div>
                    </form>
                </div>
            </section>
            <div className='copyright'>
                <p className='copyright_text'>Copyright by Coders Lab</p>
                <div className='social_media-icons'>
                    <img src={Facebook} className='facebook' alt='facebook'/>
                    <img src={Instagram} className='instagram' alt='instagram'/>
                </div>
            </div>
        </div>
    )
}