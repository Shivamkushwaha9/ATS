//@ts-ignore
// src/app/components/experience/ExperienceItem.jsx
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import IconSelector from './IconSelector';

const ExperienceItem = ({ experience, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <IconSelector icon={experience.positionIcon} size={48} />
          </div>
          
          <div>
            <h3 className="font-bold text-lg">{experience.company}</h3>
            <p className="text-gray-700">{experience.position}</p>
            <p className="text-gray-500 text-sm">{experience.duration}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="flex gap-2 mb-2">
            <button 
              onClick={onEdit}
              className="text-blue-500 hover:text-blue-700"
              aria-label="Edit experience"
            >
              <FaPencilAlt />
            </button>
            <button 
              onClick={onDelete}
              className="text-red-500 hover:text-red-700"
              aria-label="Delete experience"
            >
              <FaTrash />
            </button>
          </div>
          <div className="flex flex-wrap gap-1">
            {experience.skillsUsed.map(skill => (
              <span 
                key={skill} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <ul className="list-disc pl-5 space-y-1">
          {experience.description.map((bullet, index) => (
            <li key={index} className="text-gray-700">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;