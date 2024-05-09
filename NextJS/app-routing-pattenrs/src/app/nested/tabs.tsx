export const Tab = ({ tab, path, children }: { tab: string, path: string, children: React.ReactElement }) => {
    if (tab === path) return children

    return null
}