import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloUser name="Cheddy" />
      <HelloUser name="Dan Andrews" />
      <HelloUser />
    </div>
  );
}

export default App;
