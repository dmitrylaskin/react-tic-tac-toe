import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import PropTypes from "prop-types";

const PlayerName = ({ id, onSetPlayersName, playersName, isInputDisabled }) => {
    const [isInputActive, setIsInputActive] = useState(false)

    useEffect(() => {
        if (isInputDisabled) setIsInputActive(false)
    }, [isInputDisabled])

    const handleInputChange = ({target:{value}}) => {

        onSetPlayersName(value, id)
    }

    const handleNameClick = () => {
        if (isInputDisabled) return;
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
                                    placeholder={'Enter your name...'}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleInputChange}/>
                            : <div onClick={handleNameClick} style={{textDecoration: `${ !isInputDisabled ? 'underline' : ''}`}}>
                    {id  === 'pl_1' ? playersName.playerOne : playersName.playerTwo}
            </div>}
        </div>
    );
};

PlayerName.propTypes = {
    id: PropTypes.string.isRequired,
    onSetPlayersName: PropTypes.func.isRequired,
    playersName: PropTypes.shape({playerOne: PropTypes.string, playerTwo: PropTypes.string}).isRequired,
}

export {PlayerName};