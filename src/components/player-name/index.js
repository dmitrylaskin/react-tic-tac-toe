import React, {useState} from 'react';
import styles from './styles.module.css'

const PlayerName = ({ id, onSetPlayersName, playersName }) => {
    const [isInputActive, setIsInputActive] = useState(false)

    const handleInputChange = ({target:{value}}) => {
        onSetPlayersName(value, id)
    }

    const handleNameClick = () => {
        setIsInputActive(true)
    }


    const handleKeyDown = ({key}) => {
        if (key === 'Enter' && (playersName.playerOne.length > 0 || playersName.playerTwo.length > 0)) {
            setIsInputActive(false)
        }
    }

    return (
        <div className={styles.name}>

            {isInputActive ? <input type="text"
                                    onKeyDown={handleKeyDown}
                                    onChange={handleInputChange}/>
                            : <div onClick={handleNameClick}>{id  === 'pl_1' ? playersName.playerOne : playersName.playerTwo}</div>}
        </div>
    );
};

export {PlayerName};