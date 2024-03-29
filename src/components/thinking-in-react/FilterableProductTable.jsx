import React from "react";
import {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = () => {
    const [filterText] = useState("");
    const [inStockOnly] = useState(false);

    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

    return (

        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
            <ProductTable
                products={PRODUCTS}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable;