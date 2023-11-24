import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Rolldice from '../Dice/rolldice';
import { Box } from '@mui/material';
import QuestionCard from '../Cards/question-card';
import DuelCard from '../Cards/duel-card';
import EventCard from '../Cards/event-card';
import CardDialog from '../Cards/card-dialog';
import EventDialog from '../Cards/card-event-dialog';
import data from '../JSON/data.json';
import duelData from '../JSON/duel.json';
import eventData from '../JSON/event.json';
import '../Game/quick-start-style.css';

const Quickstart = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [duels, setDuels] = useState<Duel[]>(duelData.duel);
    const [events, setEvents] = useState<Event[]>(eventData.eventList);
    const [currentQuestion, setCurrentQuestion] = useState<{ question: string; answer: string } | null>(null);
    const [currentDuelQuestion, setCurrentDuelQuestion] = useState<{ question: string; answer: string } | null>(null);
    const [currentEvent, setCurrentEvent] = useState<{ event: string; } | null>(null);
    const [currentDuelDomain, setCurrentDuelDomain] = useState("");
    const [currentEventDomain, setCurrentEventDomain] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    type Category = {
        color: string;
        domain: string;
        questions: { question: string; answer: string }[];
    };

    type Duel = {
        color: string;
        domain: string;
        questions: { question: string; answer: string }[];
    };

    type Event = {
        color: string;
        domain: string;
        events: { event: string }[];
    };

    useEffect(() => {
        setCategories(data.categories);
        setDuels(duelData.duel);
        setEvents(eventData.eventList);
    }, []);

    const handleQuestionCardClick = (category: any) => {
        if (category.questions && category.questions.length > 0) {
            const randomIndex = Math.floor(Math.random() * category.questions.length);
            setCurrentQuestion(category.questions[randomIndex]);
            setIsDialogOpen(true);
        }
    };

    const handleDuelCardClick = (duel: Duel) => {
        const randomIndex = Math.floor(Math.random() * duel.questions.length);
        if (duel && duel.questions[randomIndex]) {
            setCurrentDuelQuestion(duel.questions[randomIndex]);
        }
        setCurrentDuelDomain(duel.domain);
        setIsDialogOpen(true);
    };

    const handleEventCardClick = (event: Event) => {
        const randomIndex = Math.floor(Math.random() * event.events.length);
        if (event && event.events[randomIndex]) {
            setCurrentEvent(event.events[randomIndex]);
        }
        setCurrentEventDomain(event.domain);
        setIsDialogOpen(true);
    };

    const handleCloseModal = () => {
        setCurrentQuestion(null);
        setCurrentDuelQuestion(null);
        setCurrentEvent(null);
        setCurrentDuelDomain("");
        setCurrentEventDomain("");
        setIsDialogOpen(false);
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" className="quickstart-background">
            <Header />
            <Box flexGrow={1}>
                <Box display="flex" justifyContent="center" marginTop="1rem" >
                    <Rolldice />
                </Box>
                    <Box>
                        <div style={{color : 'white', marginTop: '2rem', marginBottom : '2rem'}}>_____________________________________________________________________________________________________________________________________________________________________________________</div>
                    </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    marginTop="1rem"
                    flexWrap="wrap"
                    gap="20px"
                >
                    {categories.map((category) => (
                        <Box key={category.color} textAlign="center" >
                            <div style={{ fontFamily: 'League Spartan, sans-serif', color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
                                {category.domain}
                            </div>
                            <QuestionCard onClick={() => handleQuestionCardClick(category)} />
                        </Box>
                    ))}
                    {currentQuestion && (
                        <CardDialog
                            domain="Question Card"
                            question={currentQuestion.question}
                            answer={currentQuestion.answer}
                            open={isDialogOpen}
                            onClose={handleCloseModal} />
                    )}
                    <Box textAlign="center">
                        {duels.map((duel) => (
                            <Box key={duel.color} textAlign="center">
                                <div style={{ fontFamily: 'League Spartan, sans-serif', color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    {duel.domain}
                                </div>
                                <DuelCard onClick={() => handleDuelCardClick(duel)} />
                            </Box>
                        ))}
                        {currentDuelQuestion && (
                            <CardDialog
                                // domain="Duel Card"
                                domain={ currentDuelDomain}
                                question={currentDuelQuestion.question}
                                answer={currentDuelQuestion.answer}
                                open={isDialogOpen}
                                onClose={handleCloseModal} />
                        )}

                    </Box>
                    <Box textAlign="center">
                        {events.map((eventItem) => (
                            <Box key={eventItem.color} textAlign="center">
                                <div style={{ fontFamily: 'League Spartan, sans-serif', color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    {eventItem.domain}
                                </div>
                                <EventCard onClick={() => handleEventCardClick(eventItem)} />
                            </Box>
                        ))}
                    </Box>
                    {currentEvent && (
                        <EventDialog
                            domain= {currentEventDomain}
                            eventText={currentEvent.event}
                            open={isDialogOpen}
                            onClose={handleCloseModal} />
                    )}
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}
export default Quickstart;
