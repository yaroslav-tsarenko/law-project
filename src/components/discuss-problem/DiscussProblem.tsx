import React, { useState } from 'react';
import styles from "./DiscussProblem.module.scss";
import { IoIosCall } from "react-icons/io";

const DiscussProblem = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const phoneRegex = /^\+380\d{9}$/;
        setPhoneNumber(value);
        setIsValid(phoneRegex.test(value));
    };

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
                <IoIosCall/>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleChange}
                    placeholder="Ваш номер телефону"

                />
            </div>
            <button>Обговорити проблему</button>
        </div>
    );
};

export default DiscussProblem;