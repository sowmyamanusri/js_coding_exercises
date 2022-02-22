const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006.js")

describe("sumMultiples", () => {
    test("throws an error if array is not passed", () => {
        expect(() => {
            sumMultiples()
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("ABC")
        }).toThrow("An array is required")

        expect(() => {
            sumMultiples(6)
        }).toThrow("An array is required")


    });


    test("It returns sum of numbers that are multiple by 5 and 3", () => {
        const res = sumMultiples([1, 2, 3, 4, 5, ]);
        const expected = 8;
        expect(res).toBe(expected);

    });

    test("It returns sum of decimal number that are multiple by 5 and 3", () => {
        const res = sumMultiples([1, 2.0, 3, 5, 6, 7, 8, 10]);
        const expected = 24;
        expect(res).toBe(expected);

    });

    test("returns 0 if there is no multiple numbers  of 3 and 5", () => {
        const res = sumMultiples([1, 2, 4, 7, 11]);
        const expected = 0;
        expect(res).toBe(expected);
    });
})



describe("isValidDNA", () => {
    test("throws an error if string is not passed", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("str is required")
    });

    test(" returns true if string contain  valid DNA (G/C/T/A)", () => {
        expect(isValidDNA("tuck")).toBe(true);
    });

    test(" returns true if string contain  valid DNA (G/C/T/A)", () => {
        expect(isValidDNA("runner")).toBe(false);
    });
})


describe("getComplementaryDNA", () => {
    test("throws an error if string is not passed", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("str is required")
    });

    test("replace the string char with G to C, C to G, A to T, T to A ", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");

    })
    test(" convert and replace the lowercase string to uppercase string char with G to C, C to G, A to T, T to A  ", () => {
        expect(getComplementaryDNA("tag")).toBe("ATC");

    })

})


describe("isItPrime", () => {
    test("throws an error if number is not passed", () => {
        expect(() => {
            isItPrime()
        }).toThrow("n is required")


    })
    test("return false when number less than equal to one", () => {
        expect(isItPrime(1)).toBe(false);
    })
    test("return false when number is even", () => {
        expect(isItPrime(4)).toBe(false);
    })
    test("return true if number is prime", () => {
        expect(isItPrime(13)).toBe(true);
    })
})

describe("createMatrix", () => {
    test("throws an error if number is not passed and fill is not passed", () => {
        expect(() => {
            createMatrix()
        }).toThrow("n is required")
    })
    it("returns the matrix 1*1 and fill with \"foo\" ", () => {
        const singleMatrix = createMatrix(1, "foo");
        const expected = [
            ["foo"]
        ];
        expect(singleMatrix).toEqual(expected);

    })

    it("returns the matrix 3*3 and fill with \"foo\" ", () => {
        const singleMatrix = createMatrix(3, "foo");
        const expected = [
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ];
        expect(singleMatrix).toEqual(expected);

    })
    it("returns the matrix 2*2 and fill with \"foo\" ", () => {
        const singleMatrix = createMatrix(2, "foo");
        const expected = [
            ["foo", "foo"],
            ["foo", "foo"]

        ];
        expect(singleMatrix).toEqual(expected);

    })
})

describe("areWeCovered", () => {
    test("throws an error if staff and day is not passed", () => {
        expect(() => {
            areWeCovered()
        }).toThrow("staff is required")
    })


    test("return false if there is no staff", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    })
    test("return false if the staff is less than 3 on specified day", () => {
        const staff = [{
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Pedro",
                rota: ["Saturday", "Sunday"]
            },
            {
                name: "Max",
                rota: ["Monday", "Tuesday", "Thursday"]
            },
            {
                name: "Mark",
                rota: ["Saturday", "Friday", "Wednesday"]
            },


        ]

        expect(areWeCovered(staff, "Saturday")).toBe(false);
    })
    test("return true if the three is working on specified day", () => {
        const staff = [{
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Pedro",
                rota: ["Saturday", "Tuesday", "Friday"]
            },
            {
                name: "Max",
                rota: ["Monday", "Tuesday", "Thursday"]
            },
            {
                name: "Mark",
                rota: ["Monday", "Friday", "Wednesday"]
            },


        ]

        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true)
    })
})