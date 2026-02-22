import './App.css'

const setup = {
  deck: 'WKND - Nikolai Piombo Pro Model (8.25)',
  trucks: 'Independent - 141 Hollow',
  wheels: 'Spitfire - Formula Four Classic (56mm, 96)',
  bearings: 'Bones - Red Bearings',
  griptape: 'Mob - Grip Tape'
};

function CurrentSetup() {
  return (
    <div>
      <h2>Current Skateboard Setup:</h2>
      <ul>
        <li><strong>Deck:</strong> {setup.deck}</li>
        <li><strong>Trucks:</strong> {setup.trucks}</li>
        <li><strong>Wheels:</strong> {setup.wheels}</li>
        <li><strong>Bearings:</strong> {setup.bearings}</li>
        <li><strong>Griptape:</strong> {setup.griptape}</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <h1 className="title">
        This site is dedicated to keepign track of Zachary Baur's current skateboard setup!
      </h1>
      <CurrentSetup />
    </>
  )
}

export default App
