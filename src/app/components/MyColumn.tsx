import type {ColumnProps} from 'react-aria-components';
import {Column} from 'react-aria-components';

export function MyColumn(props: ColumnProps) {
    return (
        <Column {...props}>
            {({allowsSorting, sortDirection}) => <>
                {props.children}
                {allowsSorting && (
                    <span aria-hidden="true" className="sort-indicator">
            {sortDirection === 'ascending' ? '▲' : '▼'}
          </span>
                )}
            </>}
        </Column>
    );
}