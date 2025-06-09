import React from "react";
import PersonComponent from "../components/Person";
import type { Person } from "../interfaces";
import { getServerSideProps } from "next";

interface Props {
  person: Person[];
}

const Index: React.FC<Props> = ({ data }) => {
  return (
    <ul>
        {data.map((p) =>(
            <PersonComponent key={p.id} person={p} />
        ))}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    // Colocamos uma url fixa apenas para exemplo, não é uma boa prática.
    const res = await fetch("http://localhost:3000/api/people");
    const data: Person[] = await res.json();
    
    return {
      props: {
        data,
      },
    };
} catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      props: {
        data: [],
      },
    };
}

};