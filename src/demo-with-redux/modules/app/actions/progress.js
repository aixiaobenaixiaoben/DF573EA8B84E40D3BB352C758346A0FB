import {PROGRESS_DESTROY, PROGRESS_WORKING} from "../constants";

export type Action = {
  type: string,
}

export const progressing = (): Action => {
  return {
    type: PROGRESS_WORKING,
  }
};

export const progressDestroy = (): Action => {
  return {
    type: PROGRESS_DESTROY,
  }
};