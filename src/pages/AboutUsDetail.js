import React from 'react';

// ============================================================================
// 1. DATA CONFIGURATION CENTER (Extremely easy for future coders to edit)
// ============================================================================

const UNIVERSITY_INFO = {
  title: "About GBPUA&T",
  universityBannerImg: "images/gbpuat.avif",
  // Simply add more text strings in quotes separated by commas to add more paragraphs!
  historyParagraphs: [
    "After independence, development of the rural sector was considered the primary concern of the Government of India. In 1949, with the appointment of the Radhakrishnan University Education Commission, imparting of agricultural education through the setting up of rural universities became the focal point. Later, in 1954 an Indo-American team led by Dr. K.R. Damle, the Vice-President of ICAR, was constituted that arrived at the idea of establishing a Rural University on the land-grant pattern of USA. As a consequence a contract between the Government of India, the Technical Cooperation Mission and some land-grant universities of USA, was signed to promote agricultural education in the country.",
    "Today, Govind Ballabh Pant University of Agriculture and Technology stands as a premier landmark in Indian agricultural development, widely heralded as the harbinger of India's Green Revolution. The university continues to advance localized agronomic technologies, crop strains, and farm advisory services, directly empowering farmers across the region with modern, sustainable scientific methodologies.",
    "the website is managed by expers of all fields",// 💡 FUTURE CODER: Paste your 3rd or 4th paragraph right here like this:
    // "Your new paragraph text here..."
  ]
};

const VC_PROFILE = {
  name: "Dr. Shivendra Kumar Kashyap",
  role: "Hon'ble Vice-Chancellor",
  address: "G.B. Pant University of Agri. & Technology, Pantnagar-263145 (Distt. U.S. Nagar), Uttarakhand",
  email: "vcgbpuat[at]gmail[dot]com",
  photoImg: "images/sk_kashyap.jpg", 
  bioText: "Dr. S.K. Kashyap, Vice-Chancellor, G.B. Pant University of Agriculture and Technology, Pantnagar has made remarkable contributions in the fields of agricultural education, institutional development, communication, innovation, and student capacity building over a distinguished academic career spanning more than three decades. With over 32 years of experience in teaching, research, and extension, he has served the farming community with dedication."
};

// 🌟 NEW: Extra Portal Highlights / Core Objectives System
// If the university wants to add more specific info cards, just add objects to this list!
const PORTAL_HIGHLIGHTS = [
  {
    title: "Our Digital Mission",
    description: "To empower farmers with localized, scientifically validated solutions that enhance crop productivity, safeguard livestock health, and implement efficient farm management tools directly developed at our Pantnagar campus."
  },
  {
    title: "How This Portal Helps You",
    description: "Bridges the gap between Govind Ballabh Pant University's advanced agricultural scientific research and your practical, real-world fields through instant expert advisory features."
  }
  // 💡 FUTURE CODER: To add a 3rd highlight box, simply clear the comments below:
  //, { title: "New Feature Title", description: "New feature description text goes here." }
];

// ============================================================================
// 2. VISUAL LAYOUT LAYER (Never needs to be modified again)
// ============================================================================

function AboutUsDetail({ onBack }) {
  // Official University Colors
  const gbpuatGreen = "#004d40";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* SECTION 1: UNIVERSITY DESCRIPTION CONTAINER */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        
        {/* Perfectly Fitted Top University Banner Box */}
        <div style={{ 
          width: '100%', 
          height: '280px', 
          overflow: 'hidden', 
          borderRadius: '6px', 
          marginBottom: '25px',
          border: '1px solid #eaeaea'
        }}>
          <img 
            src={UNIVERSITY_INFO.universityBannerImg} 
            alt="GBPUAT Campus Banner" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',      
              objectPosition: 'center',  
              display: 'block'
            }}
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        </div>

        {/* University Header Banner Label */}
        <div style={{ backgroundColor: '#004d40', padding: '15px 20px', borderRadius: '4px', marginBottom: '20px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'white', fontSize: '1.8rem', fontFamily: 'sans-serif' }}>
            {UNIVERSITY_INFO.title}
          </h2>
        </div>

        {/* Dynamic Multi-Paragraph Loop */}
        {UNIVERSITY_INFO.historyParagraphs.map((paragraph, index) => (
          <p 
            key={index} 
            style={{ 
              lineHeight: '1.8', 
              color: '#222', 
              fontSize: '1.1rem', 
              textAlign: 'justify', 
              marginBottom: index === UNIVERSITY_INFO.historyParagraphs.length - 1 ? '0' : '15px' 
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* SECTION 2: PORTAL HIGHLIGHTS / ADDITIONAL DETAILS */}
      {PORTAL_HIGHLIGHTS.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {PORTAL_HIGHLIGHTS.map((card, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #ddd', borderTop: `4px solid ${gbpuatGreen}`, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: gbpuatGreen, marginTop: 0, marginBottom: '10px', fontSize: '1.25rem' }}>{card.title}</h3>
              <p style={{ color: '#444', lineHeight: '1.6', margin: 0, fontSize: '1rem', textAlign: 'justify' }}>{card.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: VICE-CHANCELLOR PROFILE BLOCK */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        
        {/* VC Profile Portrait Photo */}
        <div style={{ marginBottom: '15px' }}>
          <img 
            src={VC_PROFILE.photoImg} 
            alt={VC_PROFILE.name} 
            style={{ width: '220px', height: '240px', borderRadius: '12px', objectFit: 'cover', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
        </div>

        {/* Official Credentials Branding Subtext */}
        <h3 style={{ color: gbpuatGreen, margin: '5px 0', fontSize: '1.4rem' }}>{VC_PROFILE.name}</h3>
        <h4 style={{ color: '#333', margin: '5px 0', fontWeight: 'bold' }}>{VC_PROFILE.role}</h4>
        <p style={{ color: '#555', fontSize: '0.95rem', maxWidth: '600px', margin: '5px auto', lineHeight: '1.4' }}>{VC_PROFILE.address}</p>
        <p style={{ margin: '15px 0 25px 0', fontSize: '1rem', color: '#111' }}>
          <strong>Email:</strong> <span style={{ color: '#0066cc' }}>{VC_PROFILE.email}</span>
        </p>

        {/* Profile Content Label Bar */}
        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', marginBottom: '20px', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
          <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#333', letterSpacing: '0.5px' }}>Profile</h4>
        </div>

        {/* Comprehensive VC Biography Details */}
        <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.05rem', textAlign: 'justify', maxWidth: '1200px', margin: '0 auto' }}>
          {VC_PROFILE.bioText}
        </p>
      </div>

      {/* FOOTER ACTION ROUTER */}
      <div style={{ textAlign: 'left', marginTop: '10px' }}>
        <button 
          onClick={onBack}
          style={{ 
            padding: '12px 24px', 
            backgroundColor: gbpuatGreen, 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
          }}
        >
          &larr; Back to Dashboard
        </button>
      </div>

    </div>
  );
}

export default AboutUsDetail;