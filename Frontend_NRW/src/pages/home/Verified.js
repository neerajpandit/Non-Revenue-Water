import React from "react";
import '../Components/css/Verified.css'
import image from './Assets/badge.png'

const Verified = () => {
    return (
       <div className="verified-main">
            <div className="verify-img">
                <img src={image} alt="img" />
                <h1 className="verify-heading">You are Verified</h1>
                <pre className="verify-para">{'Congratulations to you.  You are now Verified!\n                                    Kindly proceed to log in'}</pre>
                <Button className="verify-btn">Continue</Button>
            </div>
            
            </div>
    )
}
export default Verified;