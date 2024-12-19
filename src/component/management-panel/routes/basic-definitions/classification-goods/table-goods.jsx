import {
  React,
  useState,
  GeneralTable,
  convertToJalali,
} from "@/component/management-panel/import-management.js";

function TableGoods({
  data,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  totalItems,
}) {
  const items =
    data &&
    data.map((item) => ({
      level: item.level,
      name: item.name,
      code: item.code,
      createdAt: convertToJalali(item.createdAt),
    }));

  const headers = [
    { key: "id", title: "ردیف", style: "w-[5%]  border-l h-[40px]" },
    {
      key: "level",
      title: "سطح",
      style: "w-[10%]  border-l h-[40px]",
    },
    {
      key: "name",
      title: "عنوان رسته کالایی",
      style: "w-[30%]  border-l h-[40px]",
    },
    {
      key: "code",
      title: "کد",
      style: "w-[15%]  border-l h-[40px]",
    },
    {
      key: "createdAt",
      title: "تاریخ ثبت",
      style: "w-[25%]  border-l h-[40px]",
    },
    {
      key: "actions",
      title: "عملیات",
      style: "w-[15%] h-[40px]",
      buttons: [
        // {
        //   text: (
        //     <i
        //       className="bi bi-eye text-orange-600 text-[1rem]"
        //       title="مشاهده"
        //     ></i>
        //   ),
        //   style: ` text-white px-2 py-1 rounded hover:scale-125 transition-all duration-300 `,
        //   // onClick: (id) => alert(`حذف ${id}`),
        // },
        {
          text: (
            <i
              className="bi bi-pencil-square text-green-600 text-[1rem]"
              title="ویرایش"
            ></i>
          ),
          style: `text-white px-2 py-1 rounded hover:scale-125 transition-all duration-300 `,
          // onClick: (id) => alert(`حذف ${id}`),
        },
        {
          text: (
            <i
              className="bi bi-trash3-fill text-red-700 text-[1rem]"
              title="حذف"
            ></i>
          ),
          style: ` text-white px-2 py-1 rounded hover:scale-125 transition-all duration-300 `,
          // onClick: (id) => alert(`حذف ${id}`),
        },
      ],
    },
  ];
  const [filter, setFilter] = useState("");
  const filteredItems = items.filter((item) => item.name.includes(filter));
  return (
    <>
      <GeneralTable
        items={items}
        headers={headers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalItems={totalItems}
        filteredItems={filteredItems}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}

export default TableGoods;
