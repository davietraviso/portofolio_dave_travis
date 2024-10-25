import './App.css';
import Footer from './sections/Footer/Footer';
import Main from './sections/Foto/Main';
import Kontak from './sections/Kontak/Kontak';
import Proyek from './sections/Proyek/Proyek';
import Skills from './sections/Skill/Skill';
import Tentang from './sections/Tentang Saya/Tentang';
import Timeline from './sections/Timeline/Timeline';

function App() {
    
  return (
    <>
      <Main />
      <Tentang />
      <Timeline />
      <Proyek />
      <Skills />
      <Kontak />
      <Footer />
    </>
  )
}

export default App
