import {Collection, RowProps, useTableOptions, Button, Cell,Row} from "react-aria-components";

export function MyRow<T extends object>(
    { id, columns, children, ...otherProps }: RowProps<T>
) {
    let { selectionBehavior, allowsDragging } = useTableOptions();

    return (
        <Row id={id} {...otherProps}>
            {allowsDragging && (
                <Cell>
                    <Button slot="drag">≡</Button>
                </Cell>
            )}
            {selectionBehavior === 'toggle' && (
                <Cell>
                    {/*<MyCheckbox slot="selection" />*/}
                </Cell>
            )}
            <Collection items={columns}>
                {children}
            </Collection>
        </Row>
    );
}