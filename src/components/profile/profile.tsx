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
        <>
            <button onClick={logout}>Logout</button>
            <div>
                <h2>History:</h2>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>
                            <p>Mistakes: {item.mistakes}</p>
                            <p>Accuracy: {item.accuracy}</p>
                            <p>WPM: {item.wpm}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Profile;