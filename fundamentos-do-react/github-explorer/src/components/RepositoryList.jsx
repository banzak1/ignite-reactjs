import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/users/banzak1/repos


export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/banzak1/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repositories-list">
            <h1>Lista de Repositório</h1>
            <ul>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>

    );
}