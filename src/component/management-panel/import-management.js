import { useCallback, useEffect, useRef, useState , Suspense } from "react";
import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { setTimerSide } from "@/Store/store.js";

import City from "@/component/component-general/city/city.jsx";
import WithSupport2 from "@/component/component-general/withSupport2";
import Button from "@/component/component-general/button";
import TextFull from "@/component/component-general/input/textFull";
import File from "@/component/component-general/input/file";
import SelectInput from "@/component/component-general/select.jsx";
import SelectAllInput from "@/component/component-general/selectAll.jsx";
import SelectInputMultiStage from "@/component/component-general/selectMultiStage.jsx";
import TextNumber from "@/component/component-general/input/textNumber";
import Price from "@/component/component-general/input/price";
import CheckBoxAccordion2 from "@/component/component-general/input/checkBoxAccordion2";
import ImageUpload from "@/component/component-general/input/imageUpload";
import Load from "@/component/component-general/load";
import CheckMessage from "@/component/component-general/checkMessage.jsx";
import Loading from "@/component/component-general/loading.jsx";
import Modal from "@/component/component-general/modal/modal.jsx"
import Text from "@/component/component-general/input/text";
import TextArea from "@/component/component-general/input/textArea.jsx";
import InputSearch from "@/component/component-general/input/inputSearch";
import TextPercentage from "@/component/component-general/input/TextPercentage.jsx";
import TextPercentage2 from "@/component/component-general/input/TextPercentage2.jsx";
import InputDate from "@/component/component-general/input/inputDate.jsx";
import GeneralTable from '@/component/component-general/table/generalTable.jsx';

import InputNumber from "@/component/component-general/input/input-number";
import InputTextNoValid from "@/component/component-general/input/input-text-no-valid";
import InputTextArea from "@/component/component-general/input/input-text-area";
import InputSelectAll from "@/component/component-general/input/input-select-all";
import InputCity from "@/component/component-general/city/input-city";
import InputSelect from "@/component/component-general/input/input-select";
import InputDate2 from "@/component/component-general/input/input-date";
// *****

import { GetAllUnit } from "@/function/getUnit/getUnit.js";
import { loadUserGetAllPosition } from "@/function/name-id-login/nameLogin.js";
import { GetProductClassification } from "@/function/product-classification/productClassification.js";
import { GetAllBrand } from "@/function/getAllBrand/getAllBrand.js";
import { PackageTypeGetAll } from "@/function/packageTypeGetAll/packageTypeGetAll.js";
import { supplierNameGetAll } from "@/function/supplierNameGetAll/supplierNameGetAll.js";
import { GetCookie } from "@/function/cookie/cookie.js";
import {GoodGetAll} from '@/function/goodGetAll/goodGetAll.js'
import { convertToJalali , sendDateToBackend , updateArrayError , areArraysEqual} from "@/function/function.js";


// ********
import { sendRegisterOfGoods , fetchGetAllBrand , fetchGoodGet , SupplierGetAll} from "@/data";
import { postGoodList , postGoodDelete , postGoodUpdate } from "@/services/RegistrationGoods/RegistrationGoods.js";
import { postGoodDiscountGetList } from "@/services/salesRules/salesRules.js";
import {sendGoodDiscount} from "@/services/salesRules/salesRules.js";
import { postPackageTypeCreate , postPackageTypeGetList , postPackageTypeUpdatePackage , postPackageTypeDelete} from "@/services/packageType/packageType.js";
import { postPackageTypeUpdateBrand, postBrandGetList, postSupplierToggleBrand, postBrandDelete, postBrandGetEdit, sendBrandRegistration} from "@/services/brand/brand.js";
import {postUnitCreate , postUnitGetList , postUnitUpdate , postUnitDeleteUnit} from '@/services/basicDefinitions/unit.js'
import { fetchSupplierGet , profileSupplierUpdate } from "@/services/profile/profileSupplier.js";
import { postShopperGet } from "@/services/shopper/shopper.js";
import { postSupplierGetList, postSupplierToggleActive , postShopperGetList, postShopperToggleActive} from "@/services/ConfirmationOfRegisteredPersons/ConfirmationOfRegisteredPersons.js";
import { categoryGetAll , categoryCreate , CategoryGetList} from "@/services/basicDefinitions/ClassificationOfGoods.js";
import {profileShopperUpdate , fetchShopperGet} from "@/services/profile/profile-shopper.js"
import { postRelationshipGetList , postRelationshipAnswer , postRelationshipCreate, postRelationshipSearchMembers} from "@/services/colleagues/Colleagues.js";
import { postMessageGetList } from "@/services/message/message.js";
import { SupplierGetFiles, SupplierUpdateMainFile, SupplierRemoveFile , sendDataToServer } from "@/services/upload-Video-Image/upload.js";

