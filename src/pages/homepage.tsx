import Content from "../components/content";
import Header from "../components/header";
import Hero from "../components/hero";

export function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Content background={`var(--color-white)`} />
    </>
  );
}
