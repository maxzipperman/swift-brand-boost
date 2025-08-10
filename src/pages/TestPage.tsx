// Simple test page to debug visibility issues
const TestPage = () => {
  console.log("TestPage rendering");
  return (
    <div style={{ 
      background: 'red', 
      color: 'white', 
      padding: '20px', 
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1>TEST PAGE - Can you see this?</h1>
      <p>If you can see this red background and white text, the app is working.</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default TestPage;