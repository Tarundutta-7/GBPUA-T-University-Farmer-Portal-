import React, { useState } from 'react';
import { categories } from './categoriesData';
import CategoryCard from './CategoryCard';
import CategoryDetail from './CategoryDetail';
import SubCategoryDetail from './SubCategoryDetail';
import AboutUsDetail from './pages/AboutUsDetail';
import TrainingProgramsDetail from './pages/TrainingProgramsDetail'; 

// 🌟 Import full-stack modules cleanly
import VerifiedSolutions from './VerifiedSolutions';
import ExpertDashboard from './ExpertDashboard';

// SIDEBAR NOTIFICATIONS DATA CENTER
const WHATS_NEW_UPDATES = [
  { id: 1, text: "Fisheries-Startup & Aquapreneurship Meet", fileLink: "file/fisheries-28-03-2026.pdf" },
  { id: 2, text: "119th All India Kisan Mela & Exhibition Notice", fileLink: "/file/kisan-mela-2026.pdf" },
  { id: 3, text: "Krishi Vigyan Kendra (KVK) Advisory for Kharif Crops", fileLink: "#" },
  { id: 4, text: "University Seed Production Availability List 2026", fileLink: "#" },
  { id: 5, text: "National Workshop on Drone Technology in Agriculture", fileLink: "#" },
  { id: 6, text: "Important Notice: Student Organic Mart Timings Updated", fileLink: "#" },
  { id: 7, text: "Important Notice: Student Organic Mart Timings Updated", fileLink: "#" },
  
  
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [viewAbout, setViewAbout] = useState(false);
  const [viewTraining, setViewTraining] = useState(false); 

  // State switcher modules: 'home', 'solutions', or 'expert'
  const [activeTab, setActiveTab] = useState('home');

  const [expert, setExpert] = useState(
    JSON.parse(localStorage.getItem('expert'))
  );

  // Official GBPUA&T Branding Colors
  const gbpuatGreen = "#004d40";
  const gbpuatGold = "#ffc107";

  // Navigation handlers
  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setViewAbout(false);
    setViewTraining(false);
    setActiveTab('home'); 
  };

  const handleOpenAbout = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setViewTraining(false);
    setViewAbout(true);
    setActiveTab('home');
  };

  const handleOpenTraining = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setViewAbout(false);
    setViewTraining(true);
    setActiveTab('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('expert');
    setExpert(null);
    setActiveTab('home');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Header Section */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '30px', 
        padding: '20px', 
        backgroundColor: gbpuatGreen, 
        color: 'white', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img 
            src="images/logo.png" 
            alt="GBPUAT Seal" 
            style={{ height: '80px', width: '80px', objectFit: 'contain' }}
          />
          <div style={{ textAlign: 'left' }}>
            <h1 onClick={handleBackToHome} style={{ cursor: 'pointer', margin: 0, fontSize: '2rem', letterSpacing: '0.5px' }}>
              GBPUA&T FARMER PORTAL
            </h1>
            <p style={{ color: gbpuatGold, margin: '5px 0 0 0', fontWeight: 'bold' }}>
              {activeTab === 'solutions' ? "Home > Verified Solutions FAQ" :
               activeTab === 'expert' ? "Home > Expert Command Center" :
               viewAbout ? "Home > About Us" :
               viewTraining ? "Home > Training Programs" :
               selectedSubCategory ? `Home > ${selectedCategory.title} > ${selectedSubCategory}` : 
               selectedCategory ? `Home > ${selectedCategory.title}` : "Pantnagar: Land of Opportunities"}
            </p>
          </div>
        </div>

        {/* Top Navigation Action Buttons */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          
          <button 
            onClick={handleBackToHome}
            style={{
              backgroundColor: 'transparent',
              color: activeTab === 'home' && !viewAbout && !viewTraining ? gbpuatGold : 'white',
              border: `1px solid ${activeTab === 'home' && !viewAbout && !viewTraining ? gbpuatGold : 'white'}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Home
          </button>

          <button 
            onClick={() => { handleBackToHome(); setActiveTab('solutions'); }}
            style={{
              backgroundColor: 'transparent',
              color: activeTab === 'solutions' ? gbpuatGold : 'white',
              border: `1px solid ${activeTab === 'solutions' ? gbpuatGold : 'white'}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            ✅ Answered Advisories
          </button>

          <button 
            onClick={handleOpenTraining}
            style={{
              backgroundColor: 'transparent',
              color: viewTraining ? gbpuatGold : 'white',
              border: `1px solid ${viewTraining ? gbpuatGold : 'white'}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Training Programs
          </button>

          <button 
            onClick={handleOpenAbout}
            style={{
              backgroundColor: 'transparent',
              color: viewAbout ? gbpuatGold : 'white',
              border: `1px solid ${viewAbout ? gbpuatGold : 'white'}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            About Us
          </button>

          <button 
            onClick={() => { handleBackToHome(); setActiveTab('expert'); }}
            style={{
              backgroundColor: activeTab === 'expert' ? '#ffb300' : 'transparent',
              color: activeTab === 'expert' ? gbpuatGreen : '#ffc107',
              border: '1px solid #ffc107',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            🎓 Expert Login
          </button>

          {/* Clean Logout Button renders outside navigation tabs only when session object exists */}
          {expert && (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#c62828',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b71c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#c62828'}
            >
              Logout Safely
            </button>
          )}
        </div>
      </header>

      {/* Main Layout Wrapper */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Left Column Content Area */}
        <div style={{ flex: '3', minWidth: '300px' }}>
          
          {/* Switch 1: Render Public Advisories FAQ Board */}
          {activeTab === 'solutions' && (
            <VerifiedSolutions />
          )}

          {/* Switch 2: Protected Expert Dashboard (The dashboard natively handles user login states) */}
          {activeTab === 'expert' && (
            <ExpertDashboard expert={expert} setGlobalExpert={setExpert} />
          )}

          {/* Standard Frontend Category Conditionals */}
          {activeTab === 'home' && (
            <>
              {/* About Us Page View */}
              {viewAbout && (
                <AboutUsDetail onBack={handleBackToHome} />
              )}

              {/* Training Programs Page View */}
              {viewTraining && (
                <TrainingProgramsDetail onBack={handleBackToHome} />
              )}
              
              {/* Level 1 - Home Dashboard Grid */}
              {!selectedCategory && !selectedSubCategory && !viewAbout && !viewTraining && (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                  gap: '20px' 
                }}>
                  {categories.map(cat => (
                    <div key={cat.id} onClick={() => setSelectedCategory(cat)} style={{ cursor: 'pointer' }}>
                      <CategoryCard category={cat} />
                    </div>
                  ))}
                </div>
              )}

              {/* Level 2 - Category Sub-Items View */}
              {selectedCategory && !selectedSubCategory && !viewAbout && !viewTraining && (
                <CategoryDetail 
                  category={selectedCategory} 
                  onBack={handleBackToHome} 
                  onSelectSub={setSelectedSubCategory} 
                />
              )}

              {/* Level 3 - Final Research Guideline Leaf View */}
              {selectedSubCategory && (
                <SubCategoryDetail 
                  subCategoryName={selectedSubCategory} 
                  categoryData={selectedCategory} 
                  onBack={() => setSelectedSubCategory(null)} 
                />
              )}
            </>
          )}
        </div>

        {/* Right Column Column Sidebar (Only on landing dashboard screen contexts) */}
        {activeTab === 'home' && !selectedCategory && !viewAbout && !viewTraining && (
          <aside style={{ 
            flex: '1', 
            minWidth: '300px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            alignSelf: 'flex-start'
          }}>
            <div style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '20px', 
              borderRadius: '8px', 
              borderTop: `5px solid ${gbpuatGreen}`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: gbpuatGreen, marginTop: 0, marginBottom: '15px' }}>What's New</h3>
              
              {WHATS_NEW_UPDATES.map((update) => (
                <div 
                  key={update.id} 
                  style={{ borderBottom: '1px solid #ddd', paddingBottom: '12px', marginBottom: '12px' }}
                >
                  <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#333', lineHeight: '1.4' }}>
                    {update.text}
                  </p>
                  <a 
                    href={update.fileLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: gbpuatGreen, fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    View PDF
                  </a>
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                <a 
                  href="https://www.gbpuat.ac.in/agromet/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{ 
                    width: '100%', 
                    padding: '12px', 
                    backgroundColor: gbpuatGold, 
                    color: gbpuatGreen,
                    border: 'none', 
                    fontWeight: 'bold', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    View Weather Advisory
                  </button>
                </a>

                <a 
                  href="https://www.gbpuat.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{ 
                    width: '100%', 
                    padding: '12px', 
                    backgroundColor: gbpuatGold, 
                    color: gbpuatGreen,
                    border: 'none', 
                    fontWeight: 'bold', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    Go to gbpuat.ac.in
                  </button>
                </a>
              </div>

            </div>
          </aside>
        )}

      </div>
    </div>
  );
}

export default App;