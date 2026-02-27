import { decodeHtmlEntities } from "../helpers/formatData";
import useTableSearch from "./useTableSearch";

export const useColumnFormatter = () => {
  const { getColumnSearchProps } = useTableSearch();

  const createColumn = (
    title,
    key,
    className = null,
    keyIsData = true,
    render = null,
    isSearch = true,
    isSort = true,
    fixed = null,
  ) => {
    const column = {
      title,
      key,
      className,
      filterSearch: isSearch,
      ...(isSearch && getColumnSearchProps(key)),
      ...(render
        ? { render }
        : {
            render: (data) => <span>{decodeHtmlEntities(data)}</span>,
          }),
      ...(isSort && {
        sorter: (a, b) => {
          const valA = a[key];
          const valB = b[key];

          if (valA == null) return -1;
          if (valB == null) return 1;

          if (typeof valA === "number" && typeof valB === "number") {
            return valA - valB;
          }

          if (valA instanceof Date && valB instanceof Date) {
            return valA.getTime() - valB.getTime();
          }

          return String(valA).localeCompare(String(valB));
        },
      }),
    };

    if (keyIsData) {
      column.dataIndex = key;
    }

    if (fixed) {
      column.fixed = "left";
    }

    return column;
  };

  return { createColumn };
};
