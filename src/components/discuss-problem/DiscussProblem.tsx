import React, {useState} from 'react';
import styles from "./DiscussProblem.module.scss";
import {IoIosCall} from "react-icons/io";
import axios from 'axios';
import {BACKEND_URL} from "../../constants/constants";
import {ClipLoader} from "react-spinners";
import { useNavigate } from 'react-router-dom';

const DiscussProblem = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/add-phone-number`, { phoneNumber });
            setMessage('Phone number saved successfully!');
            navigate('/success');
            console.log(response);
        } catch (error) {
            setMessage('Failed to save phone number.');
        }
        setIsLoading(false);
    };

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
                <IoIosCall />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleChange}
                    placeholder="Ваш номер телефону"
                />
            </div>
            <button onClick={handleSubmit}>
                {isLoading ?
                    <>
                        <ClipLoader color="#ffffff" loading={isLoading} size={15} /> Обробка...
                    </>
                    :
                    "Обговорити проблему"}
            </button>
        </div>
    );
};

export default DiscussProblem;