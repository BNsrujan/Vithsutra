import { useState, useEffect, useCallback } from 'react';
import { TeamMember, Department } from '../../core/entities/team';
import { getTeamUseCases } from '../../infrastructure/di/Container';

export const useTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const teamUseCases = getTeamUseCases();

  const fetchTeam = useCallback(async () => {
    try {
      setLoading(true);
      const data = await teamUseCases.getActiveTeamMembers();
      setTeamMembers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch team');
    } finally {
      setLoading(false);
    }
  }, [teamUseCases]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return { teamMembers, loading, error };
};

export const useTeamMember = (id: string) => {
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const teamUseCases = getTeamUseCases();

  const fetchTeamMember = useCallback(async () => {
    try {
      setLoading(true);
      const data = await teamUseCases.getTeamMemberById(id);
      setTeamMember(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch team member');
    } finally {
      setLoading(false);
    }
  }, [teamUseCases, id]);

  useEffect(() => {
    if (id) {
      fetchTeamMember();
    }
  }, [id, fetchTeamMember]);

  return { teamMember, loading, error };
};

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const teamUseCases = getTeamUseCases();

  const fetchDepartments = useCallback(async () => {
    try {
      setLoading(true);
      const data = await teamUseCases.getAllDepartments();
      setDepartments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch departments');
    } finally {
      setLoading(false);
    }
  }, [teamUseCases]);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  return { departments, loading, error };
};

export const useTeamByDepartment = () => {
  const [teamByDepartment, setTeamByDepartment] = useState<Record<string, TeamMember[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const teamUseCases = getTeamUseCases();

  const fetchTeamByDepartment = useCallback(async () => {
    try {
      setLoading(true);
      const data = await teamUseCases.getTeamByDepartment();
      setTeamByDepartment(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch team by department');
    } finally {
      setLoading(false);
    }
  }, [teamUseCases]);

  useEffect(() => {
    fetchTeamByDepartment();
  }, [fetchTeamByDepartment]);

  return { teamByDepartment, loading, error };
};