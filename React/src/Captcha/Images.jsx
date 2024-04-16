const ONE =
    "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
    "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
    "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
    "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
    "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
    "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const Images = ({ answer, setUnlocked }) => {
    const isAnswer = (id) => id === answer ? setUnlocked(true) : alert("Intruder!")

    return (
        <>
            <div>{`Select ${answer}`}</div>
            <div>
                <img src={ONE} style={{ width: 200, height: 200 }} onClick={() => isAnswer(1)}></img>
                <img src={TWO} style={{ width: 200, height: 200 }} onClick={() => isAnswer(2)}></img>
                <img src={THREE} style={{ width: 200, height: 200 }} onClick={() => isAnswer(3)}></img>
                <img src={FOUR} style={{ width: 200, height: 200 }} onClick={() => isAnswer(4)}></img>
                <img src={FIVE} style={{ width: 200, height: 200 }} onClick={() => isAnswer(5)}></img>
                <img src={SIX} style={{ width: 200, height: 200 }} onClick={() => isAnswer(6)}></img>
            </div>
        </>
    )
}