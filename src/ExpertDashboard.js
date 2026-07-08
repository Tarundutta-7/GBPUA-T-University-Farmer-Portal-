import React, { useState, useEffect } from 'react';

export default function ExpertDashboard({ expert, setGlobalExpert }) {
  // If the parent already has an active local storage expert session, initialize logged-in states immediately!
  const [isLoggedIn, setIsLoggedIn] = useState(!!expert);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [expertProfile, setExpertProfile] = useState({ 
    name: expert ? expert.expert_name : '', 
    dept: expert ? expert.department : '' 
  });

  const [queries, setQueries] = useState([]);
  const [typedAnswers, setTypedAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const gbpuatGreen = "#004d40";

  // Run automatically if the professor arrives with a pre-validated session cookie state
  useEffect(() => {
    if (isLoggedIn) {
      fetchPending(expertProfile.dept);
    }
  }, [isLoggedIn]);

  // 🌾 Dynamic multi-department auto-filtering processor loops
  const fetchPending = (currentDept) => {
    setLoading(true);
    fetch('http://localhost/farmer-portal-backend/get_pending_queries.php')
      .then(res => {
        if (!res.ok) throw new Error("Server returned error response code");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const deptKeyword = (currentDept || expertProfile.dept || "").toLowerCase();
          let filteredQueries = data;

          if (deptKeyword.includes('mushroom')) {
            // Mushroom Centre Query Routing
            filteredQueries = data.filter(q => 
              (q.category || "").toLowerCase().includes('mushroom') || 
              (q.question_text || "").toLowerCase().includes('mushroom')
            );
          } else if (deptKeyword.includes('apiculture') || deptKeyword.includes('bee') || deptKeyword.includes('honey')) {
            // Apiculture Beekeeping Centre Query Routing
            filteredQueries = data.filter(q => 
              (q.category || "").toLowerCase().includes('apiculture') || 
              (q.category || "").toLowerCase().includes('honey') || 
              (q.question_text || "").toLowerCase().includes('bee') ||
              (q.question_text || "").toLowerCase().includes('honey')
            );
          }
          
          setQueries(filteredQueries);
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Query retrieval breakdown:", err);
        setLoading(false);
      });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/farmer-portal-backend/expert_login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });
      const result = await response.json();

      if (result.status === 'success') {
        const validatedProfile = { 
          email: result.expert.email, 
          expert_name: result.expert_name, 
          department: result.department 
        };

        // Complete the authentication state tree across all levels synchronously 
        localStorage.setItem('expert', JSON.stringify(validatedProfile));
        setExpertProfile({ name: result.expert_name, dept: result.department });
        setGlobalExpert(validatedProfile);
        setIsLoggedIn(true);
      } else {
        alert("Access Denied: " + result.message);
      }
    } catch (err) {
      alert("Failed to reach target endpoint channel. Confirm Apache is toggled on in XAMPP panel!");
    }
  };

  const handleAnswerSubmit = async (queryId) => {
    if (!typedAnswers[queryId] || !typedAnswers[queryId].trim()) {
      alert("Advisory validation text response cannot be left blank.");
      return;
    }

    try {
      const response = await fetch('http://localhost/farmer-portal-backend/submit_solution.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query_id: queryId,
          expert_name: expertProfile.name,
          solution_text: typedAnswers[queryId]
        })
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert("✅ University extension resolution saved and published to farmer bulletin!");
        setTypedAnswers(prev => {
          const updated = { ...prev };
          delete updated[queryId];
          return updated;
        });
        fetchPending(expertProfile.dept);
      } else {
        alert("Database execution error: " + result.message);
      }
    } catch (err) {
      alert("Error logging advisory response back to MySQL server indices.");
    }
  };

  // If there is no authenticated cookie tracking tokens, render a singular clean credential panel grid
  if (!isLoggedIn) {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
        <h3 style={{ color: gbpuatGreen, textAlign: 'center', marginTop: 0, marginBottom: '20px' }}>🎓 University Extension Login</h3>
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px' }}>Center Email Address:</label>
            <input 
              type="email" 
              placeholder="unit.center@gbpuat.ac.in "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px' }}>Security Secret Password:</label>
            <input 
              type="password" 
              placeholder="Enter password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: gbpuatGreen, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
            Verify Login Securely
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ddd', paddingBottom: '15px', marginBottom: '25px' }}>
        <div>
          <h2 style={{ color: gbpuatGreen, margin: 0 }}>🔬 University Extension Expert Command Desk</h2>
          <span style={{ color: '#666', fontSize: '0.95rem' }}>Authenticated Office: <b>{expertProfile.dept} ({expertProfile.name})</b></span>
        </div>
      </div>

      {loading ? (
        <p style={{ fontWeight: 'bold', color: gbpuatGreen }}>Loading filtered pending department queries...</p>
      ) : queries.length === 0 ? (
        <div style={{ padding: '30px', textAlign: 'center', border: '2px dashed #ccc', borderRadius: '8px', backgroundColor: '#fafffa' }}>
          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '1.2rem', margin: 0 }}>🎉 Great job! No incoming pending farmer queries require attention right now.</p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>All localized center queries have been resolved cleanly by your department scientists.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {queries.map((q) => (
            <div key={q.id} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '6px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <span>🌾 Category: <b>{q.category || "Unassigned"}</b></span>
                <span>📍 Location: {q.location || "Unknown"}</span>
                <span>Submitted by: <b>{q.farmer_name || "Anonymous"}</b></span>
              </div>
              <p style={{ fontStyle: 'italic', background: '#f5f5f5', padding: '12px', borderRadius: '4px', color: '#333', marginTop: 0, borderLeft: '4px solid #aaa' }}>
                "{q.question_text || "No query body text details."}"
              </p>
              
              <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>Write Official University Advisory Solution:</label>
              <textarea
                rows="4"
                placeholder="Type dynamic production advice, incubation rules, or regional disease controls..."
                value={typedAnswers[q.id] || ''}
                onChange={(e) => setTypedAnswers({ ...typedAnswers, [q.id]: e.target.value })}
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical', fontFamily: 'inherit' }}
              />
              <button 
                onClick={() => handleAnswerSubmit(q.id)}
                style={{ marginTop: '12px', padding: '10px 20px', backgroundColor: gbpuatGreen, color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
              >
                Submit Verified Solution
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}