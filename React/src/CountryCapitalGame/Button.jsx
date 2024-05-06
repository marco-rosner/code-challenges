const styles = {
    margin: {
        margin: '5px'
    },
    backgroundWrong: {
        backgroundColor: '#ff0000'
    },
    backgroundSelected: {
        backgroundColor: '#0000ff'
    }
}

export const Button = ({ item, i, isSelected, isWrong, onClick }) => {

    return (
        <button
            key={i}
            style={isSelected(item) ?
                isWrong ?
                    { ...styles.margin, ...styles.backgroundWrong } :
                    { ...styles.margin, ...styles.backgroundSelected } :
                styles.margin}
            onClick={() => onClick(item)}>
            {item}
        </button>
    )
}