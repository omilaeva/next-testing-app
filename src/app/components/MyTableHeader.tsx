import type {RowProps, TableHeaderProps} from 'react-aria-components';
import {Collection, useTableOptions,TableHeader,Column} from 'react-aria-components';

export  function MyTableHeader<T extends object>(
    { columns, children }: TableHeaderProps<T>
) {
    let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

    return (
        <TableHeader>
            {/* Add extra columns for drag and drop and selection. */}
            {allowsDragging && <Column />}
            {selectionBehavior === 'toggle' && (
                <Column>
                    {/*selectionMode === 'multiple' && <MyCheckbox slot="selection" />*/}
                </Column>
            )}
            <Collection items={columns}>
                {children}
            </Collection>
        </TableHeader>
    );
}