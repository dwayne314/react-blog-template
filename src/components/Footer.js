import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (evt) => {
        evt.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <footer id="footer">
            <div className="inner">
                <section>
                    <h2>Get in touch</h2>
                    <form onSubmit={submitForm}>
                        <div className="fields">
                            <div className="field half">
                                <input value={name} type="text" name="name" id="name" placeholder="Name" onChange={(evt) => setName(evt.target.value)} />
                            </div>
                            <div className="field half">
                                <input value={email} type="email" name="email" id="email" placeholder="Email" onChange={(evt) => setEmail(evt.target.value)} />
                            </div>
                            <div className="field">
                                <textarea value={message} name="message" id="message" placeholder="Message" onChange={(evt) => setMessage(evt.target.value)} />
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send" className="primary" /></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <h2>Follow</h2>
                    <ul className="icons">
                        <li><Link to="/" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></Link></li>
                        <li><Link to="/" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></Link></li>
                        <li><Link to="/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></Link></li>
                        <li><Link to="/" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></Link></li>
                        <li><Link to="/" className="icon brands style2 fa-github"><span className="label">GitHub</span></Link></li>
                        <li><Link to="/" className="icon brands style2 fa-500px"><span className="label">500px</span></Link></li>
                        <li><Link to="/" className="icon solid style2 fa-phone"><span className="label">Phone</span></Link></li>
                        <li><Link to="/" className="icon solid style2 fa-envelope"><span className="label">Email</span></Link></li>
                    </ul>
                </section>
                <ul className="copyright">
                    <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    );
};


export default Footer;
