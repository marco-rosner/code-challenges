import cx from 'classnames';
import React, { useState } from 'react';
export default () => {
    const [likes, setLikes] = useState(100)
    const [dislikes, setDislikes] = useState(25)

    const onClickLike = () => {
        setLikes((prev) => {
            if (prev === 100) {
                if (dislikes === 26) setDislikes((prev) => prev === 26 ? prev - 1 : prev)
                return prev + 1
            }

            return prev - 1
        }
        )
    }

    const onClickDislike = () => {
        setDislikes((prev) => {
            if (prev === 25) {
                if (likes === 101) setLikes((prev) => prev === 101 ? prev - 1 : prev)
                return prev + 1
            }

            return prev - 1
        }
        )
    }
    return (
        <>
            <div>
                <button className={`like-button${cx({ ' liked': likes === 101 })}`} onClick={onClickLike}>
                    Like | <span className="likes-counter">{`${likes}`}</span>
                </button>
                <button className={`dislike-button${cx({ ' disliked': dislikes === 26 })}`} onClick={onClickDislike}>
                    Dislike | <span className="dislikes-counter">{`${dislikes}`}</span>
                </button>
            </div>
            <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
        </>
    );
};
