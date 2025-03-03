// src/app/components/experience/IconSelector.jsx
import React, { useState } from 'react';
import { 
  FaCode, FaDatabase, FaChartBar, FaLaptopCode, FaServer, 
  FaMobileAlt, FaPalette, FaSearch, FaRobot, FaNetworkWired,
  FaTools, FaShieldAlt, FaCloudUploadAlt, FaMicrochip, FaBrain
} from 'react-icons/fa';
// import React from 'react';

const icons = [
  { id: 'code', icon: FaCode, label: 'Software Engineer' },
  { id: 'database', icon: FaDatabase, label: 'Database Engineer' },
  { id: 'chart', icon: FaChartBar, label: 'Data Scientist' },
  { id: 'laptop', icon: FaLaptopCode, label: 'Frontend Developer' },
  { id: 'server', icon: FaServer, label: 'Backend Developer' },
  { id: 'mobile', icon: FaMobileAlt, label: 'Mobile Developer' },
  { id: 'palette', icon: FaPalette, label: 'UI/UX Designer' },
  { id: 'search', icon: FaSearch, label: 'SEO Specialist' },
  { id: 'robot', icon: FaRobot, label: 'ML Engineer' },
  { id: 'network', icon: FaNetworkWired, label: 'Network Engineer' },
  { id: 'tools', icon: FaTools, label: 'DevOps Engineer' },
  { id: 'shield', icon: FaShieldAlt, label: 'Security Engineer' },
  { id: 'cloud', icon: FaCloudUploadAlt, label: 'Cloud Architect' },
  { id: 'chip', icon: FaMicrochip, label: 'Hardware Engineer' },
  { id: 'brain', icon: FaBrain, label: 'AI Researcher' }
];

const IconSelector = ({ selectedIcon, onSelectIcon, size = 24 }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to render the selected icon
  const renderIcon = (iconId, iconSize) => {
    const iconObj = icons.find(i => i.id === iconId);
    if (!iconObj) return null;
    
    const IconComponent = iconObj.icon;
    return <IconComponent size={iconSize} className="text-blue-600" />;
  };

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="border rounded-lg p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50"
      >
        {renderIcon(selectedIcon, 24)}
        <span className="text-gray-700">
          {icons.find(i => i.id === selectedIcon)?.label || 'Select an icon'}
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <div className="p-2 grid grid-cols-3 gap-2">
            {icons.map((iconObj) => (
              <div
                key={iconObj.id}
                onClick={() => {
                  onSelectIcon(iconObj.id);
                  setIsOpen(false);
                }}
                className={`p-2 rounded-lg flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 ${
                  selectedIcon === iconObj.id ? 'bg-blue-100 border-blue-500' : ''
                }`}
              >
                {React.createElement(iconObj.icon, { size: 20, className: "text-blue-600" })}
                <span className="text-xs text-center">{iconObj.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// This is a simplified version for displaying just the icon
export const IconDisplay = ({ icon, size = 24 }) => {
  const iconObj = icons.find(i => i.id === icon);
  if (!iconObj) return null;
  
  const IconComponent = iconObj.icon;
  return <IconComponent size={size} className="text-blue-600" />;
};

export default IconSelector;