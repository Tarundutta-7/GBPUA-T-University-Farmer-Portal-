import React from 'react';

// 1. DATA CONFIG CENTER: List of 10 Training Programs (Super easy to change later)
const MOCK_TRAINING_PROGRAMS = [
  { id: 1, title: "7-Day Mushroom Cultivation & Processing Workshop", status: "Active / Ongoing", date: "May 20-27, 2026", link: "files/mushroom-training-2026.pdf" },
  { id: 2, title: "Modern Organic Farming & Soil Health Management", status: "Active / Ongoing", date: "May 25-30, 2026", link: "https://www.gbpuat.ac.in/" },
  { id: 3, title: "Advanced Dairy Cattle Management & Milk Production", status: "Upcoming", date: "June 05, 2026", link: "files/dairy-training.pdf" },
  { id: 4, title: "Drip Irrigation Systems Installation & Subsidy Scheme", status: "Upcoming", date: "June 12, 2026", link: "#" },
  { id: 5, title: "Poultry Farming Setup & Disease Management Training", status: "Upcoming", date: "June 18, 2026", link: "#" },
  { id: 6, title: "Bee-Keeping (Apiculture) Commercial Business Course", status: "Completed", date: "May 10, 2026", link: "#" },
  { id: 7, title: "Tractor & Heavy Farm Machinery Maintenance Program", status: "Completed", date: "May 02, 2026", link: "#" },
  { id: 8, title: "Polyhouse Vegetable Production Techniques", status: "Completed", date: "April 24, 2026", link: "#" },
  { id: 9, title: "Fisheries Development & Freshwater Aquaculture", status: "Completed", date: "April 15, 2026", link: "#" },
  { id: 10, title: "Post-Harvest Crop Management & Supply Chain Logistics", status: "Completed", date: "April 08, 2026", link: "#" },
];

function TrainingProgramsDetail({ onBack }) {
  const gbpuatGreen = "#004d40";

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      
      {/* Title Heading */}
      <h2 style={{ color: gbpuatGreen, borderBottom: `2px solid ${gbpuatGreen}`, paddingBottom: '10px', marginTop: 0, marginBottom: '20px' }}>
        Active Training & Extension Programs
      </h2>
      <p style={{ color: '#666', marginBottom: '25px', fontSize: '1.05rem' }}>
        Explore current, upcoming, and archived professional agricultural development training programs organized by Govind Ballabh Pant University professors. Click any active notification card below to open the official advisory program PDF layout or enrollment channel.
      </p>

      {/* Notifications Container List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {MOCK_TRAINING_PROGRAMS.map((program) => {
          // Color coding tag indicators depending on program status
          const isActive = program.status === "Active / Ongoing";
          const isUpcoming = program.status === "Upcoming";
          const statusBgColor = isActive ? '#e8f5e9' : isUpcoming ? '#fff8e1' : '#f5f5f5';
          const statusTextColor = isActive ? '#2e7d32' : isUpcoming ? '#b78103' : '#616161';

          return (
            <div 
              key={program.id} 
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                backgroundColor: isActive ? '#f9fbf9' : '#ffffff',
                boxShadow: isActive ? '0 2px 8px rgba(46, 125, 50, 0.08)' : 'none',
                borderLeft: `5px solid ${isActive ? '#2e7d32' : isUpcoming ? '#ffb300' : '#9e9e9e'}`
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '5px' }}>
                  <span style={{ backgroundColor: statusBgColor, color: statusTextColor, padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {program.status}
                  </span>
                  <span style={{ color: '#757575', fontSize: '0.85rem' }}>📆 Scheduled: {program.date}</span>
                </div>
                <h4 style={{ margin: 0, color: '#212121', fontSize: '1.15rem' }}>{program.title}</h4>
              </div>

              <div>
                <a 
                  href={program.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{
                    backgroundColor: isActive ? gbpuatGreen : '#f5f5f5',
                    color: isActive ? 'white' : '#757575',
                    border: isActive ? 'none' : '1px solid #ccc',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    View Details / PDF →
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back Button Action Control Router */}
      <button 
        onClick={onBack}
        style={{ marginTop: '30px', padding: '12px 24px', backgroundColor: gbpuatGreen, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default TrainingProgramsDetail;