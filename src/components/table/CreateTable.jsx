import React, { useEffect } from "react";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fillTableData ,sortUsersUp,sortUsersDown} from "../../store/slices/tableSlice";
import { getData } from "./fetchTableData";
import { BsFillArrowUpSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";

const CreateTable = () => {
  const dispatch = useDispatch();
  const { table } = useSelector((state) => state.tableSlice);
  const { titles } = useSelector((state) => state.tableSlice);

  useEffect(() => {
    getData().then((data) => {
      dispatch(fillTableData(data));
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
        {titles.map((item,index)=>{
          return(

            <th key={index}>
              {item}
              <BsFillArrowUpSquareFill className="sort-icon"
               title="up"
               onClick={(e) => dispatch(sortUsersUp(item))}
              />
              <BsFillArrowDownSquareFill className="sort-icon"
               title="down"
               onClick={(e) => dispatch(sortUsersDown(item))}
              />
            </th>
          )
        })}
        </tr>
      </thead>
      <tbody>
      {table.length !== 0 &&
        table.map((item,idx) => {
          return (
            <tr key={item.id}>
              <td >{item.id}</td>
              <td >{item.name}</td>
              <td >{item.username}</td>
              <td >{item.email}</td>
              <td >{item.address.street}</td>
              <td >{item.phone}</td>
              <td >{item.website}</td>
              <td >{item.company.name}</td>
            </tr>
          );
        })}
        </tbody>
    </table>
  );
};

export default memo(CreateTable);
