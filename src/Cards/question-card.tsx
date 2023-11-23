import React from 'react';
import questionCard from '../assets/question.png'
import './card-style.css'
import { grey } from '@mui/material/colors';
interface CardProps {
  onClick: () => void;
}

const QuestionCard: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" 
      style={{ 
        backgroundImage: `url(${questionCard})`,
        backgroundSize: 'cover',
        width: '150px', 
        height: '250px',
        borderRadius: 15,
        borderWidth : '5px',
        borderStyle: 'solid',
        borderColor: 'grey',

      }} 
      onClick={onClick}
    >
    </div>
  );
};
export default QuestionCard;


