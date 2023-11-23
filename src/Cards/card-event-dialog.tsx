import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './card-style.css'; 

interface EventDialogProps {
  eventText: string;
  open: boolean;
  onClose: () => void;
}

const EventDialog: React.FC<EventDialogProps> = ({ eventText, open, onClose }) => {
    return (
        <Dialog 
          open={open} 
          onClose={onClose}
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
            <DialogTitle>Event Card</DialogTitle>
            <DialogContent>
                <p>{eventText}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EventDialog;
