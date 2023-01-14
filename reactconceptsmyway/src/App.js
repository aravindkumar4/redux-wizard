import './App.css';
import {ErrorBoundary} from 'react-error-boundary';
import Fallback from './Fallback'
import Counter from './Counter';
import Person from './Person';
const person = {firstname: "keerthipriya", lastname: 'aravind'}
function App() {
  const errorHandler = (error, errorInfo) => {
    console.log('hiiiiiiii' ,error);
    console.log(errorInfo);
  }
  return (
    <div className="App">
     <h1>Error Boundaries</h1>
     <Person person={person} />
     {/* <Person person={{}} /> */}
     <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Counter />
     </ErrorBoundary>
    </div>
  );
}

export default App;
