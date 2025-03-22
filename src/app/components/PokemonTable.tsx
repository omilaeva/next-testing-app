import type {Selection} from 'react-aria-components';
import {Cell, Row, Table, TableBody, TableHeader, Column} from "react-aria-components";
import type {RowProps, TableHeaderProps,TableProps} from 'react-aria-components';
import React from "react";

import {MyTableHeader} from "@components/MyTableHeader";
import {MyRow} from "@components/MyRow";


interface Pokemon {
    id: number,
    name: string,
    type: string,
    level: string
}

interface PokemonTableProps extends TableProps {
    items?: Pokemon[],
    renderEmptyState?: () => string
}

export default function PokemonTable(props: PokemonTableProps) {
    let items = props.items || [
        {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
        {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
        {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
        {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
    ];

    let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 border border-gray-300" >
        <Table
            aria-label="Pokemon table"
            {...props}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <MyTableHeader>
                <Column isRowHeader>Name</Column>
                <Column>Type</Column>
                <Column>Level</Column>
            </MyTableHeader>
            <TableBody items={items} renderEmptyState={props.renderEmptyState}>
                {item => (
                    <MyRow>
                        <Cell>{item.name}</Cell>
                        <Cell>{item.type}</Cell>
                        <Cell>{item.level}</Cell>
                    </MyRow>
                )}
            </TableBody>
        </Table>
        </div>
    );
}