// *********

import Svg1 from "@/component/component-general/svgPanel/svg1.jsx";
import Svg2 from "@/component/component-general/svgPanel/svg2.jsx";
import Svg1Cartable from "@/component/component-general/svgPanel/svg1Cartable.jsx";
import Svg2Cartable from "@/component/component-general/svgPanel/svg2Cartable.jsx";
import Svg3Cartable from "@/component/component-general/svgPanel/svg3Cartable.jsx";
import Svg4Cartable from "@/component/component-general/svgPanel/svg4Cartable.jsx";

// ********
export {
    React,
    Suspense,
    useCallback,
    useEffect,
    useRef,
    useState,
    useSelector,
    useDispatch,
    setTimerSide,
    
    City,
    WithSupport2,
    Text,
    InputSearch,
    Button,
    TextFull,
    File,
    SelectInput,
    SelectInputMultiStage,
    SelectAllInput,
    TextNumber,
    Price,
    CheckBoxAccordion2,
    ImageUpload,
    Load,
    CheckMessage,
    Loading,
    Modal,
    TextArea,
    TextPercentage,
    TextPercentage2,
    InputDate,

    InputNumber,
    InputTextNoValid,
    InputTextArea,
    InputSelectAll,
    InputCity,
    InputSelect,
    InputDate2,

    GetAllUnit,
    loadUserGetAllPosition,
    GetProductClassification,
    GetAllBrand,
    PackageTypeGetAll,
    supplierNameGetAll,
    GetCookie,
    GoodGetAll,
    convertToJalali,
    GeneralTable,
    sendDateToBackend,
    updateArrayError,
    areArraysEqual,

    Svg1,
    Svg2,
    Svg1Cartable,
    Svg2Cartable,
    Svg3Cartable,
    Svg4Cartable,

    sendRegisterOfGoods,
    fetchGetAllBrand,
    postGoodUpdate,
    postGoodList,
    postGoodDelete,
    fetchGoodGet,
    postGoodDiscountGetList,
    sendGoodDiscount,
    sendBrandRegistration,
    postPackageTypeUpdateBrand,
    postBrandGetList,
    postSupplierToggleBrand,
    postBrandDelete,
    postBrandGetEdit,
    postPackageTypeCreate,
    postPackageTypeGetList,
    postPackageTypeUpdatePackage,
    postPackageTypeDelete,
    postUnitCreate,
    postUnitGetList,
    postUnitUpdate,
    postUnitDeleteUnit,
    fetchSupplierGet,
    postSupplierGetList,
    postSupplierToggleActive,
    profileSupplierUpdate,
    postShopperGetList,
    postShopperToggleActive,
    postShopperGet,
    fetchShopperGet,
    categoryGetAll,
    profileShopperUpdate,
    SupplierGetAll,
    categoryCreate,
    postRelationshipGetList,
    postRelationshipAnswer,
    postRelationshipCreate,
    postRelationshipSearchMembers,
    postMessageGetList,
    SupplierGetFiles,
    SupplierUpdateMainFile,
    SupplierRemoveFile,
    sendDataToServer,
    CategoryGetList,
}