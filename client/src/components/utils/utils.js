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
    let idx = 100;
    while (idx > 16) {
        degree = Math.ceil(degree / 16);
        if (degree < 17) idx = degree;
    }
    return compass[idx];
}

//extract surf report
export const parseReport = (parse, island) => {
    const surfReport = {
        discussion: "",
        today: "",
        tomorrow: "",
        dayPeriod1: "",
        dayPeriod2: "",
        dayPeriod3: "",
        dayPeriod4: "",
        weather: {
            current: {
                day: "",
                text: "",
                high: "",
            },
            next: {
                day: "",
                text: "",
                high: "",
            },
        },
        tides: "",
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
            for (let j = i; j < i + 60; j++) {
                if (
                    parse[j].includes("Today") ||
                    (parse[j].includes("Tonight") && j < i + 5)
                ) {
                    surfReport.today = parse[j]
                        .split(" ")
                        .filter((item) => item)[0];
                    surfReport.tomorrow = parse[j]
                        .split(" ")
                        .filter((item) => item)[1];
                }
                if (
                    parse[j].includes("  AM  ") ||
                    parse[j].includes("  PM  ")
                ) {
                    surfReport.dayPeriod1 = parse[j]
                        .split(" ")
                        .filter((item) => item)[0];
                    surfReport.dayPeriod2 = parse[j]
                        .split(" ")
                        .filter((item) => item)[1];
                    surfReport.dayPeriod3 = parse[j]
                        .split(" ")
                        .filter((item) => item)[2];
                    surfReport.dayPeriod4 = parse[j]
                        .split(" ")
                        .filter((item) => item)[3];
                }
                if (parse[j].includes("North Facing")) {
                    surfReport.north.surfHeights1 = parse[j]
                        .split(" ")
                        .filter((item) => item)[2];
                    surfReport.north.surfHeights2 = parse[j]
                        .split(" ")
                        .filter((item) => item)[3];
                    surfReport.north.surfHeights3 = parse[j]
                        .split(" ")
                        .filter((item) => item)[4];
                    surfReport.north.surfHeights4 = parse[j]
                        .split(" ")
                        .filter((item) => item)[5];
                }
                if (parse[j].includes("West Facing")) {
                    surfReport.west.surfHeights1 = parse[j]
                        .split(" ")
                        .filter((item) => item)[2];
                    surfReport.west.surfHeights2 = parse[j]
                        .split(" ")
                        .filter((item) => item)[3];
                    surfReport.west.surfHeights3 = parse[j]
                        .split(" ")
                        .filter((item) => item)[4];
                    surfReport.west.surfHeights4 = parse[j]
                        .split(" ")
                        .filter((item) => item)[5];
                }
                if (parse[j].includes("South Facing")) {
                    surfReport.south.surfHeights1 = parse[j]
                        .split(" ")
                        .filter((item) => item)[2];
                    surfReport.south.surfHeights2 = parse[j]
                        .split(" ")
                        .filter((item) => item)[3];
                    surfReport.south.surfHeights3 = parse[j]
                        .split(" ")
                        .filter((item) => item)[4];
                    surfReport.south.surfHeights4 = parse[j]
                        .split(" ")
                        .filter((item) => item)[5];
                }
                if (parse[j].includes("East Facing")) {
                    surfReport.east.surfHeights1 = parse[j]
                        .split(" ")
                        .filter((item) => item)[2];
                    surfReport.east.surfHeights2 = parse[j]
                        .split(" ")
                        .filter((item) => item)[3];
                    surfReport.east.surfHeights3 = parse[j]
                        .split(" ")
                        .filter((item) => item)[4];
                    surfReport.east.surfHeights4 = parse[j]
                        .split(" ")
                        .filter((item) => item)[5];
                }
                if (parse[j].includes("UV Index")) {
                    surfReport.weather.current.day = parse[j - 1].replaceAll(
                        /\./g,
                        ""
                    );
                    surfReport.UVIndex = parse[j]
                        .replace(/\.+\./, " ")
                        .split(" ")[2];
                    surfReport.weather.current.text = parse[j + 1]
                        .replace(/\.+\./, " ")
                        .split(" ")
                        .slice(1)
                        .join(" ");
                    surfReport.weather.current.high = parse[j + 2]
                        .replace(/\.+\./, " ")
                        .split(" ")
                        .slice(1)
                        .join(" ");
                }
                if (
                    !parse[j - 1].includes("UV Index") &&
                    parse[j].includes("Weather..........")
                ) {
                    surfReport.weather.current.day = parse[j - 1]
                        .replaceAll(/\./g, "")
                        .replace("Weather", "");
                    surfReport.weather.current.text = parse[j]
                        .replace(/\.+\./, " ")
                        .split(" ")
                        .slice(1)
                        .join(" ");
                    surfReport.weather.current.high = parse[j + 1]
                        .replace(/\.+\./, " ")
                        .split(" ")
                        .slice(1)
                        .join(" ");
                }
                if (parse[j].includes("Winds.........")) {
                    surfReport.winds = parse[j]
                        .replace(/\.+\./, " ")
                        .split(" ")
                        .slice(1)
                        .join(" ");
                }
                if (parse[j].includes("Tides..")) {
                    const tides = [];
                    for (let l = j; j + 5; l++) {
                        if (parse[l].startsWith(".")) {
                            surfReport.tides = tides.join("\n");
                            break;
                        } else {
                            tides.push(parse[l].replace(/^( {3})/, ""));
                        }
                        j += 100;
                    }
                }
            }
            break;
        }
    }
    return surfReport;
};
