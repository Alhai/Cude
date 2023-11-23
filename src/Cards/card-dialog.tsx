import React, { useState, useEffect, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './card-style.css';

interface CardDialogProps {
    domain: string;
    question: string;
    answer: string;
    open: boolean;
    onClose: () => void;
}

const CardDialog: React.FC<CardDialogProps> = ({ domain ,question, answer, open, onClose }) => {
    const [timer, setTimer] = useState(30);
    const [showAnswer, setShowAnswer] = useState(false);

    const intervalId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (open && timer > 0) {
            intervalId.current = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowAnswer(true);
            if (intervalId.current) clearInterval(intervalId.current);
        }

        return () => {
            if (intervalId.current) clearInterval(intervalId.current);
        };
    }, [timer, open]);
    const handleClose = () => {
        setTimer(30);
        setShowAnswer(false);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                className: 'dialog-appear',
                style: {
                    width: '250px',
                    height: '350px',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }}
        >
            <DialogTitle >{domain}</DialogTitle>
            <DialogContent>
            {question}  
                {!showAnswer ? (
                    <h2 style={{ color: timer <= 10 ? 'red' : 'black' }}>{timer} sec</h2>
                ) : (
                    <p>{answer}</p>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CardDialog;