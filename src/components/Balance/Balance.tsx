import React from 'react'
import './Balance.css';
const Balance = () => {
    return(
        <div className="balance">
            <div className="balance-title">
                <h3>Leave Balance</h3>
            </div>
            <div className="balance-body">
                <div className="body-name">
                    <p>Casual Leave</p>
                    <p>Sick Leave</p>
                </div>
                <div className="body-box">
                    <div className="boxes">03</div>
                    <div className="boxes">05</div>
                </div>
                <div className="body-name">
                    <p>Paid Vacation</p>
                    <p>Special Leave</p>
                </div>
                <div className="body-box">
                    <div className="boxes">03</div>
                    <div className="boxes">05</div>
                </div>
                <div className="balance-button">
                <button >Apply Here</button>
                </div>
            </div>
        </div>
    )
}
export default Balance;