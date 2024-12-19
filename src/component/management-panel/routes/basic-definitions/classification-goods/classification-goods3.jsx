import img1 from "/img/head-1.webp"
import {
  React,
  useCallback,
  useEffect,
  useRef,
  useState,
  WithSupport2,
  Button,
  TextFull,
  SelectInput,
  TextNumber,
  Load,
  CheckMessage,
  Loading,
  useSelector,
  categoryGetAll,
  categoryCreate
} from '@/component/management-panel/import-management.js'

function ClassificationOfGoods3() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  // const [level, setLevel] = useState(0);
  const [parentCategoryId1, setParentCategoryId1] = useState("");
  const [parentCategoryId2, setParentCategoryId2] = useState("");
  const [options, setOptions] = useState([{ key: "", value: "" }]);
  const [options2, setOptions2] = useState([{ key: "", value: "" }]);
  const [styleError1, setStyleError1] = useState(false);
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const [updateTable, setUpdateTable] = useState(false);

  const [check, setCheck] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  const [messageData, setMessageData] = useState([]);
  const [checkData, setCheckData] = useState(false);
  const [checkDataAll, setCheckDataAll] = useState({
    check1: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(!Object.values(checkDataAll).every((value) => value === true));
  }, [checkDataAll]);
  const chabk = useSelector((state) => state.product.chabk);
  const token = useSelector((state) => state.product.token);

  const GetCategory = useCallback(() => {
    setIsLoading(true);
    categoryGetAll(
      1,
      "",
      token,
      chabk,
      setCheckDataAll,
      setCheckData,
      setMessageData,
      setOptions
    );
  }, [token, chabk]);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      GetCategory();
      isFirstRender.current = false;
    }
  }, [GetCategory]);

  const GetCategory2 = useCallback(() => {
    setIsLoading(true);
    categoryGetAll(
      1,
      parentCategoryId1,
      token,
      chabk,
      setCheckDataAll,
      setCheckData,
      setMessageData,
      setOptions
    );
  }, [token, chabk, parentCategoryId1]);

  useEffect(() => {
    if (parentCategoryId1 == "") return;
    GetCategory2();
  }, [GetCategory2]);

  const sendForm = async () => {
    if (!name) {
      setStyleError1(true);
    } else {
      setLoad(true);
      try {
        const result = await categoryCreate(
          name,
          code,
          3,
          parentCategoryId2,
          token,
          chabk,
          setMessage
        );
        if (result.isSuccess == true) {
          setTimeout(() => {
            setCheck((r) => ({ ...r, check1: true }));
            setName("");
            setCode("");
            setLoad(false);
            setUpdateTable(!updateTable);
            setMessage(result.error ? result.error : result.message);
            setTimeout(() => {
              setCheck((r) => ({ ...r, check1: false }));
              setMessage("");
            }, 5000);
          }, 2000);
        } else if (result.isSuccess == false) {
          setTimeout(() => {
            setCheck((r) => ({ ...r, check4: true }));
            setName("");
            setCode("");
            setLoad(false);
            setUpdateTable(!updateTable);
            setMessage(result.error ? result.error : result.message);
            setTimeout(() => {
              setCheck((r) => ({ ...r, check4: false }));
              setMessage("");
            }, 5000);
          }, 2000);
        }
      } catch (error) {
        setTimeout(() => {
          setCheck((r) => ({ ...r, check4: true }));
          setLoad(false);
          setMessage("ثبت نشد");
          setTimeout(() => {
            setCheck((r) => ({ ...r, check4: false }));
            setMessage("");
          }, 5000);
        }, 2000);
      }
    }
  };

  return (
    <>
      <style>
        {`
      .boxFilter{
      background:#ffffff4f;
      backdrop-filter:blur(10px);
      }
      .boxFilter4{
    //   background:#ffffff4f;
      backdrop-filter:blur(10px);
      }
      `}
      </style>
      <CheckMessage message={message} check={check} />
      {isLoading == true ? (
        checkData == false ? (
          <div className="w-full min-h-[100vh] flex content-center justify-center flex-wrap gap-5">
            <Loading />
            <p className="w-full flex justify-center items-center text-[1.2rem]">
              لطفاً منتظر بمانید، داده‌ها در حال بارگذاری هستند ...
            </p>
          </div>
        ) : (
          <div className="w-full min-h-[100vh] flex content-center justify-center flex-wrap gap-5">
            <p className="w-full flex justify-center items-center text-[1.5rem]">
              خطاهای پردازش
            </p>
            {messageData &&
              messageData.map((val, i) => {
                return (
                  <p
                    key={i}
                    className="w-full flex justify-center items-center text-[1.2rem]"
                  >
                    {i + 1} - {val}
                  </p>
                );
              })}
          </div>
        )
      ) : (
        <div className="w-full min-h-[100vh] flex justify-center">
          <div className="w-full min-h-[100vh] flex 2xl:container justify-center  flex-wrap content-between">
            <section className="w-[81%]  pt-10">
              <div className="w-full h-[140px] rounded-2xl shadow-custom-6">
                <img src={img1} alt="" className="w-full h-full rounded-2xl" />
              </div>
              <div className="w-full py-5">
                <div dir="ltr" className="w-full">
                  <div dir="rtl" className="w-full h-full">
                    <section className="w-full h-full flex flex-wrap px-4 pb-2 gap-4">
                      <h3 className="w-full flex justify-center text-[1.3rem] ">
                        دسته بندی سطح سه
                      </h3>
                      <article className="w-[100%] rounded-2xl shadow-custom-7 boxFilter p-5 flex gap-y-10 flex-wrap justify-around items-center">
                        <div className="w-[100%] flex gap-5 justify-around">
                          <div className="w-[30%] flex-wrap flex justify-center content-center gap-2">
                            <p className="w-full">
                              <span className="text-red-500">*</span>
                              دسته بندی سطح یک:
                            </p>
                            <SelectInput
                              options={options}
                              setData={setParentCategoryId1}
                              hasError={false}
                            />
                          </div>
                          <div className="w-[30%] flex-wrap flex justify-center content-center gap-2">
                            <p className="w-full">
                              <span className="text-red-500">*</span>
                              دسته بندی سطح دو:
                            </p>
                            <SelectInput
                              options={options2}
                              setData={setParentCategoryId2}
                              hasError={false}
                            />
                          </div>
                          <TextFull
                            pattern={
                              /^[a-zA-Z\u0600-\u06FF\s0-9\u0660-\u0669]+$/
                            }
                            placeholder={"لطفا نوع دسته بندی را وارد کنید..."}
                            label={"* نوع دسته بندی :"}
                            svg={false}
                            width={"w-[30%] h-[60px]"}
                            data={name}
                            setData={setName}
                            styleLabel={"text-[1rem] xl:text-[1rem] "}
                            styleInput={
                              "text-[1rem] xl:text-[1rem] h-[40px] xl:h-[35px]"
                            }
                            styleError={styleError1}
                            styleBox={"bg-[#ffffff]"}
                          />
                          <TextNumber
                            placeholder={""}
                            label={"کد :"}
                            svg={false}
                            width={"w-[30%] h-[60px]"}
                            max={""}
                            data={code}
                            setData={setCode}
                            styleLabel={"text-[1rem] lg:text-[1rem] text-black"}
                            styleInput={
                              "text-[1rem] lg:text-[1.2rem] h-[40px] lg:h-[35px]"
                            }
                            styleBox={"bg-[#ffffff]"}
                          />
                        </div>
                        <div className="w-[20%] flex">
                          <Button
                            value={"ثبت"}
                            click={() => sendForm(event)}
                            styleButton={10}
                          />
                        </div>
                      </article>
                      {/* <Table3
                      updateTable={updateTable}
                      setUpdateTable={setUpdateTable}
                    /> */}
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <div className="w-full h-[50px] flex justify-center items-center">
              <WithSupport2 />
            </div>
          </div>
          <Load
            load={load}
            text={"در حال ثبت نوع بسته بندی لطفا منتظر بمانید ..."}
          />
        </div>
      )}
    </>
  );
}

export default ClassificationOfGoods3;
