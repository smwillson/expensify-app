import React from 'react';
import { Link } from "react-router-dom";

const ExpenseListItem = ({id, desc, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}> <h3>{desc}</h3></Link>
        <div> {amount} {createdAt}</div>
    </div>
);

export default ExpenseListItem;