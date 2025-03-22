//import {React}
import {Cell, Row, Table, TableBody, TableHeader} from "react-aria-components";
import {useAsyncList} from 'react-stately';
import type {Selection} from 'react-aria-components';

import {MyColumn} from "@components/MyColumn";
import {Properties} from '../services/definitions';
import {TableProps} from "@react-types/table";
import React from "react";

interface PropertiesTableProps extends TableProps {
    items?: Properties[],
    renderEmptyState?: () => string
}

export default function PropertiesTable( props: PropertiesTableProps) {

    let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());

    let list = useAsyncList<Properties>({
        async load({ signal }) {
            let res = await fetch(`http://localhost:3000/api/properties/`, {
                signal
            });
            let json = await res.json();
            console.log(json);
            return {
                items: json
            };
        },
        async sort({ items, sortDescriptor }) {
            return {
                items: items.sort((a, b) => {
                    let first = a[sortDescriptor.column];
                    let second = b[sortDescriptor.column];
                    let cmp = (parseInt(first) || first) < (parseInt(second) || second)
                        ? -1
                        : 1;
                    if (sortDescriptor.direction === 'descending') {
                        cmp *= -1;
                    }
                    return cmp;
                })
            };
        }
    });

    return (

        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 border border-gray-300" >
        <Table

            aria-label="Properties table"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            onRowAction={key => alert(`Opening item ${key}...`)}
            selectionMode="single"
            defaultSelectedKeys={[1]}
            disallowEmptySelection
            selectionBehavior="replace"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
        >
            <TableHeader>
                <MyColumn id="name" isRowHeader allowsSorting>Name</MyColumn>
                <MyColumn id="address" allowsSorting>Height</MyColumn>
            </TableHeader>

            <TableBody items={list.items} renderEmptyState={props.renderEmptyState}>
                {(item) => (
                    <Row className="border border-gray-300 bg-blue-50 hover:bg-blue-300" id={item.id}>
                        <Cell>{item.name}</Cell>
                        <Cell>{item.address}</Cell>
                    </Row>
                )}
            </TableBody>
        </Table>
        </div>
    )
}