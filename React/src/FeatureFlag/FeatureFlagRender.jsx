export const FeatureFlagRender = ({ componentA, flagA, componentB, flagB, currentFlag }) => {
    if (currentFlag === flagA) return componentA
    if (currentFlag === flagB) return componentB

    return null
}