import React, { useState } from 'react';

const CategoryDetail = ({ category, onBack, onSelectSub }) => {
  // Official GBPUA&T Branding Primary Palette Color
  const gbpuatGreen = "#004d40";

  // --- INTERACTIVE FORM STATE CONTROL ENGINE ---
  const [farmerName, setFarmerName] = useState('');
  const [farmerEmail, setFarmerEmail] = useState(''); // 🌟 ADDED: State for private email updates
  const [location, setLocation] = useState('');
  const [question, setQuestion] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- SAFE FALLBACK DATA RESOLVERS ---
  // Keeps the portal up and running seamlessly even if fields are left blank in categoriesData.js
  const subItems = category.subCategories || []; 
  const notices = category.notices || [];
  const links = category.relatedLinks || []; 
  const aboutText = category.aboutDept || category.desc || "Welcome to the Unit interface.";
  const incharge = category.incharge || { 
    name: "Faculty Specialist Assigned", 
    role: "Unit Coordinator Desk", 
    contact: "+91-5944-XXXXXX", 
    email: "extension.pantnagar[at]gmail[dot]com" 
  };

  // --- SUBMISSION LOGIC DISPATCHER ---
  const handleQuerySubmit = async (e) => {
    e.preventDefault();

    const dataPayload = {
      farmer_name: farmerName,
      farmer_email: farmerEmail, // 🌟 ADDED: Included inside the JSON body data bundle
      location: location,
      category: category.title,
      question_text: question
    };

    console.log("🚀 Payload:", dataPayload);

    try {
      const response = await fetch(
        'http://localhost/farmer-portal-backend/submit_query.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPayload),
        }
      );

      const result = await response.json();

      console.log("✅ Server Response:", result);

      if (result.status === 'success') {
        setFormSubmitted(true);
      } else {
        alert("Database Error: " + result.message);
      }

    } catch (error) {
      console.error("❌ Submission failed:", error);
      alert("Could not connect to backend server.");
    }
  };

  // --- RESET FORM FIELD ACTIONS ---
  const handleResetForm = () => {
    setFarmerName('');
    setFarmerEmail(''); // 🌟 ADDED: Clear email state token cleanly on form reset
    setLocation('');
    setQuestion('');
    setFormSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', fontFamily: 'sans-serif' }}>
      
      {/* ============================================================================
          LEFT AREA: ACADEMIC DETAILS, TYPE CARDS & QUESTION FORMS
          ============================================================================ */}
      <div style={{ flex: '3', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* 1. Main Unit Title & About Information Card */}
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h2 style={{ borderBottom: `2px solid ${gbpuatGreen}`, paddingBottom: '12px', color: gbpuatGreen, marginTop: 0 }}>
            Unit of {category.title}
          </h2>
          <p style={{ lineHeight: '1.7', color: '#222', fontSize: '1.05rem', textAlign: 'justify', margin: 0 }}>
            {aboutText}
          </p>
        </div>

        {/* 2. Official Unit In-Charge & Personnel Contact Panel */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '20px 25px', 
          borderRadius: '8px', 
          border: '1px solid #ddd', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          display: 'flex', 
          gap: '20px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '1.4rem',
            border: `2px solid ${gbpuatGreen}`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            👨‍🔬
          </div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', color: gbpuatGreen, fontSize: '1.2rem' }}>{incharge.name}</h3>
            <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>{incharge.role}</p>
            <div style={{ fontSize: '0.85rem', color: '#333', display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
              <span>📞 <strong>Contact:</strong> {incharge.contact}</span>
              <span>✉️ <strong>Email:</strong> <span style={{ color: '#0066cc' }}>{incharge.email}</span></span>
            </div>
          </div>
        </div>

        {/* 3. Cultivation Sub-Category Block Item Matrix Grid */}
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, color: gbpuatGreen, marginBottom: '15px', fontSize: '1.25rem' }}>
            Supported Cultivation Types & Varieties
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '15px' }}>
            {subItems.map(item => (
              <div 
                key={item} 
                onClick={() => onSelectSub(item)} 
                style={{ 
                  border: '1px solid #e0e0e0', 
                  textAlign: 'center', 
                  padding: '15px', 
                  cursor: 'pointer', 
                  backgroundColor: '#fbfbfb',
                  borderRadius: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = gbpuatGreen; e.currentTarget.style.backgroundColor = '#f4fbf6'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.backgroundColor = '#fbfbfb'; }}
              >
                <div style={{ height: '70px', backgroundColor: '#eaeaea', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777', fontSize: '0.85rem', borderRadius: '4px', border: '1px dashed #ccc' }}>
                  📸 {item} Asset
                </div>
                <strong style={{ color: '#111', fontSize: '0.95rem' }}>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Smart Interactive Form Engine Block */}
        <div style={{ 
          padding: '25px', 
          backgroundColor: '#ffffff', 
          border: `1px solid #ddd`,
          borderTop: `4px solid ${gbpuatGreen}`, 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {!formSubmitted ? (
            <>
              <h3 style={{ marginTop: 0, color: gbpuatGreen }}>
                Ask a Pantnagar Expert about {category.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
                Your question will be dynamically indexed and assigned directly to our campus Unit specialists.
              </p>
              
              <form onSubmit={handleQuerySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input 
                  type="text" 
                  placeholder="Enter Your Full Name" 
                  value={farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} 
                  required
                />
                
                {/* 🌟 ADDED EMAIL FIELD: Seamless interface implementation */}
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address (To receive direct expert reply alerts)" 
                  value={farmerEmail}
                  onChange={(e) => setFarmerEmail(e.target.value)}
                  style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} 
                  required
                />
                
                <input 
                  type="text" 
                  placeholder="Enter Your Village / District Location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} 
                  required
                />
                <textarea 
                  placeholder="Describe your farming issue, plant symptoms, crop age or query details comprehensively..." 
                  rows="4" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}
                  required
                ></textarea>
                
                <button 
                  type="submit" 
                  style={{ 
                    backgroundColor: gbpuatGreen, 
                    color: 'white', 
                    padding: '12px 24px', 
                    border: 'none', 
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                  }}
                >
                  Submit Question to Unit
                </button>
              </form>
            </>
          ) : (
            /* DYNAMIC FORM SUCCESS INTERACTION SHIELD VIEW STATE */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
              <h3 style={{ color: gbpuatGreen, margin: '0 0 10px 0' }}>Thank You, {farmerName}!</h3>
              <p style={{ color: '#333', fontSize: '1.05rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                Your question has been securely transmitted to the {category.title} Extension Desk.
              </p>
              <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 20px auto', lineHeight: '1.5' }}>
                Our research council professors will analyze the conditions matching region: <strong>"{location}"</strong>.
              </p>
              <button 
                onClick={handleResetForm}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  color: '#444',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                Ask Another Question
              </button>
            </div>
          )}
        </div>

      </div>

      {/* ============================================================================
          RIGHT SIDEBAR AREA: GOLDEN NOTICE DESK & OFFICIAL WEB LINKS
          ============================================================================ */}
      <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* A. Gold Highlighted Administrative Notice Desk Layout Block */}
        <div style={{ 
          backgroundColor: '#fffdf3', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #eedc9a',
          borderTop: '4px solid #d4af37' // Heavy Gold Top Bar Border
        }}>
          <h4 style={{ color: '#856404', marginTop: 0, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
            🔔 Important Notice Desk
          </h4>
          {notices.length === 0 ? (
            <p style={{ color: '#777', fontSize: '0.9rem', margin: 0, linestyle: 'italic' }}>
              No active warnings, training timetables, or alerts published for this category today.
            </p>
          ) : (
            <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.9rem', color: '#333', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {notices.map((notice, index) => (
                <li key={index} style={{ lineHeight: '1.45' }}>{notice}</li>
              ))}
            </ul>
          )}
        </div>

        {/* B. Secondary Official External University Resource Links Frame */}
        <aside style={{ 
          backgroundColor: '#f9fbf9', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #e0efe0'
        }}>
          <h4 style={{ color: gbpuatGreen, marginTop: 0, marginBottom: '15px', borderBottom: '1px solid #e0efe0', paddingBottom: '8px' }}>
            Useful Resources
          </h4>
          {links.length === 0 ? (
            <p style={{ color: '#777', fontSize: '0.85rem', margin: 0 }}>Reference portals not listed.</p>
          ) : (
            <ul style={{ fontSize: '0.95rem', paddingLeft: '20px', lineHeight: '2', margin: 0 }}>
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href="#/" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}>{link}</a>
                </li>
              ))}
            </ul>
          )}
          
          {/* Dashboard Back Control Navigation Trigger Router */}
          <button 
            onClick={onBack} 
            style={{ 
              width: '100%', 
              marginTop: '25px',
              padding: '12px',
              backgroundColor: gbpuatGreen,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ← Back to Main Portal
          </button>
        </aside>

      </div>

    </div>
  );
};

export default CategoryDetail;