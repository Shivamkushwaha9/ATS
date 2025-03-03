//@ts-nocheck
'use state';
import { useState, useEffect, useRef } from 'react';
import { FaPlus, FaTimes, FaSearch } from 'react-icons/fa';

export const KeySkills = () => {
  const [skills, setSkills] = useState(['JavaScript', 'React']);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [availableSkills, setAvailableSkills] = useState([
    'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 
    'Node.js', 'Express', 'MongoDB', 'SQL', 'Python', 
    'UI/UX Design', 'Docker', 'AWS', 'Git', 'Redux'
  ]);
  const modalRef = useRef(null);

  const filteredSkills = availableSkills.filter(skill => 
    skill.toLowerCase().includes(searchTerm.toLowerCase()) && 
    !skills.includes(skill)
  );

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-3xl shadow relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Key Skills</h2>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
        >
          <FaPlus />
        </button>
      </div>
      
      {skills.length === 0 ? (
        <p className="text-gray-500 italic">No skills added yet. Click the + button to add skills.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2"
            >
              <span>{skill}</span>
              <button 
                onClick={() => removeSkill(skill)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Skills Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-md m-4 max-h-[80vh] flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Add Skills
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="p-4 border-b">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-y-auto flex-1 p-4">
              {filteredSkills.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No matching skills found</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {filteredSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => {
                        addSkill(skill);
                        setSearchTerm('');
                      }}
                      className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
                    >
                      <span className="text-blue-600">+</span> {skill}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';

export const ProfileSummary = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
      <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error quaerat voluptate porro molestiae unde quia, quasi ad minima, consectetur culpa magnam ipsam quam dicta. Eos dolorem iure omnis voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente tenetur esse quo molestiae nesciunt, perferendis pariatur dolor, libero aliquam laboriosam quos fuga excepturi laudantium illo delectus veniam vitae voluptas?</p>
      {/* Dummy height to simulate content */}
      
   </div>
);

export const Education = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <p className='text-xl font-semibold '>B.Tech/B.E. from Lokmanya Tilak College of Engineering, Navi Mumbai</p>
      <p className='text-lg text-gray-600'>Graduating in 2026</p>
      <p className='text-xl font-semibold '>B.Tech/B.E. from Lokmanya Tilak College of Engineering, Navi Mumbai</p>
      <p className='text-lg text-gray-600'>Graduating in 2026</p>
   </div>
);


export const Experience = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <p>This is your experience section. Provide details about your work experience here.</p>
      
   </div>
);

export const Projects = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>This is your projects section. Describe your projects and contributions here.</p>
      
   </div>
);

export const Resume = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <p>This is your resume section. You can provide a downloadable resume or details here.</p>
      
   </div>
);

export const Preferences = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Preferences</h2>
      <p>This is your preferences section. Adjust your settings and preferences here.</p>
      
   </div>
);

export const Language = () => (
   <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">Language</h2>
      <p>This is your language section. List your language proficiencies here.</p>
      
   </div>
);
