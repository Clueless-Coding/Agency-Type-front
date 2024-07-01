import React, { useState, useEffect } from "react";
import { ProfileProps } from "./profileTypes";
import { ResultsArray } from "../../resourses/types";

const Profile: React.FC<ProfileProps> = ({ logout, getResults, user_id }: ProfileProps) => {
    const [history, setHistory] = useState<ResultsArray[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await getResults(user_id);
                setHistory(results.data); 
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchData();
    }, [getResults, user_id]);

    return (
        <div className="profile-container">
            <button className="logout-button" onClick={logout}>Logout</button>
            <div>
                <h2>History:</h2>
                <ul className="history-list">
                    {history && history.map((item, index) => (
                        <li key={index} className="history-item">
                            <p>Mistakes: {item.mistakes}</p>
                            <p>Accuracy: {item.accuracy}</p>
                            <p>WPM: {item.wpm}</p>
                            <p>Duration: {item.duration}</p>
                            <p>Game Mode: {item.game_mode}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;