export function degreeToCompass(degree) {
    const compass = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
        "N",
    ];
    let idx = Infinity;
    while (idx > 16) {
        idx = Math.ceil(degree / 16);
    }
    return compass[idx];
}

//extract surf report
export const parseReport = (parse, island) => {
    console.log(parse);
    console.log(island);
    const surfReport = {
        discussion: "",
        today: "",
        tomorrow: "",
        dayPeriod1: "",
        dayPeriod2: "",
        dayPeriod3: "",
        dayPeriod4: "",
        tides: [],
        north: {
            name: "North Shore",
            surfHeights1: "",
            surfHeights2: "",
            surfHeights3: "",
            surfHeights4: "",
        },
        west: {
            name: "West Side",
            surfHeights1: "",
            surfHeights2: "",
            surfHeights3: "",
            surfHeights4: "",
        },
        south: {
            name: "South Side",
            surfHeights1: "",
            surfHeights2: "",
            surfHeights3: "",
            surfHeights4: "",
        },
        east: {
            name: "East Side",
            surfHeights1: "",
            surfHeights2: "",
            surfHeights3: "",
            surfHeights4: "",
        },
    };

    //extract discussion
    for (let i = 50; i < 100; i++) {
        if (parse[i].includes("DISCUSSION")) {
            for (let j = i; ; j++) {
                if (parse[j].includes("HI")) {
                    surfReport.discussion = parse
                        .slice(i, j)
                        .filter((item) => item)
                        .join("\n")
                        .replace(/.DISCUSSION/, "")
                        .replace(/^(.{3})/, "");
                    break;
                }
            }
            break;
        }
    }

    //extract report
    for (let i = 0; ; i++) {
        if (parse[i].includes(`${island}-`)) {
            console.log(parse, island);
            for (let j = i; j < i + 100; j++) {}
        }
    }
};

//         return surfReport;

//         if (parse[j].includes("________________________________")) {
//             surfReport.today = parse[j + 1]
//                 .split(" ")
//                 .filter((item) => item)[0];
//             surfReport.tomorrow = parse[j + 1]
//                 .split(" ")
//                 .filter((item) => item)[1];
//             surfReport.dayPeriod1 = parse[j + 3]
//                 .split(" ")
//                 .filter((item) => item)[0];
//             surfReport.dayPeriod2 = parse[j + 3]
//                 .split(" ")
//                 .filter((item) => item)[1];
//             surfReport.dayPeriod3 = parse[j + 3]
//                 .split(" ")
//                 .filter((item) => item)[2];
//             surfReport.dayPeriod4 = parse[j + 3]
//                 .split(" ")
//                 .filter((item) => item)[3];
//             surfReport.north.surfHeights1 = parse[j + 5]
//                 .split(" ")
//                 .filter((item) => item)[2];
//             surfReport.north.surfHeights2 = parse[j + 5]
//                 .split(" ")
//                 .filter((item) => item)[3];
//             surfReport.north.surfHeights3 = parse[j + 5]
//                 .split(" ")
//                 .filter((item) => item)[4];
//             surfReport.north.surfHeights4 = parse[j + 5]
//                 .split(" ")
//                 .filter((item) => item)[5];
//             surfReport.west.surfHeights1 = parse[j + 6]
//                 .split(" ")
//                 .filter((item) => item)[2];
//             surfReport.west.surfHeights2 = parse[j + 6]
//                 .split(" ")
//                 .filter((item) => item)[3];
//             surfReport.west.surfHeights3 = parse[j + 6]
//                 .split(" ")
//                 .filter((item) => item)[4];
//             surfReport.west.surfHeights4 = parse[j + 6]
//                 .split(" ")
//                 .filter((item) => item)[5];
//             surfReport.south.surfHeights1 = parse[j + 7]
//                 .split(" ")
//                 .filter((item) => item)[2];
//             surfReport.south.surfHeights2 = parse[j + 7]
//                 .split(" ")
//                 .filter((item) => item)[3];
//             surfReport.south.surfHeights3 = parse[j + 7]
//                 .split(" ")
//                 .filter((item) => item)[4];
//             surfReport.south.surfHeights4 = parse[j + 7]
//                 .split(" ")
//                 .filter((item) => item)[5];
//             surfReport.east.surfHeights1 = parse[j + 8]
//                 .split(" ")
//                 .filter((item) => item)[2];
//             surfReport.east.surfHeights2 = parse[j + 8]
//                 .split(" ")
//                 .filter((item) => item)[3];
//             surfReport.east.surfHeights3 = parse[j + 8]
//                 .split(" ")
//                 .filter((item) => item)[4];
//             surfReport.east.surfHeights4 = parse[j + 8]
//                 .split(" ")
//                 .filter((item) => item)[5];

//             for (let k = j; k < j + 1; k++) {
//                 if (parse[k].includes("UV")) {
//                     console.log(parse[k]);
//                     surfReport.UVIndex = parse[k]
//                         .replace(/\.+\./, " ")
//                         .split(" ")[2];
//                     k++;
//                 }
//                 if (parse[k].includes("Weather")) {
//                     surfReport.weather = parse[k]
//                         .replace(/\.+\./, " ")
//                         .split(" ")
//                         .slice(1)
//                         .join(" ");
//                     k++;
//                 }
//                 if (parse[k].includes("High")) {
//                     surfReport.highsOf = parse[k]
//                         .replace(/\.+\./, " ")
//                         .split(" ")
//                         .slice(1)
//                         .join(" ");
//                     k++;
//                 }
//                 if (parse[k].includes("Wind")) {
//                     surfReport.winds = parse[k]
//                         .replace(/\.+\./, " ")
//                         .split(" ")
//                         .slice(1)
//                         .join(" ");
//                     k++;
//                 }
//                 if (parse[k].includes("Tides")) {
//                     for (let l = k; l < k + 5; l++) {
//                         if (parse[l].startsWith(".")) {
//                             surfReport.tides = surfReport.tides.join("\n");
//                             break;
//                         } else {
//                             surfReport.tides.push(
//                                 parse[l].replace(/^( {3})/, "")
//                             );
//                         }
//                         break;
//                     }
//                 }
//             }
//             break;
//         }
//     }
//     break;
// };
