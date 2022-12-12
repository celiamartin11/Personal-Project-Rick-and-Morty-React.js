import '../styles/App.scss';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <img className='title' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="Rick and Morty y los creadores"/>
      </header>
      <main >
        <section>
          <form>
            <label>Introduce un nombre</label>
            <input placeholder='Rick'/>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
