export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
}

export interface ProjectsState {
  projects: Project[];
  selectedProject: Project | null;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
}
