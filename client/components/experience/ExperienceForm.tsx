//@ts-nocheck
// src/app/components/experience/ExperienceForm.jsx
import { useState, useRef } from 'react';
import { FaTimes, FaPlus } from 'react-icons/fa';
import IconSelector from './IconSelector';

const ExperienceForm = ({ onClose, onSave, userId, initialData = null }) => {
  const [formData, setFormData] = useState({
    position: initialData?.position || '',
    positionIcon: initialData?.positionIcon || 'code',
    company: initialData?.company || '',
    duration: initialData?.duration || '',
    skillsUsed: initialData?.skillsUsed || [],
    description: initialData?.description || ['']
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDesc = [...formData.description];
    updatedDesc[index] = value;
    setFormData({
      ...formData,
      description: updatedDesc
    });
  };

  const addDescriptionPoint = () => {
    setFormData({
      ...formData,
      description: [...formData.description, '']
    });
  };

  const removeDescriptionPoint = (index) => {
    const updatedDesc = formData.description.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      description: updatedDesc
    });
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skillsUsed.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skillsUsed: [...formData.skillsUsed, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skillsUsed: formData.skillsUsed.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Make sure userId is included and valid
      if (!userId) {
        console.error("Missing user ID");
        setIsSubmitting(false);
        return;
      }

      console.log("Sending payload:", {
        ...formData,
        userId
      });

      const url = initialData?._id
        ? `/api/experiences/${initialData._id}`
        : '/api/experiences';

      const method = initialData?._id ? 'PUT' : 'POST';

      const payload = {
        ...formData,
        userId
      };

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        onSave(data.experience);
      } else {
        const errorData = await response.json();
        console.error('Error saving experience:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const url = initialData?._id
  //       ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/experiences/${initialData._id}`
  //       : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/experiences`;

  //     const method = initialData?._id ? 'PUT' : 'POST';

  //     const payload = {
  //       ...formData,
  //       userId
  //     };
  //     console.log('Sending payload:', JSON.stringify(payload));
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={formRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl m-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {initialData ? 'Edit Experience' : 'Add Experience'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g., Jan 2022 - Present"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position Icon
              </label>
              <IconSelector
                selectedIcon={formData.positionIcon}
                onSelectIcon={(icon) => setFormData({ ...formData, positionIcon: icon })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills Used
            </label>
            <div className="flex">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                className="flex-1 border rounded-l-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Add a skill..."
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skillsUsed.map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-1 text-blue-800 hover:text-red-500"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            {formData.description.map((point, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Description point..."
                  required
                />
                <button
                  type="button"
                  onClick={() => removeDescriptionPoint(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                  disabled={formData.description.length <= 1}
                >
                  <FaTimes size={16} />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addDescriptionPoint}
              className="mt-2 text-blue-500 hover:text-blue-700 flex items-center gap-1"
            >
              <FaPlus size={12} /> Add description point
            </button>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Saving...
                </span>
              ) : initialData ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceForm;