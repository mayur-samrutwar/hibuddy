import "@/styles/globals.css";
import { CharacterProvider } from '../context/CharacterContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <CharacterProvider>
      <Component {...pageProps} />
    </CharacterProvider>
  );
}