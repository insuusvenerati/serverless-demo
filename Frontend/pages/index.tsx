import useSWR from "swr";
import styles from "../styles/Home.module.css";

const fetcher = (url) => fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`).then((r) => r.json());
const fetcherServerless = (url) => fetch(`${process.env.NEXT_PUBLIC_SERVERLESS_URL}${url}`).then((r) => r.json());

export default function Home() {
  const { data: cats, error: catsError } = useSWR(`/cats`, fetcher);
  const { data: dogs, error: dogsError } = useSWR(`/dogs`, fetcher);
  const { data: apples, error: applesError } = useSWR(`/apples`, fetcherServerless);

  if (catsError || dogsError) return <div className={styles.container}> {catsError || dogsError} </div>;
  if (!cats) return <h1 className={styles.container}>Loading...</h1>;
  if (!dogs) return <h1 className={styles.container}>Loading...</h1>;
  if (!apples) return <h1 className={styles.container}>Loading...</h1>;
  console.log(cats);

  return (
    <div className={styles.container}>
      <h1>Hello Apple</h1>
      <p> Message from backend server: {cats.message}</p>
      <p> Message from backend server: {dogs.message}</p>
      <p> Message from serverless function: {apples.message}</p>
    </div>
  );
}
