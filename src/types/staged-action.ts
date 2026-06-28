export type StagedActionType = "export_png";
export type StagedActionStatus = "pending" | "approved" | "executed" | "failed" | "rejected";

export interface StagedAction {
  id: string;
  type: StagedActionType;
  fileName: string;
  content: string;
  description: string;
  carouselId: string;
  autoExecute: boolean;
  status: StagedActionStatus;
  createdAt: string;
  resolvedAt: string | null;
}

export interface StagedActionsData {
  actions: StagedAction[];
}
