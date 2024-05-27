"use client";
import Icons from "@/components/header/customIcons";
import { ITableCard } from "./interface";
import "./style/style.css";
import React from "react";
const TableCard = (props: ITableCard) => {
    return (
        <div className="table-card">
            <Icons icon="table" />
            <h4>{props.seats}</h4>
        </div>
    );
};

export default TableCard;
