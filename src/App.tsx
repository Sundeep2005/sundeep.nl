import Hero from './components/Hero';
import { socialLinks, typingWords } from './data/siteContent';

function App() {
  return <Hero typingWords={typingWords} socialLinks={socialLinks} />;
}

export default App;
