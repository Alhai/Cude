import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import './home-button-style.css';
import DialogRules from './rules-dialog'
import { Link } from 'react-router-dom';
import './rules-text-style.css';
import './icon-style.css';
import objectiveIcon from "../assets/objective-icon.png";
import beginIcon from '../assets/begin-icon.png';
import endIcon from '../assets/end-icon.png';
import balancingIcon from '../assets/balancing-icon.png';
import courseIcon from '../assets/course-icon.png';
import setupIcon from '../assets/setup-icon.png';

const Homebutton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Link to="/quick-start" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className="button" sx={{ marginBottom: '1rem', fontFamily: 'League Spartan, sans-serif', color: 'black' , fontSize : '24px' }}>QuickStart</Button >
                </Link>
                <DialogRules open={open} onClose={handleClose} title="Rules of Game" >
                    <div className='centered-text' >
                        <h2>Game Objective</h2>
                        <img src={objectiveIcon} alt="objective logo" className='icon' />
                        <p>Players, representing teams from a communication agency, must collect six project cards (Typography, Colorimetry, Marketing, Theme, Graphic Elements, Website) to complete a project for their client company.</p>

                        <h2>Game Material</h2>
                        <p>Game board with different spaces (Weeks, Competition, Events)</p>
                        <p>Dice</p>
                        <p>Project Cards</p>
                        <p>Company Cards</p>
                        <p>Event Cards</p>
                        <p>Question Cards (Weeks and Competition)</p>

                        <h2>Setup</h2>
                        <img src={setupIcon} alt="objective logo" className='icon' />
                        <p>Each team receives a random Company card.</p>

                        <h2>Beginning of the Game</h2>
                        <img src={beginIcon} alt="objective logo" className='icon' />
                        <p>Each team rolls the dice once. The team with the highest number starts. </p> 
                        <br /> 
                        <p> In case of a tie, the concerned teams reroll the dice once to determine the first player.</p>

                        <h2>Course of a Game</h2>
                        <img src={courseIcon} alt="objective logo" className='icon' />
                        <p><h3> Game Turn</h3> In turn, each team rolls the dice and advances their token the indicated number of spaces.</p>
                        <h3>Action According to the Space</h3>
                        <p> <strong>Week Space :</strong>  The team draws a Question card from the corresponding category and tries to answer it. A correct answer allows drawing a Project card.</p>
                        <p> <strong>Competition Space :</strong>  The team chooses an opponent for a duel. The duel consists of a general culture question. The winning team can either draw a Project card or exchange a card with the opponent.</p>
                        <p> <strong>Event Space :</strong>  The team draws an Event card and follows the instructions, which may include minor penalties.</p>


                        <h2>Game Balancing</h2>
                        <img src={balancingIcon} alt="objective logo" className='icon' />
                        <p> <strong>Limited Duels :</strong> A team cannot be chosen for a duel more than two consecutive times.</p>
                        <p> <strong>Balanced Penalties :</strong> The penalties of the Event cards should not be too severe to avoid excessively penalizing players.</p>


                        <h2>End of the Game</h2>
                        <img src={endIcon} alt="objective logo" className='icon' />
                        <p>The game ends when a team collects all six Project cards. This team is declared the winner.</p>
                        <p>An estimated duration of the game is 60 to 90 minutes.</p>
                    </div>

                </DialogRules>
                
                <Button variant="contained" className="button" onClick={handleClickOpen} sx={{ marginBottom: '1rem', fontFamily: 'League Spartan, sans-serif', color: 'black', fontSize : '22px' }}>Games Rules</Button >
            </Box>
        </Box>


    );
};

export default Homebutton;
