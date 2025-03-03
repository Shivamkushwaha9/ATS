// src/app/components/experience/ExperienceSection.jsx
import { useState, useEffect } from 'react';
import { FaPlus, FaTimes, FaPencilAlt } from 'react-icons/fa';
import ExperienceForm from './ExperienceForm';
import ExperienceItem from './ExperienceItem';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useSession } from 'next-auth/react';

export const ExperienceSection = () => {
  const { user, loading: userLoading } = useCurrentUser();
  const { status: authStatus } = useSession();
  const [experiences, setExperiences] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      if (userLoading || authStatus !== 'authenticated' || !user?._id) {
        return;
      }

      try {
        // const response = await fetch(`http://localhost:3001/api/experiences?userId=${user._id}`);
        // console.log("Ye expereince wale me se aa raha",user._id);
        // const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/experiences?userId=${user._id}`);
        const response = await fetch(`/api/experiences?userId=${user._id}`);

        if (response.ok) {
          const data = await response.json();
          setExperiences(data.experiences || []);
        }
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExperiences();
  }, [user, userLoading, authStatus]);

  const handleAddExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
    setIsFormOpen(false);
  };

  const handleUpdateExperience = (updatedExperience) => {
    setExperiences(experiences.map(exp =>
      exp._id === updatedExperience._id ? updatedExperience : exp
    ));
    setEditingExperience(null);
  };

  const handleDeleteExperience = async (id) => {
    try {
      const response = await fetch(`/api/experiences/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExperiences(experiences.filter(exp => exp._id !== id));
      }
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };

  const handleEdit = (experience) => {
    setEditingExperience(experience);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <button
          onClick={() => {
            setEditingExperience(null);
            setIsFormOpen(true);
          }}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
        >
          <FaPlus />
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : experiences.length === 0 ? (
        <p className="text-gray-500 italic text-center py-4">
          No experience added yet. Click the + button to add your work experience.
        </p>
      ) : (
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience._id}
              experience={experience}
              onEdit={() => handleEdit(experience)}
              onDelete={() => handleDeleteExperience(experience._id)}
            />
          ))}
        </div>
      )}

      {isFormOpen && (
        <ExperienceForm
          onClose={() => {
            setIsFormOpen(false);
            setEditingExperience(null);
          }}
          onSave={editingExperience ? handleUpdateExperience : handleAddExperience}
          userId={user?._id}
          initialData={editingExperience}
        />
      )}
    </div>
  );
};