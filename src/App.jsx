
import './frame.css';
import './App.css';
export default function App() {
  return (
    <main  style={{ backgroundColor: '#680ba5', height : '100%' , padding: '10px' , margin: '-10px' }} >

    <div >
      <h1 style={{ letterSpacing: '3px', fontFamily: 'Impact, fantasy', fontSize: '70px' , color: '#f8f8f9', textAlign: 'center'  , textShadow: '4px 5px 10px #000000' }}>
       
          Welcome to My Portfolio

     </h1>

      
    </div>
     <div className="frame" style={{ marginTop: '200px',marginBottom: '100px', margin: 'auto', hover: { backgroundColor: '#1dd41d' } }} >
    
    </div>

       <div className="frame" style={{ marginTop: '200px', marginBottom: '100px', margin: 'auto', hover: { backgroundColor: '#1dd41d' } }} >
    
    </div>
    
       <div className="frame" style={{ marginTop: '100px', marginBottom: '100px', margin: 'auto', hover: { backgroundColor: '#1dd41d' } }} >
    
       </div>
 
    </main>
  ) 

  
}




