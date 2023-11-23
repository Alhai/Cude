import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import './dialog-style.css'
import './footer-style.css';
const MyDialog = ({ open, onClose, title, children } : DialogProps) => {
    return (
        <Dialog open={open} onClose={onClose}  className="custom-dialog"  >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{ marginBottom: '1rem', fontFamily: 'League Spartan, sans-serif', backgroundColor :'black',color : 'white' }} className="footerLink" > Close </Button>
            </DialogActions>
        </Dialog>
    );
};

interface DialogProps {
    open: boolean;
    onClose: () => void; 
    title: string;
    children: React.ReactNode;
}

export default MyDialog;