import React, { useState } from 'react';

export default function FarmerQueryForm({ selectedCategory }) {
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [problemText, setProblemText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !village.trim() || !problemText.trim()) {
      alert("Please fill out all form fields before submitting.");
      return;
    }

    setLoading(true);

    // 🌟 LOWERCASE KEYS match the PHP file exactly
    const payload = {
      farmer_name: name,
      location: village,
      category: selectedCategory ? selectedCategory.title : "General Agriculture",
      question_text: problemText
    };

    try {
      const response = await fetch('http://localhost/farmer-portal-backend/submit_query.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert(result.message);

      if (result.status === 'success') {
        // Clear inputs on success
        setName('');
        setVillage('');
        setProblemText('');
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not connect to server. Check that Apache is running in XAMPP!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '8px', textAlign: 'left' }}>
      <h3 style={{ color: '#004d40', marginBottom: '5px', marginTop: 0 }}>🌾 Post an Agricultural Query</h3>
      <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '20px' }}>Send your specific crop or farming question directly to our university scientists.</p>
      
      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '0.9rem' }}>Farmer Full Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        required
      />

      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '0.9rem' }}>Your Village / Block / City:</label>
      <input 
        type="text" 
        value={village} 
        onChange={(e) => setVillage(e.target.value)} 
        placeholder="e.g., Pantnagar, Rudrapur"
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        required
      />

      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '0.9rem' }}>Describe your Crop / Livestock Problem:</label>
      <textarea 
        rows="4" 
        value={problemText} 
        onChange={(e) => setProblemText(e.target.value)} 
        placeholder="Provide observations regarding crop age, leaf color changes, or pest symptoms..."
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}
        required
      />

      <button 
        type="submit" 
        disabled={loading}
        style={{ width: '100%', padding: '12px', backgroundColor: '#004d40', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
      >
        {loading ? "Submitting Inquiry Securely..." : "Submit Question to University"}
      </button>
    </form>
  );
}