import { useState } from 'react';
import { stringCalculator } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState(''); 

  const handleCalculate = () => {
    try {
      const sum = stringCalculator(input);
      setResult(sum); 
      setError('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('An unknown error occurred');
      }
    }
  };

  return (
    // changing div to main along with that have modified text color
    <main 
      style={{ 
        padding: '20px',
        backgroundColor: '#fff',
        color: '#545252ff',
        maxWidth: '600px',
        margin: 'auto',
      }}>
      {/* Added alt text to the image */}
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='A decorative image showing a string'
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px'
        }}
      />

      <h2>String Calculator</h2>

      <label 
        htmlFor='numbers' 
        style={{
        display:'block',
        marginTop: '10px',
        }}
      >
        Enter numbers
      </label>
      <textarea
        id='numbers'
        name='numbers'
        style={{ 
          fontSize: '16px',
          margin: '10px 0',
          padding: '10px',
          color: '#0c0c0cff',
          width: '100%',
        }}
        placeholder= 'Example  - 1,2,3'
        value={input}
        onChange={(e) => {
          setResult(null);
          setInput(e.target.value);
        }}
      />

      {/* Changed div to button along with some style changes  */}
      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 6px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}>
        Calculate
      </button>

      {result !== null && (
        <p style={{ color: 'green', marginTop: '10px' }}>Result: {result}</p>
      )}
      
      {/* Error section with dependency on error state */}
      {error && (
        <div role='alert' style={{color: 'red', marginTop: '10px', fontWeight: 'bold'}}>
          {error}
        </div>
      )}
    </main>
  );
};

export default App;
