// @flow
import type {Snapshot, SnapshotItem} from 'redux-ship';

export type State = {
  dataLayer: Object[],
};

export const initialState: State = {
  dataLayer: [],
};

export type Commit = {
  type: 'UpdateDataLayer',
  dataLayer: Object[],
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'UpdateDataLayer':
      return {
        ...state,
        dataLayer: commit.dataLayer,
      };
    default:
      return state;
  }
}
