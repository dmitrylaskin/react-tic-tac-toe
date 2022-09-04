import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {IPlayersName} from "../../types/types";

interface PlayerNameProps {
    id: string
    onSetPlayersName: (value:string, id:string) => void
    playersName: IPlayersName
    isInputDisabled: boolean
}

const PlayerName: React.FC<PlayerNameProps> = ({ id, onSetPlayersName, playersName, isInputDisabled }) => {
    const [isInputActive, setIsInputActive] = useState(false)

    useEffect(() => {
        if (isInputDisabled) setIsInputActive(false)
    }, [isInputDisabled])

    const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = ({target:{value}}) => {
        onSetPlayersName(value, id)
    }

    const handleNameClick: () => void = () => {
        if (isInputDisabled) return;
        setIsInputActive(true)
    }


    const handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void = ({key}) => {
        if (key === 'Enter' && (playersName.playerOne.length > 0 && playersName.playerTwo.length > 0)) {
            setIsInputActive(false)
        }
    }

    return (
        <div className={styles.name}>

            {isInputActive ? <input type="text"
                                    placeholder={'Enter your name...'}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleInputChange}/>
                            : <div onClick={handleNameClick} style={{textDecoration: `${ !isInputDisabled ? 'underline' : ''}`}}>
                    {id  === 'pl_1' ? playersName.playerOne : playersName.playerTwo}
            </div>}
        </div>
    );
};

export {PlayerName};