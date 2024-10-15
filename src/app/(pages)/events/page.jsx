'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './events.module.css';

const events = {
    badminton: "Badminton",
    swimming: "Swimming",
    squash: "Squash",
    tennis: "Tennis",
    volleyball: "Volleyball",
    hockey: "Hockey",
    chess: "Chess",
    carrom: "Carrom",
    cricket: "Cricket",
    athletics: "Athletics",
    frisbee: "Ultimate Frisbee",
    tabletennis: "Table Tennis",
    taekwondo: "Taekwondo",
    powerlifting: "Power Lifting",
    bodybuilding: "Body Building",
    snooker: "Snooker & Pool",
    football: "Football",
    basketball: "Basketball",
};

export default function Events  ()  {
    const [activeEvent, setActiveEvent] = useState(0);  // Tracks the current active event index
    const [amountDisplay, setAmountDisplay] = useState(10);  // Number of events displayed
    const [eventElems, setEventElems] = useState([]);  // Event elements
    const [eventDots, setEventDots] = useState([]);  // Event dots
    const touchstartXRef = useRef(0);  // Tracks the starting point of a touch event
    const eventIntervalRef = useRef(null);  // For interval tracking
    const evtSec = useRef(null);
    const touchThreshold = 70;

    
    // Initialize event elements and dots
    useEffect(() => {
        const generateEventElems = () => {
            let elems = [];
            let dots = [];
            let i = 0;
            for (let num = 0; num < 20; num++) {
                for (let [name, label] of Object.entries(events)) {
                    elems.push({
                        id: i,
                        name,
                        label,
                    });
                    i++;
                }
            }

            let dotsCount = Math.ceil(elems.length / amountDisplay) ;
            console.log(dotsCount,amountDisplay)
            for (let i = 0; i < dotsCount; i++) {
                dots.push(i);
            }
            setEventElems(elems);
            setEventDots(dots);
        };

        generateEventElems();
    }, [amountDisplay]);

    // Autoplay the event carousel every 3 seconds
    useEffect(() => {
        const appendActive = () => {
            setActiveEvent((prev) => (prev + amountDisplay) % eventElems.length);
        };

        eventIntervalRef.current = setInterval(appendActive, 3000);

        return () => clearInterval(eventIntervalRef.current);  // Clear interval on unmount
    }, [eventElems, amountDisplay]);

    // Adjust display count on window resize
    useEffect(() => {
        const handleResize = () => {
            const newAmountDisplay = parseInt(getComputedStyle(document.querySelector(`.${styles.events}`)).getPropertyValue("--numDisplay"));
            setAmountDisplay(newAmountDisplay === 0 ? 4 : newAmountDisplay);
        };

        window.addEventListener("resize", handleResize);
        handleResize();  // Run on mount

        return () => window.removeEventListener("resize", handleResize);  // Clean up listener
    }, []);

    // Helper to set active events and dots
    const setActive = (newIndex) => {
        clearInterval(eventIntervalRef.current);  // Clear autoplay on manual interaction
        setActiveEvent(newIndex);
        eventIntervalRef.current = setInterval(() => {
            setActiveEvent((prev) => (prev + amountDisplay) % eventElems.length);
        }, 3000);  // Restart autoplay
    };

    // Handle swipe gestures
    const handleTouchStart = (e) => {
        touchstartXRef.current = e.changedTouches[0].screenX;
        clearInterval(eventIntervalRef.current);
    };

    const handleTouchEnd = (e) => {
        const touchendX = e.changedTouches[0].screenX;
        if (touchstartXRef.current - touchendX > touchThreshold) {
            setActive((activeEvent + amountDisplay) % eventElems.length);
        } else if (touchendX - touchstartXRef.current > touchThreshold) {
            setActive((activeEvent - amountDisplay + eventElems.length) % eventElems.length);
        }
    };

    // Render the events
    return (
        <div className={styles.events} ref={evtSec}>
            <h2 className={styles["sec-header"]}>EVENTS</h2>
            <div id="evt-cont" className={styles['evt-cont']}>
                <div className={styles['evt-arrow-left']} onClick={() => setActive((activeEvent - amountDisplay + eventElems.length) % eventElems.length)}>
                    &#8249;
                </div>
                <div className={styles['evt-arrow-right']} onClick={() => setActive((activeEvent + amountDisplay) % eventElems.length)}>
                    &#8250;
                </div>
                <div
                    className={styles['events-cont']}
                    id="events-cont"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {eventElems.slice(activeEvent, activeEvent + amountDisplay).map((evt) => (
                        <div key={evt.id} className={`${styles.evt} ${activeEvent === evt.id ? styles['evt-active'] : styles['evt-inactive']}`} style={{ backgroundImage: `url("Assets/sports/${evt.name}.png")` }}>
                            <div className={styles['evt-item-cont']}>
                                <img className={styles['evt-logo']} src={`Assets/sports/${evt.name}_logo.svg`} alt={`${evt.label} event`} />
                                <div className={styles['evt-label']}>{evt.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={styles['evt-cont__guidelines']}
                    id="evt-cont__guidelines"
                    onClick={() => window.location.href = 'https://docs.google.com/document/d/1qD68OA7NxGSBKGAg2W52b3UG6d3iZ9f5m6W_eYAyDEY/edit'}
                >
                    Guidelines
                </button>
                <div className={styles['event-dots-cont']}>
                    {eventDots.map((dotIdx) => (
                        <div
                            key={dotIdx}
                            className={`${styles['event-dot']} ${Math.floor(activeEvent / amountDisplay) === dotIdx ? styles['evt-dot-active'] : ''}`}
                            onClick={() => setActive(dotIdx * amountDisplay)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

