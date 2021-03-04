import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Profile.module.css';
import Switch from '@material-ui/core/Switch';

export function Profile() {
    const { level } = useContext(ChallengesContext);  

    const { handleChange } = useContext(CountdownContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marquisalexander.png" alt="MarquisAlexander" />
            <div>
                <strong>Marquis Alexander</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
                <Switch
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
        </div>
    );
}