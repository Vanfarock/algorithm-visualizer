import Animation from './animation';
import SortItem from './sortItem';

type SortFunction = (values: SortItem[]) => Animation[];

export default SortFunction;
