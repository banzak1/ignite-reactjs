import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repositori-list">
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