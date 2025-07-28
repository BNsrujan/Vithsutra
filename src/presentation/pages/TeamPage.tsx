'use client';

import React from 'react';
import { useTeamByDepartment } from '../../hooks/useTeam';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { Skeleton } from '../components/ui/Skeleton';

export const TeamPage: React.FC = () => {
  const { teamByDepartment, loading, error } = useTeamByDepartment();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          {Array.from({ length: 3 }).map((_, deptIndex) => (
            <div key={deptIndex} className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="space-y-4">
                    <Skeleton className="h-24 w-24 rounded-full mx-auto" />
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Team</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const departmentOrder = ['Leadership', 'Engineering', 'Design', 'Quality Assurance'];
  const sortedDepartments = Object.keys(teamByDepartment).sort((a, b) => {
    const indexA = departmentOrder.indexOf(a);
    const indexB = departmentOrder.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts is passionate about creating innovative solutions that drive your business forward.
          </p>
        </div>

        {/* Team by Department */}
        {sortedDepartments.map((departmentName) => {
          const members = teamByDepartment[departmentName];
          if (!members || members.length === 0) return null;

          return (
            <div key={departmentName} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {departmentName}
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};