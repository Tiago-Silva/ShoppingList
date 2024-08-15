module.exports = {
    preset: "jest-expo",
    testPathIgnorePatterns: [
        "/node_modules",
        "/android",
        "/ios",
        "/build",
        "/dist"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.ts",
        "@testing-library/jest-native/extend-expect",
        "jest-styled-components"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-native-svg|@moti|react-redux)"
    ],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/src/__tests__/"
    ],
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.spec.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
