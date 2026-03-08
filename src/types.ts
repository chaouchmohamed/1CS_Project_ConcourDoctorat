export enum UserRole {
  ADMIN = 'ADMIN',
  CFD_HEAD = 'CFD_HEAD',
  COORDINATOR = 'COORDINATOR',
  CORRECTOR = 'CORRECTOR',
  SUPERVISOR = 'SUPERVISOR',
  JURY_MEMBER = 'JURY_MEMBER',
}

export enum CandidateStatus {
  REGISTERED = 'REGISTERED',
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  ELIMINATED = 'ELIMINATED',
  ADMITTED = 'ADMITTED',
  WAITLIST = 'WAITLIST',
  REJECTED = 'REJECTED',
}

export enum SubjectStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  LOCKED = 'LOCKED',
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Candidate {
  id: string;
  applicationNumber: string;
  fullName: string;
  nationalId: string;
  email: string;
  phone: string;
  status: CandidateStatus;
  examSession: string;
  anonymousCode?: string;
  seatNumber?: string;
}

export interface ExamSubject {
  id: string;
  name: string;
  coefficient: number;
  maxScore: number;
  passThreshold: number;
  discrepancyThreshold: number;
  finalGradeRule: 'AVERAGE' | 'MEDIAN' | 'THIRD_CORRECTOR';
  status: SubjectStatus;
  date?: string;
  startTime?: string;
  duration?: string;
  rooms?: string[];
}
