import SortCallback from './sortCallback';

export default interface SortInterface {
  (values: number[], onSort: SortCallback): number[];
}
