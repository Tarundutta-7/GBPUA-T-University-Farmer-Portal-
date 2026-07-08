import React from 'react';
// 🌟 Import our custom form module component to connect with the backend
import FarmerQueryForm from './FarmerQueryForm';

const SubCategoryDetail = ({ subCategoryName, categoryData, onBack }) => {
  // Official University Branding Layout Colors
  const gbpuatGreen = "#004d40";
  const gbpuatMaroon = "#800000";

  const hasCustomData = categoryData?.subDetails?.[subCategoryName];
  
  const subInfo = hasCustomData ? categoryData.subDetails[subCategoryName] : {
    about: `Official scientific production, cultivation protocol, and distribution management framework for ${subCategoryName} varieties developed by the research council at Pantnagar university.`,
    guidelines: [
      { step: "Recommended Strains", detail: "Certified campus-bred seed lines optimized for regional agro-climatic zones." },
      { step: "Substrate Setup", detail: "Sterilization rules, humidity parameters, and organic material balance controls." }
    ],
    videos: [],
    notices: [],
    marketRates: []
  };

  const safeGuidelines = subInfo.guidelines || [];
  const safeVideos = subInfo.videos || [];
  const safeNotices = subInfo.notices || [];
  const safeRates = subInfo.marketRates || [];

  return (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: '25px' }}>
      
      {/* HEADER CONTROL BLOCK */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `3px solid ${gbpuatMaroon}`, paddingBottom: '12px' }}>
        <h2 style={{ color: gbpuatGreen, margin: 0, fontSize: '1.6rem' }}>
          {subCategoryName} — Research & Production Guide
        </h2>
        <button 
          onClick={onBack} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #ccc', 
            borderRadius: '4px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            color: '#444',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
        >
          ← Back to List
        </button>
      </div>

      {/* TWO-COLUMN SIDE-BY-SIDE INTEGRATED GRID DASHBOARD */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* ================= LEFT MAIN COLUMN ================= */}
        <div style={{ flex: '3', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* 1. Overview Block */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '25px' }}>
              <h3 style={{ margin: '0 0 12px 0', color: gbpuatGreen }}>Overview Description</h3>
              <p style={{ margin: 0, fontSize: '1.05rem', color: '#222', lineHeight: '1.7', textAlign: 'justify' }}>
                {subInfo.about}
              </p>
            </div>
          </div>

          {/* 2. Guidelines / Info Box */}
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', color: gbpuatGreen, borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
              Pantnagar Scientific Guidelines
            </h3>
            {safeGuidelines.length === 0 ? (
              <p style={{ color: '#666', fontSize: '0.95rem' }}>No specific research guidelines listed for this variety yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {safeGuidelines.map((guide, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <span style={{ backgroundColor: '#e0efe0', color: gbpuatGreen, fontWeight: 'bold', borderRadius: '50%', minWidth: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
                      {idx + 1}
                    </span>
                    <div>
                      <strong style={{ color: '#111', fontSize: '1rem' }}>{guide.step}</strong>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem', color: '#555', lineHeight: '1.45' }}>{guide.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Video Suggestion Grid (Clickable YouTube Handles) */}
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', color: gbpuatMaroon }}>
              Expert Video Demonstrations
            </h3>
            {safeVideos.length === 0 ? (
              <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>Demonstration media modules coming soon.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
                {safeVideos.map((vid, idx) => (
                  <a 
                    key={idx}
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '6px', border: '1px solid #eee', transition: 'background-color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                  >
                    <div style={{ width: '80px', height: '55px', backgroundColor: '#cc0000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>
                      ▶️
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: '#0066cc', lineHeight: '1.3', fontWeight: 'bold' }}>{vid.title}</h4>
                      <span style={{ fontSize: '0.75rem', color: '#666', backgroundColor: '#eee', padding: '1px 5px', borderRadius: '3px' }}>
                        ⏱️ {vid.duration} Mins
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 🌟 4. INTEGRATED QUERY SUBMISSION BACKEND GATEWAY */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #ddd', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <FarmerQueryForm 
              selectedCategory={{ title: `${categoryData?.title || 'General'} - ${subCategoryName}` }} 
              onClose={() => alert("Form state reset cleanly.")} 
            />
          </div>

        </div>

        {/* ================= RIGHT COLUMN SIDEBAR ================= */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* A. Gold Notice Desk with Optional PDF Download Options */}
          <div style={{ backgroundColor: '#fffdf3', padding: '20px', borderRadius: '8px', border: '1px solid #eedc9a', borderTop: '4px solid #d4af37', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ color: '#856404', marginTop: 0, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
              🔔 Variety Notice Desk
            </h4>
            {safeNotices.length === 0 ? (
              <p style={{ color: '#777', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>No active alerts for this category today.</p>
            ) : (
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.9rem', color: '#333', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {safeNotices.map((notice, idx) => {
                  const hasPdf = notice.pdfUrl && notice.pdfUrl.trim() !== "";
                  return (
                    <li key={idx} style={{ lineHeight: '1.45', textAlign: 'justify' }}>
                      <span>{notice.text || notice}</span>
                      {hasPdf && (
                        <div style={{ marginTop: '5px' }}>
                          <a 
                            href={notice.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: 'bold', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            📄 Download Official PDF Report
                          </a>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* B. University Produce Marketing Counters */}
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h4 style={{ marginTop: 0, marginBottom: '12px', color: gbpuatGreen }}>
              Marketing & Commercial Sales
            </h4>
            {safeRates.length === 0 ? (
              <p style={{ color: '#777', fontSize: '0.85rem', margin: 0 }}>Pricing listings not configured.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {safeRates.map((row, index) => (
                  <div key={index} style={{ borderBottom: index === safeRates.length - 1 ? 'none' : '1px solid #eee', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ maxWidth: '65%' }}>
                      <strong style={{ fontSize: '0.85rem', color: '#222', display: 'block' }}>{row.item}</strong>
                      <span style={{ fontSize: '0.75rem', color: '#777' }}>{row.unit}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ block: 'block', fontWeight: 'bold', color: gbpuatMaroon, fontSize: '0.9rem' }}>{row.price}</span>
                      <span style={{ fontSize: '0.7rem', color: row.state?.includes('Stock') ? '#2e7d32' : '#e65100', fontWeight: 'bold' }}>{row.state}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <button 
              onClick={() => {
                const element = document.getElementsByTagName('form')[0];
                if(element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '11px',
                backgroundColor: gbpuatGreen,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Consult Assigned Extension Expert
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SubCategoryDetail;