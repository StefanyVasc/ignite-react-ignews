import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Debugando e agilizando testes na React Testing Library
            </strong>
            <p>
              Como um método tão simples pode te ajudar a acelerar os seus
              testes e também descobrir erros escondidos.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Debugando e agilizando testes na React Testing Library
            </strong>
            <p>
              Como um método tão simples pode te ajudar a acelerar os seus
              testes e também descobrir erros escondidos.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Debugando e agilizando testes na React Testing Library
            </strong>
            <p>
              Como um método tão simples pode te ajudar a acelerar os seus
              testes e também descobrir erros escondidos.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
