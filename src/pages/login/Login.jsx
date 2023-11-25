import React from "react";
import "./Login.scss";
import QR from "../../assets/qr.png";
import logo from "../../assets/whatsapp.png";
import google from "../../assets/google.png";

export default function Login() {
    return (
        <div className="Login flex-col">
            <div className="head flex">
                <div className="logo">
                    <img src={logo} alt="" />
                    WHATSAPP WEB
                </div>
            </div>
            <div className="bottom"></div>
            <div className="content flex">
                <div className="left flex-col">
                    <h1>Use WhatsApp on your computer</h1>
                    <ol className="steps flex-col">
                        <li>Open WhatsApp on your phone</li>
                        <li>
                            Go to setting by tapping on your profile photo, <b>Menu</b> or <b>Setting</b>{" "}
                        </li>
                        <li>
                            Tap <b>Linked devices</b> and then Link a device
                        </li>
                        <li>Point your phone to this screen to capture the QR code</li>
                        <li>Don't worry if it does'nt work, just click on the button below - Login with google</li>
                    </ol>
                    <button>Login with google</button>
                </div>
                <div className="right flex">
                    <div className="img flex">
                        <img src={QR} alt="qr code" />
                    </div>
                </div>
            </div>
        </div>
    );
}
