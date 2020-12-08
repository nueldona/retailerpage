// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Nav';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { Section } from './components/Section';
import { Article } from './components/article';
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <Section></Section>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
