import React from 'react';

const CategoryCard = ({ category, onSelect }) => {
  const gbpuatGreen = "#004d40";

  return (
    <div 
      onClick={() => onSelect && onSelect(category)}
      style={{
        border: '1px solid #ddd',
        padding: '0 0 20px 0', 
        textAlign: 'center',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      <img 
        src={category.image} 
        alt={category.title} 
        style={{ 
          width: '100%', 
          height: '160px', 
          objectFit: 'cover', 
          objectPosition: 'center',
          marginBottom: '15px' 
        }} 
      />
      <div style={{ padding: '0 15px' }}>
        <h3 style={{ color: '#111', margin: '0 0 8px 0', fontSize: '1.2rem' }}>{category.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.4', height: '40px', overflow: 'hidden', marginBottom: '15px' }}>
          {category.desc}
        </p>
        <button style={{
          backgroundColor: gbpuatGreen,
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          View Unit Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;