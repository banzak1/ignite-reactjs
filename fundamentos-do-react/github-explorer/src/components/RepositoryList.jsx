const repositoryName = 'unform2';

export function RepositoryList() {
    return (

        <section className="repositori-list">

            <h1>Lista de Repositório</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">Acessar repositório</a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>
                    <a href="">Acessar repositório</a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>
                    <a href="">Acessar repositório</a>
                </li>
            </ul>
        </section>

    );
}