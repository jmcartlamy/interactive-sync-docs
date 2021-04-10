import clsx from 'clsx';
import React, { useState } from 'react';
import userInterfaceSchema from './userInterfaceSchema';
import styles from './validator.module.css';

function Validator() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState({ isValidUI: null, errorUI: '', normalizedUI: '' });

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const onPrettier = () => {
        try {
            const parseValue = JSON.parse(inputValue);
            const value = JSON.stringify(parseValue, undefined, 4);
            setInputValue(value);
        } catch (e) {}
    };

    const onReset = () => {
        setInputValue('');
        setResult({ isValidUI: null, errorUI: '', normalizedUI: '' });
    };

    const onValidation = () => {
        let value;
        try {
            value = JSON.parse(inputValue);
        } catch (e) {
            return setResult({
                isValidUI: false,
                errorUI: 'A parsing error occured with the JSON received.',
                normalizedUI: null,
            });
        }

        const result = userInterfaceSchema.validate(value, {
            abortEarly: true,
        });

        if (typeof result.error === 'undefined') {
            setResult({
                isValidUI: true,
                errorUI: null,
                normalizedUI: result.value,
            });
        } else {
            setResult({
                isValidUI: false,
                errorUI: result.error,
                errorMessage: result.error.details[0].message,
                normalizedUI: null,
            });
        }
    };

    /**
     * Display results
     */
    const resultValue =
        result.isValidUI !== null
            ? result.isValidUI === true
                ? JSON.stringify(result.normalizedUI, undefined, 4)
                : JSON.stringify(result.errorUI, undefined, 4)
            : '';

    const resultStatus = result.isValidUI !== null ? (result.isValidUI === true ? '✅' : '❌') : '';

    /**
     * Count true size of JSON user interface
     */
    let resultCount;
    try {
        resultCount = JSON.stringify(JSON.parse(inputValue)).length;
    } catch (e) {
        resultCount = 0;
    }

    return (
        <div className={styles.validator}>
            <div className={styles.textarea1}>
                <textarea onChange={onChangeHandler} value={inputValue} />
                <div className={styles.status}>
                    <span>{resultStatus}</span>
                    <span>{`${resultCount} / 2048`}</span>
                </div>
            </div>
            <div className={styles.containerButtons}>
                <button
                    className={clsx('button button--primary', styles.button)}
                    type="button"
                    onClick={onValidation}
                >
                    Validate
                </button>
                <button
                    className={clsx('button button--secondary', styles.button)}
                    type="button"
                    onClick={onPrettier}
                >
                    Prettier
                </button>
                <button
                    className={clsx('button button--danger', styles.button)}
                    type="button"
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
            <div className={styles.textarea2}>
                <textarea readOnly value={resultValue} />
                <div className={styles.errorMessage}>
                    <span>{result.errorMessage}</span>
                </div>
            </div>
        </div>
    );
}

export default Validator;
