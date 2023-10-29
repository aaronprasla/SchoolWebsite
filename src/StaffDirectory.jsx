import { React } from 'react'

function Staff() {
    return (
        <>
            <div style={{ marginTop: '4.5rem', padding: '1rem', display: 'flex', flexWrap: 'wrap' }}>
                <h1 style={{ marginLeft: '1rem', color: 'white', width: '100%' }}>Staff Directory</h1>

                <table
                    align="left"
                    className="Table"
                    style={{
                        borderCollapse: "collapse",
                        border: "none",
                        marginLeft: 9,
                        marginRight: 9
                    }}
                    width={612}
                >
                    <tbody style={{ backgroundColor: 'black', color: 'white', flex: '1', justifySelf: 'left' }}>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Tracy Houk
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>Principal</b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>Office</span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <font face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Brenda Fredriksen</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>Vice Principal</b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Office/LRT
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    height: 8,

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Deanne Stawarz
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    height: 8,

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Kindergarten A and B{" "}
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                rowSpan={4}
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",
                                    height: 8,

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    The Hive
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Pod 1
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <font color="#000000" face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Becky Tayler</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 1/2 A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Becky Halter
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 1/2 B
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Haley Miller
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 1/2 C{" "}
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Rebecca Stanicky
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 4 A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                rowSpan={3}
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Nature’s Nook
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Pod 2
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    height: 5,

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Hope Wirll
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    height: 5,

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 3 A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Erin Gale
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <font color="#000000" face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Stephanie Tran</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 2/3A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 3/4&nbsp;A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Neil Barber{" "}
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 5&nbsp;A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                rowSpan={3}
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Courageous Corner
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Pod 3
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Rylan Rogers
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 4/5 A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Jenn Foell
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Ashley Myrah
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 6A
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 6B
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    AJ Schlenker
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 7/8 D
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                    &nbsp;
                                </p>
                            </td>
                            <td
                                rowSpan={4}
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Academic Avenue
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Pod 4
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Claire Castle
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 7/8 A&nbsp;
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <font color="#000000" face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Kris Jan</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Grade 7/8 B
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <a href="https://sites.google.com/rbe.sk.ca/thejanclan/home">
                                        <span style={{ fontSize: "11pt" }}>
                                            <span style={{ lineHeight: "115%" }}>
                                                <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                    <b>
                                                        <span
                                                            lang="EN-CA"
                                                            style={{ color: "white" }}
                                                            xmlLang="EN-CA"
                                                        >
                                                            Classroom website
                                                        </span>
                                                    </b>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>&nbsp;</p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>&nbsp;</p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Andrew Gerrand
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Functional Transitions Classroom
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Jasmine Manesiya
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Learning Resource&nbsp;
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ tabStops: "116.25pt" }}>
                                            <span style={{ lineHeight: "115%" }}>
                                                <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Stephanie Wotherspoon{" "}
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Teacher Librarian&nbsp;/
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Primary Specialist&nbsp;
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Legacy Library/The Hive
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Alicia Reschny/Matthew Carr
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Specialist (Arts Ed.){" "}
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Ukulele Lane{" "}
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Amy Seiferling
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Specialist (Core French){" "}
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Nature’s Nook
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <font color="#000000" face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Erica Clark</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        Specialists
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    Chad Parker
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>
                                                    <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                        English as an Additional Language
                                                    </span>
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",

                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <span lang="EN-CA" style={{ color: "white" }} xmlLang="EN-CA">
                                                    EAL Office
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Amber McGonigal
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>Administrative Assistant</b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p align="center" style={{ textAlign: "center", marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>Office</span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Christina Klyne
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Joni Wikman
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Corissa St. Louis
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Kristina Derow
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                Donna Stercl
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <font face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Theresa Hort</span>
                                    </font>
                                </p>
                                <p style={{ marginBottom: 13 }}>
                                    <font face="Calibri, sans-serif">
                                        <span style={{ fontSize: "14.6667px" }}>Gurmeet Kaur</span>
                                    </font>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 180,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>
                                    <span style={{ fontSize: "11pt" }}>
                                        <span style={{ lineHeight: "115%" }}>
                                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                                                <b>Special Education Assistants</b>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 228,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "none"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>&nbsp;</p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                <p style={{ marginBottom: 13 }}>Garrett Schwartz&nbsp;-</p>
                                <p style={{ marginBottom: 13 }}>Head Facility Operator&nbsp;</p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    borderBottom: "1px solid white",
                                    width: 204,
                                    padding: "0in 7px 0in 7px",
                                    borderTop: "none",
                                    borderRight: "1px solid white",
                                    borderLeft: "1px solid white"
                                }}
                                valign="top"
                            >
                                &nbsp;
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}



export default Staff