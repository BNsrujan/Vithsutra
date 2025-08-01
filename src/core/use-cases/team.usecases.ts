import { TeamMember, Department } from '../entities/team';

export interface TeamRepository {
  findAllMembers(): Promise<TeamMember[]>;
  findMemberById(id: string): Promise<TeamMember | null>;
  findMembersByDepartment(departmentId: string): Promise<TeamMember[]>;
  findAllDepartments(): Promise<Department[]>;
  findDepartmentById(id: string): Promise<Department | null>;
}

export class TeamUseCases {
  constructor(private teamRepository: TeamRepository) {}

  async getAllTeamMembers(): Promise<TeamMember[]> {
    return this.teamRepository.findAllMembers();
  }

  async getActiveTeamMembers(): Promise<TeamMember[]> {
    const allMembers = await this.teamRepository.findAllMembers();
    return allMembers.filter(member => member.isActive);
  }

  async getTeamMemberById(id: string): Promise<TeamMember | null> {
    return this.teamRepository.findMemberById(id);
  }

  async getAllDepartments(): Promise<Department[]> {
    return this.teamRepository.findAllDepartments();
  }

  async getDepartmentWithMembers(departmentId: string): Promise<Department | null> {
    const department = await this.teamRepository.findDepartmentById(departmentId);
    if (!department) return null;

    const members = await this.teamRepository.findMembersByDepartment(departmentId);
    return {
      ...department,
      members: members.filter(member => member.isActive)
    };
  }

  async getTeamByDepartment(): Promise<Record<string, TeamMember[]>> {
    const departments = await this.teamRepository.findAllDepartments();
    const result: Record<string, TeamMember[]> = {};

    for (const department of departments) {
      const members = await this.teamRepository.findMembersByDepartment(department.id);
      result[department.name] = members.filter(member => member.isActive);
    }

    return result;
  }
}