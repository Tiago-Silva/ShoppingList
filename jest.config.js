module.exports = {
    preset: "jest-expo",
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-native-svg|@moti)"
    ]
}
