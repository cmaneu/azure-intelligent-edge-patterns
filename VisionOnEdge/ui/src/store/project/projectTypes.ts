import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { State } from '../State';

export type Project = {
  isLoading: boolean;
  data: ProjectData;
  error: Error;
};

export type ProjectData = {
  id: number;
  camera: any;
  location: any;
  parts: any[];
  needRetraining: boolean;
  accuracyRangeMin: number;
  accuracyRangeMax: number;
  maxImages: number;
  modelUrl: string;
  status: string;
  successRate: number;
  successfulInferences: number;
  unIdetifiedItems: number;
};

// Describing the different ACTION NAMES available
export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export type GetProjectRequestAction = {
  type: typeof GET_PROJECT_REQUEST;
};

export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export type GetProjectSuccessAction = {
  type: typeof GET_PROJECT_SUCCESS;
  payload: {
    project: ProjectData;
  };
};

export const GET_PROJECT_FAILED = 'GET_PROJECT_FAILED';
export type GetProjectFailedAction = {
  type: typeof GET_PROJECT_FAILED;
  error: Error;
};

export const POST_PROJECT_REQUEST = 'POST_PROJECT_REQUEST';
export type PostProjectRequestAction = {
  type: typeof POST_PROJECT_REQUEST;
};

export const POST_PROJECT_SUCCESS = 'POST_PROJECT_SUCCESS';
export type PostProjectSuccessAction = {
  type: typeof POST_PROJECT_SUCCESS;
};

export const POST_PROJECT_FALIED = 'POST_PROJECT_FALIED';
export type PostProjectFaliedAction = {
  type: typeof POST_PROJECT_FALIED;
  error: Error;
};

export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export type DeleteProjectSuccessAction = {
  type: typeof DELETE_PROJECT_SUCCESS;
};

export const DELETE_PROJECT_FALIED = 'DELETE_PROJECT_FALIED';
export type DeleteProjectFaliedAction = {
  type: typeof DELETE_PROJECT_FALIED;
};

export const UPDATE_PROJECT_DATA = 'UPDATE_PROJECT_DATA';
export type UpdateProjectDataAction = {
  type: typeof UPDATE_PROJECT_DATA;
  payload: ProjectData;
};

export type ProjectActionTypes =
  | GetProjectRequestAction
  | GetProjectSuccessAction
  | GetProjectFailedAction
  | PostProjectRequestAction
  | PostProjectSuccessAction
  | PostProjectFaliedAction
  | DeleteProjectSuccessAction
  | DeleteProjectFaliedAction
  | UpdateProjectDataAction;

// Describing the different THUNK ACTION NAMES available
export type ProjectThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>;
