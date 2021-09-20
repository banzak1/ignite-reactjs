import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
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