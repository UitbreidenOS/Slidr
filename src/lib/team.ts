import { readDataSafe, writeData } from "./data";
import { generateId } from "./utils";

const TEAM_FILE = "team.json";

export interface TeamMember {
  id: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  joinedAt: string;
}

export interface TeamConfig {
  id: string;
  name: string;
  members: TeamMember[];
  inviteCode?: string;
}

export const DEFAULT_TEAM: TeamConfig = {
  id: "team_default",
  name: "My Team Workspace",
  members: [
    {
      id: "usr_1",
      email: "admin@example.com",
      role: "admin",
      joinedAt: new Date().toISOString(),
    }
  ]
};

export async function getTeam(): Promise<TeamConfig> {
  return readDataSafe<TeamConfig>(TEAM_FILE, DEFAULT_TEAM);
}

export async function updateTeam(updates: Partial<TeamConfig>): Promise<TeamConfig> {
  const current = await getTeam();
  const updated = { ...current, ...updates };
  await writeData(TEAM_FILE, updated);
  return updated;
}

export async function addTeamMember(email: string, role: "admin" | "editor" | "viewer"): Promise<TeamConfig> {
  const team = await getTeam();
  const newMember: TeamMember = {
    id: generateId(),
    email,
    role,
    joinedAt: new Date().toISOString(),
  };
  
  team.members.push(newMember);
  await writeData(TEAM_FILE, team);
  return team;
}

export async function removeTeamMember(memberId: string): Promise<TeamConfig> {
  const team = await getTeam();
  team.members = team.members.filter(m => m.id !== memberId);
  await writeData(TEAM_FILE, team);
  return team;
}
