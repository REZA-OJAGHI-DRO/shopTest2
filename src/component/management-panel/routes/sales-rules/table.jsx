




import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  React,
  useEffect,
  useState,
  Button,
  Modal,
  useSelector,
  postGoodDiscountGetList,
} from '@/component/management-panel/import-management.js'

function Table({ token, updateTable, setUpdateTable }) {
  const [dataTable, setDataTable] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tempFilter, setTempFilter] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editFormData, setEditFormData] = useState();
  const [edit, setEdit] = useState();
  const [filters, setFilters] = useState({
    keyword: "",
    saleType: 0,
    paymentType: 0,
    shopperRankLimit: "",
  });

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const columnWidths = ["5%", "35%", "45%", "15%"];
  const chabk = useSelector((state) => state.product.chabk);

  const fetchData = async () => {
    setLoading(true);
    try {
      const dataAll = {
        ...filters,
        pageSize: rowsPerPage,
        pageIndex: currentPage,
        orderType: 1,
        orderPropertyName: "",
      };
      const response = await postGoodDiscountGetList({ dataAll, token, chabk });

      if (response.data && response.data.length > 0) {
        setDataTable(response.data);
        setTotalItems(response.count || response.data.length);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rowsPerPage, filters, updateTable]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
    setIsLoading(true);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setFilters({ ...filters, name: tempFilter });
    setCurrentPage(1);
    fetchData();
  };

  const openEditModal = async (rowData) => {
    // try {
    //     const result = await postBrandGetEdit(rowData.id ,chabk);
    //     setSelectedRowData(result.data);
    // setShowEditModal(true);
    //     setEdit(result.data);
    //     setOwnerId(result.data.ownerId)
    //     setDataFile(result.data.logo)
    //     setDataFile2(result.data.priceListGuid)
    // } catch (error) {
    // //   setCheck((r) => ({ ...r, check4: true }));
    // }
  };

  const [dataDelete, setDataDelete] = useState("");

  const deleteData = async (e) => {
    setLoad5(true);
    // try {
    //     const result = await postBrandDelete(dataDelete ,chabk );
    //     setCheck((r) => ({ ...r, check1: true }));
    //     setTimeout(() => {
    //         setLoad5(false)
    //         setShowDeleteModal(false);
    //         setDataDelete('')
    //         window.location.reload();
    //     }, 2000);
    // } catch (error) {
    //     setCheck((r) => ({ ...r, check4: true }));
    //     setTimeout(() => {
    //         setLoad5(false)
    //         setShowDeleteModal(false);
    //         setDataDelete('')
    //         window.location.reload();
    //     }, 2000);
    // }
  };

  const openDelete = (rowData) => {
    setDataDelete(rowData);
    // setShowDeleteModal(true);
  };

  const closeModal = () => {
    setDataDelete("");
    setShowDeleteModal(false);
    setShowEditModal(false);
    setShowViewModal(false);

    // setSelectedRowData(null);
  };

  // useEffect(()=>{

  // if(edit){
  //     setEdit((r) => ({ ...r, logoFileGuid: dataFile==null ? edit.logoFileGuid : dataFile}));
  //     setEdit((r) => ({ ...r, priceListGuid: dataFile2==null ? edit.priceListGuid : dataFile2 }));
  //     setEdit((r) => ({ ...r, ownerId: ownerId }));
  // }
  // },[ edit ])

  const handleSaveChanges = async () => {
    //     if (edit.name == '') {
    //     //   setCheck((r) => ({ ...r, check2: true }));
    //     } else if (edit.enName == '') {
    // // console.log('');
    //     }else{
    //         setLoad4(true)
    //       try {
    //         const result = await postPackageTypeUpdateBrand(edit);
    //         // setCheck((r) => ({ ...r, check1: true }));
    //         if(result){
    //             setLoad4(false)
    //             window.location.reload();
    //         }

    //       } catch (error) {
    //         // setCheck((r) => ({ ...r, check4: true }));
    //         setTimeout(() => {
    //             setLoad4(false)
    //           window.location.reload();
    //         }, 2000);
    //       }
    //     }
    closeModal();
  };
  const openViewModal = (rowData) => {
    setSelectedRowData(rowData);
    // setShowViewModal(true);
  };
  const getPaginationRange = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    let start = Math.max(1, Math.floor((currentPage - 1) / 3) * 3 + 1);
    let end = Math.min(totalPages, start + 2);

    if (end - start < 2 && end < totalPages) {
      end = Math.min(totalPages, start + 2);
    }
    if (start > 1 && end < totalPages) {
      start = Math.max(1, end - 2);
    }

    return { start, end, pages };
  };

  const { start, end, pages } = getPaginationRange();

  return (
    <>
      <div className="w-[100%] overflow-hidden rounded-2xl shadow-custom-6 boxFilter4 bg-[#ffffff4f] px-2">
        <div className="w-full">
          {/* Header */}
          <div className="w-full flex rounded-2xl py-1 px-2">
            {/* Search Input */}
            <div
              className="flex items-center gap-2 text-zinc-800"
              style={{ width: columnWidths[0] }}
            >
              ردیف
            </div>
            <div
              className="flex items-center gap-2"
              style={{ width: columnWidths[1] }}
            >
              <input
                type="text"
                placeholder="نام کالا"
                value={tempFilter}
                onChange={(e) => setTempFilter(e.target.value)}
                className="p-2 bg-white w-[70%] h-[30px] rounded-2xl text-[.9rem]"
              />
              <button
                onClick={handleSearch}
                className="bg-custom-green rounded-full w-[2rem] h-[2rem] flex justify-center items-center text-black px-2 pt-1"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>

            {/* Headers */}
            {["تخفیف", "عملیات"].map((text, index) => (
              <div
                key={index}
                className="text-zinc-500 p-2 text-center flex items-center justify-center"
                style={{ width: columnWidths[index + 2] }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="w-full h-[410px] flex flex-col  overflow-y-scroll myElement rounded-2xl bg-[#ffffff4f] overflow-hidden">
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </div>
            ) : (
              dataTable.map((row, rowIndex) => (
                <div
                  className="w-full flex border-b border-zinc-400"
                  key={rowIndex}
                >
                  <div
                    className="p-2 text-center"
                    style={{ width: columnWidths[0] }}
                  >
                    {rowsPerPage * (currentPage - 1) + (rowIndex + 1)}
                  </div>
                  <div
                    className="p-2 text-center"
                    style={{ width: columnWidths[1] }}
                  >
                    {row.name}
                  </div>
                  <div
                    className="p-2 text-center"
                    style={{ width: columnWidths[2] }}
                  >
                    {row.discountResult}
                  </div>
                  <div
                    className="p-2 text-center flex justify-center items-center gap-1 cursor-pointer group"
                    style={{ width: "5%" }}
                    onClick={() => openViewModal(row)}
                  >
                    <i className="bi bi-eye text-orange-600" title="مشاهده"></i>
                  </div>
                  <div
                    className="p-2 text-center flex justify-center items-center gap-1 cursor-pointer group"
                    style={{ width: "5%" }}
                    onClick={() => openEditModal(row, rowIndex)}
                  >
                    <i
                      className="bi bi-pencil-square text-green-600"
                      title="ویرایش"
                    ></i>
                  </div>
                  <div
                    className="p-2 text-center flex justify-center items-center gap-1 cursor-pointer group"
                    style={{ width: "5%" }}
                    onClick={() => openDelete(row)}
                  >
                    <i
                      className="bi bi-trash3-fill text-red-700"
                      title="حذف"
                    ></i>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Rows per Page Selector */}
          <div className="w-full flex justify-start gap-4 px-4 mt-2">
            <span>تعداد سطرها در هر صفحه:</span>
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border rounded-lg px-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
          </div>

          {/* Pagination */}
          <div
            style={{ display: totalItems > rowsPerPage ? "flex" : "none" }}
            className="w-full flex justify-center py-2"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 bg-white rounded-lg"
            >
              قبلی
            </button>
            {totalPages > 1 && (
              <>
                {start > 1 && (
                  <button
                    onClick={() => handlePageChange(1)}
                    className="px-4 mx-2 bg-white rounded-lg"
                  >
                    1
                  </button>
                )}
                {start > 2 && (
                  <span className="px-4 mx-2 bg-white rounded-lg">...</span>
                )}
                {Array.from(
                  { length: end - start + 1 },
                  (_, index) => start + index
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 mx-2 rounded-lg ${
                      currentPage === page
                        ? "bg-blue-500 text-white "
                        : "bg-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {end < totalPages - 1 && (
                  <span className="px-4 mx-2 bg-white rounded-lg">...</span>
                )}
                {end < totalPages && (
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-4 mx-2 bg-white rounded-lg"
                  >
                    {totalPages}
                  </button>
                )}
              </>
            )}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 bg-white rounded-lg"
            >
              بعدی
            </button>
          </div>
        </div>
      </div>

      {showEditModal && (
        <Modal style={"h-[70vh]"} onClose={closeModal} title="ویرایش">
          {editFormData && (
            <div className="w-full flex flex-wrap justify-between gap-3 px-10">
              <div className="w-[100%] flex justify-center mt-10">
                <Button
                  value={"ویرایش"}
                  click={() => handleSaveChanges(event)}
                  styleButton={14}
                />
              </div>
            </div>
          )}
        </Modal>
      )}

      {showDeleteModal && (
        <Modal onClose={closeModal} title="">
          <div className="w-full flex flex-wrap justify-center gap-5">
            <p className="w-full text-center text-[1.5rem]">
              ایا مطمئن هستید که می خواهید این برند را حذف کنید؟
            </p>
            <div className="w-[100%] flex justify-center">
              <Button
                value={"حذف"}
                click={() => deleteData(event)}
                styleButton={13}
              />
            </div>
          </div>
        </Modal>
      )}

      {/* View Modal */}
      {showViewModal && selectedRowData && (
        <Modal onClose={closeModal} title="مشاهده جزئیات">
          <div className="flex flex-wrap gap-5 px-5">
            <p className="flex gap-3 w-[45%]">
              <strong>نام کالا :</strong> {selectedRowData?.name}
            </p>
            <p className="flex gap-3 w-[45%]">
              <strong>تخفیف :</strong> {selectedRowData?.discountResult}
            </p>
            <p className="flex gap-3 w-[100%]">
              <strong>توضیحات شرط :</strong>{" "}
              {selectedRowData?.conditionDescription}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Table;
