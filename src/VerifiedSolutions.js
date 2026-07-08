import React, { useState, useEffect } from 'react';

export default function VerifiedSolutions() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  const gbpuatGreen = "#004d40";
  const gbpuatMaroon = "#800000";

  useEffect(() => {
    // Pull the completed, resolved answers from our new endpoint
    fetch('http://localhost/farmer-portal-backend/get_resolved_solutions.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setSolutions(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load public solutions:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ fontWeight: 'bold', color: gbpuatGreen }}>Loading verified university advisories...</p>;
  }

  return (
    <div style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: gbpuatGreen, borderBottom: `2px solid ${gbpuatGreen}`, paddingBottom: '10px' }}>
        🔬 Verified University Solutions FAQ
      </h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>
        Browse official agronomic recommendations and disease control measures provided by GBPUA&T scientists.
      </p>

      {solutions.length === 0 ? (
        <div style={{ padding: '30px', textAlign: 'center', border: '2px dashed #ccc', borderRadius: '8px', backgroundColor: '#fafafa' }}>
          <p style={{ color: '#666', margin: 0 }}>No public advisories have been published yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {solutions.map((sol) => (
            <div 
              key={sol.id} 
              style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              {/* Meta information banner */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
                <span>🌾 Category: <b>{sol.category}</b></span>
                <span>📍 Farmer Location: {sol.location}</span>
                <span>Submitted by: {sol.farmer_name}</span>
              </div>

              {/* Farmer's original question */}
              <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#333' }}>
                ❓ Farmer Query:
              </p>
              <p style={{ fontStyle: 'italic', color: '#555', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px', margin: '0 0 15px 0' }}>
                "{sol.question_text}"
              </p>

              {/* Scientist's response advisory block */}
              <div style={{ backgroundColor: '#edf7ed', padding: '15px', borderRadius: '6px', borderLeft: `5px solid ${gbpuatGreen}` }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: gbpuatGreen }}>
                  ✅ Official Advisory Response:
                </p>
                <p style={{ margin: '0 0 8px 0', color: '#222', lineHeight: '1.5' }}>
                  {sol.answer_text}
                </p>
                <span style={{ fontSize: '0.8rem', color: gbpuatMaroon, fontWeight: 'bold' }}>
                  🎓 Attributed Expert: {sol.expert_name || "University Extension Panel"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}