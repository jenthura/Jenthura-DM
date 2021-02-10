import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="item">
            <h1>Jenthura</h1>
          </div>
          <div className="item">
              <h3>I will run any table-top RPG for your party!</h3>
          </div>
        </div>
      </header>
      <body>
        <div className="container">
          <div className="item">
            Hello! I'm Jenthura, a Dungeon Master that wants to run your next game! Whether you're looking for a crazy game full of shenanigans, or a gritty-realism game where we count every pound and ration, or even something in-between, I'm the guy for you! I provide flexible gaming styles and very in-depth <a href="https://www.dndbeyond.com/posts/662-session-zero-a-foundation-for-greatness" rel="noreferrer noopener" target="_blank">Session Zero</a> discussions to give you the experience you're looking for.
          </div>
          <div className="item">
            Here's an example video of what it's like in my sessions.
            <div className="item">
              <iframe title="DnD Beyond Official Theme" src="https://www.youtube-nocookie.com/embed/A4BuL886bJA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="false"></iframe>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <div className="container">
          <div className="item">
            Here are my social media links
            <ul className="container">
              <li className="item">Twitter</li>
              <li className="item">Discord</li>
              <li className="item">Youtube</li>
              <li className="item">Twitch</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
