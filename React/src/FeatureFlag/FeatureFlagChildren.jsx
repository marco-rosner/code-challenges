export const FeatureFlagChildren = ({ flag, currentFlag, children }) => {
    if (flag === currentFlag) return children

    return null
}