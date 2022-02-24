const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007.js")

describe("sumDigits", () => {
    test("throws an error if number is not passed", () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required");
    });

    test("takes a number and returns total of all digits of that number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(5678)).toBe(26);
    })
})

describe("createRange", () => {
    test("throws an error if start and end numbers are not passed", () => {
        expect(() => {
            createRange()
        }).toThrow("start is required");

    })


    it("returns the array  by taking start, end and step numbers", () => {

        const res = createRange(1, 11, 2);
        const expected = [1, 3, 5, 7, 9]
        expect(res).toEqual(expected);

    })
});

describe("getScreentimeAlertList", () => {

    test("throws an error if array of user object is not passed", () => {
        expect(() => {
            getScreentimeAlertList()
        }).toThrow("users is required");
    })
    test("throws an error if date of user object is not passed", () => {
        expect(() => {
            getScreentimeAlertList([])
        }).toThrow("date is required");
    })

    it("return an array of usernames of users who have used more than 100 minutes of screentime", () => {
        const users = [{
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [{
                        date: "2019-05-01",
                        usage: {
                            twitter: 34,
                            instagram: 22,
                            facebook: 40
                        }
                    },
                    {
                        date: "2019-05-02",
                        usage: {
                            twitter: 56,
                            instagram: 40,
                            facebook: 31
                        }
                    },
                    {
                        date: "2019-05-03",
                        usage: {
                            twitter: 12,
                            instagram: 15,
                            facebook: 19
                        }
                    },
                    {
                        date: "2019-05-04",
                        usage: {
                            twitter: 10,
                            instagram: 56,
                            facebook: 61
                        }
                    },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [{
                        date: "2019-06-11",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 10
                        }
                    },
                    {
                        date: "2019-06-13",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 16
                        }
                    },
                    {
                        date: "2019-06-14",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 31
                        }
                    },
                ]
            },
        ]


        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);

    })
    it("return an empty array of usernames of users who have used less than 100 minutes of screentime", () => {
        const users = [{
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [{
                        date: "2019-05-01",
                        usage: {
                            twitter: 34,
                            instagram: 22,
                            facebook: 40
                        }
                    },
                    {
                        date: "2019-05-02",
                        usage: {
                            twitter: 56,
                            instagram: 40,
                            facebook: 31
                        }
                    },
                    {
                        date: "2019-05-03",
                        usage: {
                            twitter: 12,
                            instagram: 15,
                            facebook: 19
                        }
                    },
                    {
                        date: "2019-05-04",
                        usage: {
                            twitter: 10,
                            instagram: 56,
                            facebook: 61
                        }
                    },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [{
                        date: "2019-06-11",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 10
                        }
                    },
                    {
                        date: "2019-06-13",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 16
                        }
                    },
                    {
                        date: "2019-06-14",
                        usage: {
                            mapMyRun: 0,
                            whatsApp: 0,
                            facebook: 0,
                            safari: 31
                        }
                    },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);

    })

})


describe("hexToRGB", () => {
    test("throws an error if hexadecimal is not passed", () => {
        expect(() => {
            hexToRGB()
        }).toThrow("hexStr is required");
    });

    test("returns RGB code by receiving a hexadecimal code", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255, 17, 51)")
    })

})

describe("findWinner", () => {
    test("throws an error if array of board is not passed", () => {
        expect(() => {
            findWinner()
        }).toThrow("board is required");
    })

    test("returns X is winner when array of board is passed", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toBe("X is winner");

    })
    test("returns 0 is winner when array of board is passed", () => {
        const board = [
            ["0", "X", "0"],
            ["X", null, "0"],
            ["0", null, "0"]
        ]
        expect(findWinner(board)).toBe("0 is winner");

    })
    it("returns X is winner when array of board is passed", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["0", null, "X"]
        ]
        expect(findWinner(board)).toEqual(null)

    })

})