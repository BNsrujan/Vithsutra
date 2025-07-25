import React from 'react';
import Image from 'next/image';
import { TeamMember } from '../../core/entities/Team';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <p className="text-blue-600 font-medium">{member.position}</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {member.bio}
        </p>
        
        {/* Skills */}
        <div className="mb-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-1">
            {member.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex space-x-3 justify-center">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};