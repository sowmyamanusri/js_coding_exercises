const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
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

        expect(() => {
            isItPrime("ABC")
        }).toThrow("n is required")
    })
})