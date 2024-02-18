
import { useRef, useState } from 'react'
import styles from './Bookmark.module.scss'
export default function Bookmark({
    bookmark,
    updateBookmark,
    deleteBookmark
}) {
    const [showInput, setShowInput] = useState(false)
    const inputRefTitle = useRef(null)
    const inputRefUrl = useRef(null)

    return(
        <>
            <li>
                <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
                <input
                    ref={inputRefTitle}
                    style={{ display: showInput ? 'block' : 'none' }}
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const title = inputRefTitle.current.value
                            updateBookmark(bookmark._id, { title })
                            setShowInput(false)
                        }
                    }}
                    defaultValue={bookmark.title}
                />

                <a href={bookmark.url} target="_blank" rel="noreferrer">{bookmark.url}</a>
                <input
                    ref={inputRefUrl}
                    style={{ display: showInput ? 'block' : 'none' }}
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const url = inputRefUrl.current.value
                            updateBookmark(bookmark._id, { url })
                            setShowInput(false)
                        }
                    }}
                    defaultValue={bookmark.url}
                />
                <button onClick={() => deleteBookmark(bookmark._id)}>Delete Me</button>
            </li>
        </>
    )
} 