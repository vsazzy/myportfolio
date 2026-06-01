import React, { useState } from 'react';
import { Brain, Code, Cloud, ChevronDown, ChevronUp, PenTool } from 'lucide-react';

export default function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState('data-science');

  const categories = [
    {
      id: 'data-science',
      title: 'Data Science & AI',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'PyTorch', level: 75 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Neural Networks', level: 80 }
      ]
    },
    {
      id: 'front-end',
      title: 'Front End',
      icon: PenTool,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React JS', level: 85 },
        { name: 'React Native', level: 85 }
      ]
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'SQL', level: 80 },
      ]
    },
    {
      id: 'computing',
      title: 'Computing',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'GCP', level: 70 },
        { name: 'Cloud Architecture', level: 72 },
        { name: 'DevOps', level: 68 },
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(categoryId);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical depth across the product stack.</h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Left Column - Categories */}
          <div className="skill-category-list">
            {categories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`skill-category-card ${isExpanded ? 'is-active' : ''}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      toggleCategory(category.id);
                    }
                  }}
                >
                  <div className="skill-category-inner">
                    <div className="skill-category-title">
                      <div className="skill-icon">
                        <Icon strokeWidth={2.25} />
                      </div>
                      <div>
                        <h3>{category.title}</h3>
                        <p>{category.skills.length} focus areas</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="skill-chevron" />
                    ) : (
                      <ChevronDown className="skill-chevron" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Skills Detail */}
          <div className="skills-detail-card">
            {expandedCategory ? (
              <div className="skill-bars">
                {categories.find(c => c.id === expandedCategory)?.skills.length > 0 ? (
                  categories.find(c => c.id === expandedCategory).skills.map((skill) => (
                    <div key={skill.name} className="skill-bar-group">
                      <div className="skill-bar-label">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <p>No skills data available for this category</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="empty-state">
                <p>Select a category to view skills</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
