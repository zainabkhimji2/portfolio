import Skills from "./components/skills";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/contact";
import About from "./components/about"

// potfolio developed by Zainab Khimji
function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Header />

      <Hero/>

<Experience/>

<Skills/>
<About/>

<Contact/>
      

   
    </main>
  );
}

export default Home;
