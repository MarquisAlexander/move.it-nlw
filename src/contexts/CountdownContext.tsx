import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LevelUpModal } from '../components/LevelUpModal';
import { ChallengesContext } from './ChallengesContext';
import React from 'react';

interface CountdownContextData {
    state: boolean;
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    handleChange: () => void;
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const [state, setState] = useState(true);

    const handleChange = () => {
        setState(state === true ? false : true);
        console.log(state);
    };


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() =>{
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0 ) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            state,
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
            handleChange,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}