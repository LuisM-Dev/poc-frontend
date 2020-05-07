import React from 'react';
import {
  Subject as SubjectIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  FindInPage as FindInPageIcon,
  DoneAll as DoneAllIcon,
  Launch as LaunchIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Error as ErrorIcon
} from '@material-ui/icons';

export default [
  { label: 'HEADER', icon: <SubjectIcon /> },
  { label: 'DETAILS', icon: <PlaylistAddCheckIcon /> },
  { label: 'CART', icon: <FindInPageIcon /> },
  { label: 'APPROVALS', icon: <DoneAllIcon /> },
  { label: 'E-SIGN', icon: <LaunchIcon /> },
  { label: 'CONTRACT', icon: <RecordVoiceOverIcon /> },
  { label: 'ACCEPTED', icon: <AssignmentTurnedInIcon /> },
  { label: 'REJECTED', icon: <ErrorIcon /> }
];

// export default [
//   { label: 'DRAFT', icon: <SubjectIcon /> },
//   { label: 'APPROVAL REQUIRED', icon: <PlaylistAddCheckIcon /> },
//   { label: 'IN REVIEW', icon: <FindInPageIcon /> },
//   { label: 'APPROVED', icon: <DoneAllIcon /> },
//   { label: 'GENERATED', icon: <LaunchIcon /> },
//   { label: 'PRESENTED', icon: <RecordVoiceOverIcon /> },
//   { label: 'ACCEPTED', icon: <AssignmentTurnedInIcon /> },
//   { label: 'DENIED', icon: <ErrorIcon /> },
//   { label: 'EXPIRED', icon: <EventBusyIcon /> }
// ];
