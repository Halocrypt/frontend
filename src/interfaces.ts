import { FetchResourceCallback } from "./hooks/use-resource";

export type Events = "main" | "intra";

export interface SecureUserData {
  email: string;
  institution: string;
  has_verified_email: boolean;
}
export interface IUser {
  _id: string;
  user: string;
  name: string;
  created_at: number;
  is_admin: boolean;
  is_disqualified: boolean;
  disqualification_reason: string;
  level: number;
  points: number;
  last_question_answered_at: number;
  event: Events;
  _secure_?: SecureUserData;
}

export interface IEvent {
  name: Events;
  event_start_time: number;
  event_end_time: number;
  is_over: boolean;
}
export interface INotification {
  ts: number;
  content: RenderableContent;
  issuedBy: string;
}

export interface IQuestion {
  _id: `${Events}:${number}`;
  event: Events;
  question_hints: RenderableContent[];
  question_number: number;
  question_points: number;
  question_content: RenderableContent;
  _secure_?: SecureQuestionData;
}

export interface SecureQuestionData {
  answer: string;
}
export interface RenderableContent {
  type: "link" | "text" | "image-embed";
  content?: string;
}

export interface RendererProps {
  questions?: IQuestion[];
  users?: IUser[];
  fetchQuestions?: FetchResourceCallback<true>;
  fetchUsers?: FetchResourceCallback<true>;
  event: Events;
}

type User = string;
type Question = number;
type Answer = string;
type isCorrect = boolean;
type Timestamp = number;
export type Log = [User, Question, Answer, isCorrect, Timestamp];
