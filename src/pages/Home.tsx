// src/pages/Home.tsx
import Hero from "../components/Hero";
import LatestStories from "../components/LatestStories";
import HelpButtons from "../components/HelpButtons";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestStories />
      <HelpButtons />
      <SubscribeForm />
    </>
  );
};

export default Home;
