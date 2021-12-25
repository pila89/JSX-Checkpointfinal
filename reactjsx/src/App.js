import logo from './logo.jpg';
import './App.css';
import './style.css';


function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Good morning developers !!
I hope you're all doing great , it's been a while since we last met 
we'll be strating our standup meeting at 9:15am 
see you there </h1>
          <br />
          <img  src="https://f.hellowork.com/blogdumoderateur/2018/05/iStock-667849954-664x443.jpg" />
          <br />
          <img src={logo} />
        </div>
        <video width={320} height={240} controls>
          <source src="GAYR2943.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
