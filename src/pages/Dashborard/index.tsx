import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import api from "../../services/api";

import { Title, Form, Repositories } from "./styles";
import logo from "../../assets/logo.svg";

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState("");
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        const response = await api.get(`repos/${newRepo}`);
        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo("");
    }

    return (
        <>
            <img src={logo} alt="Git Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    placeholder="Digite o usuário/repositório"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </Form>

            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="/repository">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={30} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
