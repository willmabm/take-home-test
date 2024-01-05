import React, { useEffect, useState } from "react";
import { getCommits } from "../services/getCommits";

const CommitHistory = () => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        getCommits()
            .then(commits => {
                const newData = commits.map((item) => ({
                    message: item.commit.message
                }))
                setCommits(newData);
            });
    }, []);

    return (
        <div>
            <h1>Git Commit History</h1>
            <ul className="lista">
                {commits.map((item, index) => (
                    <li>{item.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommitHistory;