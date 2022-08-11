import { jsPDF } from "jspdf";

const OutputType = {
  Save: "save", //save pdf as a file
  DataUriString: "datauristring", //returns the data uri string
  DataUri: "datauri", //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow", //opens the data uri in new window
  Blob: "blob", //return blob format of the doc,
  ArrayBuffer: "arraybuffer", //return ArrayBuffer format
};

export { OutputType, jsPDF };

/**
 *
 * @param { {
 *  outputType: OutputType | string,
 *  returnJsPDFDocObject?: boolean,
 *  fileName: string,
 *  orientationLandscape?: boolean,
 *  compress?: boolean,
 *  logo?: {
 *      src?: string,
 *      type?: string,
 *      width?: number,
 *      height?: number,
 *      margin?: {
 *        top?: number,
 *        left?: number
 *      }
 *   },
 *  stamp?: {
 *      inAllPages?: boolean,
 *      src?: string,
 *      type?: string,
 *      width?: number,
 *      height?: number,
 *      margin?: {
 *        top?: number,
 *        left?: number
 *      }
 *   },
 *   business?: {
 *       name?: string,
 *       address?: string,
 *       phone?: string,
 *       email?: string,
 *       email_1?: string,
 *       website?: string,
 *   },
 *   contact?: {
 *       label?: string,
 *       name?: string,
 *       address?: string,
 *       phone?: string,
 *       email?: string,
 *       otherInfo?: string,
 *   },
 *   invoice?: {
 *       label?: string,
 *       num?: number,
 *       invDate?: string,
 *       invGenDate?: string,
 *       headerBorder?: boolean,
 *       tableBodyBorder?: boolean,
 *       header?:
 *        {
 *          title: string,
 *          style?: { width?: number }
 *        }[],
 *       table?: any,
 *       invDescLabel?: string,
 *       invDesc?: string,
 *       additionalRows?: [{
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
 *       }],
 *   },
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
function jsPDFInvoiceTemplate(props) {
  const param = {
    outputType: props.outputType || "save",
    returnJsPDFDocObject: props.returnJsPDFDocObject || false,
    fileName: props.fileName || "",
    orientationLandscape: props.orientationLandscape || false,
    compress: props.compress || false,
    logo: {
      src: props.logo?.src || "",
      type: props.logo?.type || "",
      width: props.logo?.width || "",
      height: props.logo?.height || "",
      margin: {
        top: props.logo?.margin?.top || 0,
        left: props.logo?.margin?.left || 0,
      },
    },
    stamp: {
      inAllPages: props.stamp?.inAllPages || false,
      src: props.stamp?.src || "",
      width: props.stamp?.width || "",
      height: props.stamp?.height || "",
      margin: {
        top: props.stamp?.margin?.top || 0,
        left: props.stamp?.margin?.left || 0,
      },
    },
    business: {
      name: props.business?.name || "",
      address: props.business?.address || "",
      phone: props.business?.phone || "",
      email: props.business?.email || "",
      email_1: props.business?.email_1 || "",
      website: props.business?.website || "",
    },
    contact: {
      label: props.contact?.label || "",
      name: props.contact?.name || "",
      address: props.contact?.address || "",
      phone: props.contact?.phone || "",
      email: props.contact?.email || "",
      otherInfo: props.contact?.otherInfo || "",
    },
    invoice: {
      label: props.invoice?.label || "",
      num: props.invoice?.num || "",
      invDate: props.invoice?.invDate || "",
      invGenDate: props.invoice?.invGenDate || "",
      headerBorder: props.invoice?.headerBorder || false,
      tableBodyBorder: props.invoice?.tableBodyBorder || false,
      header: props.invoice?.header || [],
      table: props.invoice?.table || [],
      invDescLabel: props.invoice?.invDescLabel || "",
      invDesc: props.invoice?.invDesc || "",
      additionalRows: props.invoice?.additionalRows?.map((x) => {
        return {
          col1: x?.col1 || "",
          col2: x?.col2 || "",
          col3: x?.col3 || "",
          style: {
            fontSize: x?.style?.fontSize || 12,
          },
        };
      }),
    },
    footer: {
      text: props.footer?.text || "",
    },
    pageEnable: props.pageEnable || false,
    pageLabel: props.pageLabel || "Page",
  };

  const splitTextAndGetHeight = (text, size) => {
    var lines = doc.splitTextToSize(text, size);
    return {
      text: lines,
      height: doc.getTextDimensions(lines).h,
    };
  };
  if (param.invoice.table && param.invoice.table.length) {
    if (param.invoice.table[0].length != param.invoice.header.length)
      throw Error("Length of header and table column must be equal.");
  }

  const options = {
    orientation: param.orientationLandscape ? "landscape" : "",
    compress: param.compress,
  };

  var doc = new jsPDF(options);

  var docWidth = doc.internal.pageSize.width;
  var docHeight = doc.internal.pageSize.height;

  var colorBlack = "#000000";
  var colorGray = "#4d4e53";
  //starting at 15mm
  var currentHeight = 6;
  //var startPointRectPanel1 = currentHeight + 6;

  var pdfConfig = {
    headerTextSize: 20,
    labelTextSize: 11,
    fieldTextSize: 7,
    lineHeight: 6,
    subLineHeight: 4,
  };

  // doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  // doc.text(docWidth - 10, currentHeight, param.business.name, "right");
  doc.setFontSize(pdfConfig.fieldTextSize);

  // if (param.logo.src) {
  //   var imageHeader = "";
  //   if (typeof window === "undefined") {
  //     imageHeader = param.logo.src;
  //   } else {
  //     imageHeader = new Image();
  //     imageHeader.src = param.logo.src;
  //   }
  //   //doc.text(htmlDoc.sessionDateText, docWidth - (doc.getTextWidth(htmlDoc.sessionDateText) + 10), currentHeight);
  //   if (param.logo.type)
  //     doc.addImage(
  //       imageHeader,
  //       param.logo.type,
  //       10 + param.logo.margin.left,
  //       currentHeight - 5 + param.logo.margin.top,
  //       param.logo.width,
  //       param.logo.height
  //     );
  //   else
  //     doc.addImage(
  //       imageHeader,
  //       10 + param.logo.margin.left,
  //       currentHeight - 5 + param.logo.margin.top,
  //       param.logo.width,
  //       param.logo.height
  //     );
  // }

  // currentHeight += pdfConfig.subLineHeight;
  // currentHeight += pdfConfig.subLineHeight;
  // doc.text(docWidth - 10, currentHeight, param.business.address, "right");
  // currentHeight += pdfConfig.subLineHeight;
  // doc.text(docWidth - 10, currentHeight, param.business.phone, "right");
  // doc.setFontSize(pdfConfig.fieldTextSize);
  // doc.setTextColor(colorGray);
  // currentHeight += pdfConfig.subLineHeight;
  // doc.text(docWidth - 10, currentHeight, param.business.email, "right");

  // currentHeight += pdfConfig.subLineHeight;
  // doc.text(docWidth - 10, currentHeight, param.business.email_1, "right");

  // currentHeight += pdfConfig.subLineHeight;
  // doc.text(docWidth - 10, currentHeight, param.business.website, "right");

  //line breaker after logo & business info
  if (param.invoice.header.length) {
    // currentHeight += pdfConfig.subLineHeight;
    // doc.line(10, currentHeight, docWidth - 10, currentHeight);
  }

  //Contact part

  /* main header */
  doc.setTextColor(colorBlack);
  doc.setFontSize(pdfConfig.fieldTextSize + 2);
  doc.text("TAX INVOICE", docWidth / 2, currentHeight, "center");
  currentHeight += pdfConfig.subLineHeight;

  doc.setFontSize(pdfConfig.fieldTextSize);
  doc.text("ORIGINAL", docWidth / 2, currentHeight, "center");
  currentHeight += pdfConfig.subLineHeight;

  doc.setFontSize(pdfConfig.fieldTextSize + 3);
  doc.setFont(doc.getFontList()[0], "bold");
  doc.text("BOUNIPUN", docWidth / 2, currentHeight, "center");
  currentHeight += pdfConfig.subLineHeight;

  doc.setFont(doc.getFontList()[0], "normal");
  doc.setFontSize(pdfConfig.fieldTextSize + 1);
  doc.text(
    "H-30, Integrated Textile and Handicraft Park, Zakura, Srinagar, Jammu and Kashmir,India-190024",
    docWidth / 2,
    currentHeight,
    "center"
  );
  currentHeight += pdfConfig.subLineHeight;

  doc.text(
    "Contact: +91 78897-77377, +91 91030-77655, e-mail:care@bounipun.in",
    docWidth / 2,
    currentHeight,
    "center"
  );
  currentHeight += pdfConfig.subLineHeight;

  doc.setFont(doc.getFontList()[0], "bold");
  doc.text("GSTIN: 01AMJPK9732G1Z4", docWidth / 2, currentHeight, "center");
  currentHeight += pdfConfig.subLineHeight;

  doc.text("www.bounipun.in", docWidth / 2, currentHeight, "center");
  currentHeight += pdfConfig.subLineHeight;
  doc.setFont(doc.getFontList()[0], "normal");

  /* add table above items */
  addTableAboveItems();

  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);
  // currentHeight += pdfConfig.lineHeight;
  // if (param.contact.label) {
  //   doc.text(10, currentHeight, param.contact.label);
  //   currentHeight += pdfConfig.lineHeight;
  // }

  // doc.setTextColor(colorBlack);
  // doc.setFontSize(pdfConfig.headerTextSize - 5);
  // if (param.contact.name) doc.text(10, currentHeight, param.contact.name);

  // if (param.invoice.label && param.invoice.num) {
  //   doc.text(
  //     docWidth - 10,
  //     currentHeight,
  //     param.invoice.label + param.invoice.num,
  //     "right"
  //   );
  // }

  if (param.contact.name || (param.invoice.label && param.invoice.num))
    currentHeight += pdfConfig.subLineHeight;

  doc.setTextColor(colorGray);
  // doc.setFontSize(pdfConfig.fieldTextSize - 2);
  doc.setFontSize(pdfConfig.fieldTextSize - 0.8);

  //end contact part

  function addTableAboveItems() {
    const buyerTableWidth = 160;
    /* vertical line */
    doc.line(
      buyerTableWidth,
      currentHeight,
      buyerTableWidth,
      currentHeight + 26.2
    );

    doc.rect(10, currentHeight, docWidth - 20, 26.2);
    currentHeight += 4;
    doc.setFontSize(pdfConfig.fieldTextSize + 1.5);
    /* add label */
    setBoldText();
    doc.text(12, currentHeight, "BUYER:");
    // doc.line(10, currentHeight+1.5, 125, currentHeight + 1);

    setNormalText();

    /* label + invoice number */
    doc.text(buyerTableWidth + 2, currentHeight, param.invoice.label);
    setBoldText();
    doc.text(buyerTableWidth + 16, currentHeight, param.invoice.num);
    setNormalText();

    /* payment date */
    doc.text(
      buyerTableWidth + 2,
      currentHeight + pdfConfig.subLineHeight * 1.85,
      param.invoice.invDate
    );
    /* invoice generate date */
    doc.text(
      buyerTableWidth + 2,
      currentHeight + pdfConfig.subLineHeight * 3.55,
      param.invoice.invGenDate
    );
    /* reverse charge */
    doc.text(
      buyerTableWidth + 2,
      currentHeight + pdfConfig.subLineHeight * 5,
      "Reverse Charge (Y/N):"
    );
    /* transport mode */
    doc.text(
      buyerTableWidth + 55,
      currentHeight + pdfConfig.subLineHeight * 5,
      "Transport Mode: SELF"
    );

    /* add name */
    doc.setTextColor(colorBlack);
    // doc.setFontSize(pdfConfig.headerTextSize - 7);

    doc.text(24, currentHeight, param.contact.name.toUpperCase());

    currentHeight += pdfConfig.subLineHeight + 1;

    /* add address */
    const splitAddressText = doc.splitTextToSize(
      param.contact.address.toUpperCase(),
      110
    );
    doc.text(splitAddressText, 12, currentHeight - 1);
    /* horizontal line */
    doc.line(10, currentHeight + 5, docWidth - 10, currentHeight + 5);
    doc.line(
      buyerTableWidth,
      currentHeight - 2,
      docWidth - 10,
      currentHeight - 2
    );

    currentHeight += pdfConfig.subLineHeight * 2;

    /* vertical line */
    doc.line(
      buyerTableWidth * 0.5,
      currentHeight - 3.2,
      buyerTableWidth * 0.5,
      currentHeight + 9.2
    );
    doc.line(
      buyerTableWidth * 0.65,
      currentHeight - 3.2,
      buyerTableWidth * 0.65,
      currentHeight + 9.2
    );

    /* horizontal lines */
    doc.line(
      buyerTableWidth * 0.65,
      currentHeight + 3,
      docWidth - 10,
      currentHeight + 3
    );
    // doc.line(buyerTableWidth, currentHeight+3, docWidth-10, currentHeight+3);

    /* add email */
    doc.text(12, currentHeight + 1, "Email: " + param.contact.email);
    /* add gst and state */
    doc.text(82, currentHeight + 1, "GSTIN: ");
    doc.text(107, currentHeight + 1, "State: Jammu and Kashmir");

    doc.text(82, currentHeight + 7.5, "XXXXXXXXX");
    doc.line(10, currentHeight + 3, buyerTableWidth * 0.5, currentHeight + 3);
    /* vertical line */
    doc.line(
      docWidth - 85,
      currentHeight + 3,
      docWidth - 85,
      currentHeight + 9.2
    );
    currentHeight += pdfConfig.subLineHeight + 1.4;

    /* add contact number and state code */
    doc.text(12, currentHeight + 1.5, "Contact:" + param.contact.phone);
    doc.text(107, currentHeight + 1.5, "State Code: 01");
  }

  //TABLE PART
  //var tdWidth = 31.66;
  //10 margin left - 10 margin right
  var tdWidth = (doc.getPageWidth() - 20) / param.invoice.header.length;

  //#region TD WIDTH
  if (param.invoice.header.length > 2) {
    //add style for 2 or more columns
    const customColumnNo = param.invoice.header
      .map((x) => x?.style?.width || 0)
      .filter((x) => x > 0);
    let customWidthOfAllColumns = customColumnNo.reduce((a, b) => a + b, 0);
    tdWidth =
      (doc.getPageWidth() - 20 - customWidthOfAllColumns) /
      (param.invoice.header.length - customColumnNo.length);
  }
  //#endregion

  //#region TABLE HEADER BORDER
  var addTableHeaderBorder = () => {
    // currentHeight += 1;
    const lineHeight = 7;
    let startWidth = 0;
    doc.setLineWidth(0.3);
    for (let i = 0; i < param.invoice.header.length; i++) {
      const currentTdWidth = param.invoice.header[i]?.style?.width || tdWidth;

      if (i === 0) doc.rect(10, currentHeight, currentTdWidth, lineHeight + 2);
      else {
        const previousTdWidth =
          param.invoice.header[i - 1]?.style?.width || tdWidth;
        const widthToUse =
          currentTdWidth == previousTdWidth ? currentTdWidth : previousTdWidth;
        startWidth += widthToUse;
        doc.rect(
          startWidth + 10,
          currentHeight,
          currentTdWidth,
          lineHeight + 2
        );
      }
    }
    doc.setLineWidth(0.1);
    // currentHeight += 4;
  };
  //#endregion

  //#region TABLE BODY BORDER
  var addTableBodyBorder = (lineHeight) => {
    // currentHeight;
    let startWidth = 0;
    for (let i = 0; i < param.invoice.header.length; i++) {
      const currentTdWidth = param.invoice.header[i]?.style?.width || tdWidth;
      if (i === 0) doc.rect(10, currentHeight, currentTdWidth, lineHeight);
      else {
        const previousTdWidth =
          param.invoice.header[i - 1]?.style?.width || tdWidth;
        const widthToUse =
          currentTdWidth == previousTdWidth ? currentTdWidth : previousTdWidth;
        startWidth += widthToUse;
        doc.rect(startWidth + 10, currentHeight, currentTdWidth, lineHeight);
      }
    }
  };
  //#endregion

  /* set bold text */
  function setBoldText() {
    doc.setFont(doc.getFontList()[0], "bold");
  }

  /* set normal text */
  function setNormalText() {
    doc.setFont(doc.getFontList()[0], "normal");
  }

  //#region TABLE HEADER
  var addTableHeader = () => {
    if (param.invoice.headerBorder) addTableHeaderBorder();

    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize);
    //border color
    doc.setDrawColor(colorGray);
    currentHeight += 2;
    // console.log(doc.getFontList());
    let startWidth = 0;
    // doc.setFontSize(pdfConfig.fieldTextSize + 1);
    doc.setFont(doc.getFontList()[0], "bold");
    param.invoice.header.forEach(function (row, index) {
      if (index == 0) doc.text(row.title, 11, currentHeight - 2);
      else {
        const currentTdWidth = row?.style?.width || tdWidth;
        const previousTdWidth =
          param.invoice.header[index - 1]?.style?.width || tdWidth;
        const widthToUse =
          currentTdWidth == previousTdWidth ? currentTdWidth : previousTdWidth;
        startWidth += widthToUse;
        /* TODO: added auto line break here */
        const strArr = doc.splitTextToSize(row.title, currentTdWidth - 2);

        doc.text(strArr, startWidth + 11.5, currentHeight - 2);
      }
    });

    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.setFont(doc.getFontList()[0], "normal");

    currentHeight += pdfConfig.subLineHeight - 1;
    doc.setTextColor(colorGray);
  };
  //#endregion

  addTableHeader();

  //#region TABLE BODY
  var tableBodyLength = param.invoice.table.length;
  param.invoice.table.forEach(function (row, index) {
    doc.line(10, currentHeight, docWidth - 10, currentHeight);

    //get nax height for the current row
    var getRowsHeight = function () {
      let rowsHeight = [];
      row.forEach(function (rr, index) {
        const widthToUse = param.invoice.header[index]?.style?.width || tdWidth;

        let item = splitTextAndGetHeight(rr.toString(), widthToUse - 1); //minus 1, to fix the padding issue between borders

        /* added row height */
        rowsHeight.push(item.height + 2);
      });

      return rowsHeight;
    };

    var maxHeight = Math.max(...getRowsHeight());

    //body borders
    if (param.invoice.tableBodyBorder) addTableBodyBorder(maxHeight + 1);

    let startWidth = 0;
    row.forEach(function (rr, index) {
      const widthToUse = param.invoice.header[index]?.style?.width || tdWidth;
      let item = splitTextAndGetHeight(rr.toString(), widthToUse - 2.5); //minus 1, to fix the padding issue between borders

      if (index == 0) doc.text(item.text, 11, currentHeight + 4);
      else {
        const currentTdWidth = rr?.style?.width || tdWidth;
        const previousTdWidth =
          param.invoice.header[index - 1]?.style?.width || tdWidth;
        const widthToUse =
          currentTdWidth == previousTdWidth ? currentTdWidth : previousTdWidth;
        startWidth += widthToUse;
        doc.text(item.text, 11 + startWidth, currentHeight + 4);
      }
    });

    currentHeight += maxHeight - 4;

    //td border height
    currentHeight += 5;

    //pre-increase currentHeight to check the height based on next row
    if (index + 1 < tableBodyLength) currentHeight += maxHeight;

    if (
      param.orientationLandscape &&
      (currentHeight > 185 ||
        (currentHeight > 178 && doc.getNumberOfPages() > 1))
    ) {
      doc.addPage();
      currentHeight = 10;
      if (index + 1 < tableBodyLength) addTableHeader();
    }

    if (
      !param.orientationLandscape &&
      (currentHeight > 265 ||
        (currentHeight > 255 && doc.getNumberOfPages() > 1))
    ) {
      doc.addPage();
      currentHeight = 10;
      if (index + 1 < tableBodyLength) addTableHeader();
      //else
      //currentHeight += pdfConfig.subLineHeight + 2 + pdfConfig.subLineHeight - 1; //same as in addtableHeader
    }

    //reset the height that was increased to check the next row
    if (index + 1 < tableBodyLength && currentHeight > 30)
      // check if new page
      currentHeight -= maxHeight;
  });

  // doc.line(10, currentHeight+1, docWidth - 10, currentHeight+1); //if we want to show the last table line
  doc.setLineWidth(0.4);
  doc.rect(10, currentHeight, docWidth - 20, 6);
  

  /* total row */

  setBoldText();
  doc.setFontSize(pdfConfig.fieldTextSize + 1.1);
  doc.text("Total", 55, currentHeight + 3.8);
  /* quantity total */
  doc.text("6", 121, currentHeight + 3.8);
  doc.line(120, currentHeight, 120, currentHeight + 6);
  doc.line(126, currentHeight, 126, currentHeight + 6);

  /* amount */
  doc.text("626875.00", 145, currentHeight + 3.8);
  /* taxable amount */
  doc.text("626875.00", 177, currentHeight + 3.8);
  /* igst total */
  doc.text("0", 209, currentHeight + 3.8);
  /* cgst total */
  doc.text("3432.00", 231, currentHeight + 3.8);
  /* sgst total */
  doc.text("3423.00", 255, currentHeight + 3.8);
  /* final total */
  doc.text("725775.00", 268, currentHeight + 3.8);

  /* vertical line */
  doc.line(120, currentHeight, 120, currentHeight + 6);

  doc.setLineWidth(0.1);

  setNormalText();

  currentHeight += 6;
  doc.setFontSize(pdfConfig.fieldTextSize);
  //#endregion

  var invDescSize = splitTextAndGetHeight(
    param.invoice.invDesc,
    docWidth / 2
  ).height;
  /* TODO: made some changes */
  invDescSize -= 5;

  //#region PAGE BREAKER
  var checkAndAddPageLandscape = function () {
    if (!param.orientationLandscape && currentHeight + invDescSize > 270) {
      doc.addPage();
      currentHeight = 10;
    }
  };

  var checkAndAddPageNotLandscape = function (heightLimit = 200) {
    if (
      param.orientationLandscape &&
      currentHeight + invDescSize > heightLimit
    ) {
      doc.addPage();
      currentHeight = 10;
    }
  };
  var checkAndAddPage = function () {
    checkAndAddPageNotLandscape();
    checkAndAddPageLandscape();
  };
  //#endregion

  //#region Stamp
  var addStamp = () => {
    let _addStampBase = () => {
      var stampImage = "";
      if (typeof window === "undefined") {
        stampImage = param.stamp.src;
      } else {
        stampImage = new Image();
        stampImage.src = param.stamp.src;
      }

      if (param.stamp.type)
        doc.addImage(
          stampImage,
          param.stamp.type,
          10 + param.stamp.margin.left,
          docHeight - 22 + param.stamp.margin.top,
          param.stamp.width,
          param.stamp.height
        );
      else
        doc.addImage(
          stampImage,
          10 + param.stamp.margin.left,
          docHeight - 22 + param.stamp.margin.top,
          param.stamp.width,
          param.stamp.height
        );
    };

    if (param.stamp.src) {
      if (param.stamp.inAllPages) _addStampBase();
      else if (
        !param.stamp.inAllPages &&
        doc.getCurrentPageInfo().pageNumber == doc.getNumberOfPages()
      )
        _addStampBase();
    }
  };
  //#endregion

  checkAndAddPage();

  doc.setTextColor(colorBlack);
  doc.setFontSize(pdfConfig.labelTextSize);
  // currentHeight += pdfConfig.lineHeight;

  /* TODO: added terms and conditions on left side of sub total */
  function addTermsAndConditions() {
    // doc.text(10, currentHeight, "Terms and Conditions", "left");
    /* TODO: added new line */
    let height = currentHeight;
    height += pdfConfig.subLineHeight * 2;

    doc.setTextColor(colorBlack);
    doc.setFontSize(8.5);
    doc.text(param.invoice.invDescLabel, 12, height);
    doc.text("Declaration: We hereby certify that", 91, height);

    height += pdfConfig.subLineHeight;

    /* TODO: add declaration points */
    const declarationPoints =
      " 1) This invoice is authentic. \n 2) It is the only invoice issues by us for the goods described herein. \n 3) It shows their exact value without deduction of any discount. \n 4) Their origin is India. ";

    var declarationsLines = doc.splitTextToSize(
      declarationPoints,
      docWidth / 2
    );

    var termsAndConditionPoints = doc.splitTextToSize(
      param.invoice.invDesc,
      docWidth / 2
    );

    doc.setFontSize(7.5);
    doc.setTextColor(colorGray);
    doc.text(termsAndConditionPoints, 12, height);
    doc.text(declarationsLines, 91, height);
  }

  addTermsAndConditions();

  //#region additionalRows
  if (param.invoice.additionalRows?.length > 0) {
    //#region Line breaker before invoce total
    // doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.subLineHeight;

    //#endregion
    const initialHeight = currentHeight;

    for (let i = 0; i < param.invoice.additionalRows.length; i++) {
      currentHeight += pdfConfig.subLineHeight + 0.5;
      doc.setFontSize(param.invoice.additionalRows[i].style.fontSize);
      doc.setTextColor(colorBlack);
      doc.text(
        docWidth - 29,
        currentHeight,
        param.invoice.additionalRows[i].col1,
        "right"
      );
      doc.setTextColor(colorGray);
      doc.text(
        docWidth - 12,
        currentHeight,
        param.invoice.additionalRows[i].col2,
        "right"
      );
      // doc.text(
      //   docWidth - 10,
      //   currentHeight,
      //   param.invoice.additionalRows[i].col3,
      //   "right"
      // );

      checkAndAddPage();
    }

    // doc.rect(docWidth-70, initialHeight, 60, 23);
    /* terms and conditions box */
    doc.rect(9, initialHeight - 2, 78, 30);
    /* we here by box */
    doc.rect(87, initialHeight - 2, 87, 30);
    /* authorise signatory box */
    doc.rect(174, initialHeight - 2, 55, 30);
    doc.setFontSize(8);
    doc.setTextColor(colorBlack);
    doc.text("For BOUNIPUN", 176 + 15.5, initialHeight + 2);
    doc.text("Authorized Signatory", 176 + 12.5, initialHeight + 26);
    doc.setFontSize(7.5);
    /* total box */
    doc.rect(229, initialHeight - 2, 58, 30);
  }
  //#endregion

  checkAndAddPage();

  doc.setTextColor(colorBlack);
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  doc.setFontSize(pdfConfig.labelTextSize);

  //#region Add num of pages at the bottom
  if (doc.getNumberOfPages() > 1) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      doc.setFontSize(pdfConfig.fieldTextSize - 2);
      doc.setTextColor(colorGray);

      if (param.pageEnable) {
        doc.text(docWidth / 2, docHeight - 10, param.footer.text, "center");
        doc.setPage(i);
        doc.text(
          param.pageLabel + " " + i + " / " + doc.getNumberOfPages(),
          docWidth - 20,
          doc.internal.pageSize.height - 6
        );
      }

      checkAndAddPageNotLandscape(183);
      checkAndAddPageLandscape();
      addStamp();
    }
  }
  //#endregion

  //#region INVOICE DESCRIPTION
  var addInvoiceDesc = () => {
    currentHeight += pdfConfig.subLineHeight + 2;

    doc.setFontSize(pdfConfig.labelTextSize);

    doc.setTextColor(colorBlack);

    // doc.text(param.invoice.invDescLabel, 10, currentHeight);

    currentHeight += pdfConfig.subLineHeight + 2;

    doc.setTextColor(colorGray);
    /* TODO: changed font size */
    doc.setFontSize(9);
    // doc.setFontSize(pdfConfig.fieldTextSize - 1);

    var lines = doc.splitTextToSize(param.invoice.invDesc, docWidth / 2);

    // //text in left half
    // doc.text(lines, 10, currentHeight);

    currentHeight +=
      doc.getTextDimensions(lines).h > 5
        ? doc.getTextDimensions(lines).h + 6
        : pdfConfig.lineHeight;

    /* TODO: added payment details */
    // doc.text("Payment Details", 100, currentHeight);

    // currentHeight += pdfConfig.subLineHeight + 2;
    // doc.text(declarationsLines, 100, currentHeight);

    return currentHeight;
  };
  addInvoiceDesc();
  //#endregion

  addStamp();

  //#region Add num of first page at the bottom
  if (doc.getNumberOfPages() === 1 && param.pageEnable) {
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.setTextColor(colorGray);
    doc.text(docWidth / 2, docHeight - 10, param.footer.text, "center");
    doc.text(
      param.pageLabel + "1 / 1",
      docWidth - 20,
      doc.internal.pageSize.height - 6
    );
  }
  //#endregion

  let returnObj = {
    pagesNumber: doc.getNumberOfPages(),
  };

  if (param.returnJsPDFDocObject) {
    returnObj = {
      ...returnObj,
      jsPDFDocObject: doc,
    };
  }

  if (param.outputType === "save") doc.save(param.fileName);
  else if (param.outputType === "blob") {
    const blobOutput = doc.output("blob");
    returnObj = {
      ...returnObj,
      blob: blobOutput,
    };
  } else if (param.outputType === "datauristring") {
    returnObj = {
      ...returnObj,
      dataUriString: doc.output("datauristring", {
        filename: param.fileName,
      }),
    };
  } else if (param.outputType === "arraybuffer") {
    returnObj = {
      ...returnObj,
      arrayBuffer: doc.output("arraybuffer"),
    };
  } else
    doc.output(param.outputType, {
      filename: param.fileName,
    });

  return returnObj;
}

export default jsPDFInvoiceTemplate;
