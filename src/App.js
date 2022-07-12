import './css/App.css';
import Blog from './components/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Router>
          <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ContactUs" component={ContactUs}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
