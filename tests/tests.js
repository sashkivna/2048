describe('2048', function () {
    describe('Move Left', function () {
        var sut;

        beforeEach(function () {
            sut = matrix(4);
        });

        it('should move the Non-zero values to the left', function () {
            sut[0][2] = 4;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should move multiple Non-zero values to the left', function () {
            sut[0][2] = 4;
            sut[0][3] = 8;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            expected[0][1] = 8;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should sum same values', function () {
            sut[0][0] = 2;
            sut[0][1] = 2;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should sum same values even if there is 0 between them', function () {
            sut[0][0] = 2;
            sut[0][3] = 2;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should sum multiple repeating values', function () {
            sut[0][0] = 2;
            sut[0][1] = 2;
            sut[0][2] = 2;
            sut[0][3] = 2;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            expected[0][1] = 4;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should sum different multiple repeating values', function () {
            sut[0][0] = 2;
            sut[0][1] = 2;
            sut[0][2] = 4;
            sut[0][3] = 4;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            expected[0][1] = 8;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should sum different multiple same values', function () {
            sut[0][0] = 2;
            sut[0][1] = 2;
            sut[0][2] = 4;
            sut[0][3] = 4;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 4;
            expected[0][1] = 8;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });

        it('should leave the line unchanged if there are different non-0 values', function () {
            sut[0][0] = 2;
            sut[0][1] = 4;
            sut[0][2] = 8;
            sut[0][3] = 16;
            const originalMatrix = displayMatrix(sut);
            toTheLeft(sut);
            const expected = matrix(4);
            expected[0][0] = 2;
            expected[0][1] = 4;
            expected[0][2] = 8;
            expected[0][3] = 16;
            since(function () {
                return getTestInfo(originalMatrix, this.actual, this.expected);
            }).expect(sut).toEqual(expected);
        });
    });
});

function displayMatrix(matr) {
    function stringifyLine(line) {
        return line.join('|')
    }

    return matr.map(line => stringifyLine(line))
        .join('\r\n')
}

    function getTestInfo(original, actual, expected) {
    return `
For the matrix
${original}

Got:
${displayMatrix(actual)} 

instead of
${displayMatrix(expected)}
`;
}