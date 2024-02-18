import Bookmark from '../Bookmark/Bookmark'

export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  return (
    <ul>
      {
            bookmarks.length ? bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))
              : <>
                <h2>No Bookmarks Yet</h2>
                </>
        }
    </ul>
  )
} 


// import styles from './BookmarkList.module.scss'
// import Bookmark from '../Bookmark/Bookmark'

// export default function BookmarkList({
//     newBookmark,
//     createBookmark,
//     setNewBookmark,
//     bookmarks,
//     deleteBookmark,
//     updateBookmark
// }) {
//     return (
//         <>
//             <div className={styles.BookmarkList}>
//                 <label>Bookmark Name:</label>
//                 <input
//                     className={styles.input}
//                     type="text"
//                     value={newBookmark.title}
//                     onChange={(e) => {
//                         setNewBookmark({ ...newBookmark, title: e.target.value })
//                     }}
//                     onKeyDown={(e) => {
//                         e.key === 'Enter' && createBookmark()
//                     }}
//                 />
//                 <br></br>
//                 <label>Url Address:</label>
//                 <input
//                     className={styles.input}
//                     type="text"
//                     value={newBookmark.url}
//                     onChange={(e) => {
//                         setNewBookmark({ ...newBookmark, url: e.target.value })
//                     }}
//                     onKeyDown={(e) => {
//                         e.key === 'Enter' && createBookmark()
//                     }
//                     }
//                 />
//                 <br></br>
//                 <h3>Bookmarks</h3>
//                 {
//                     bookmarks.map(bookmark => (
//                         <div className={styles.bookmarkButtonSection}>
//                             <Bookmark
//                                 name={bookmark.title}
//                                 key={bookmark._id}
//                                 bookmark={bookmark}
//                                 updateBookmark={updateBookmark}
//                                 deleteAction={deleteBookmark}
//                             />

//                         </div>
//                     ))}
//             </div>
//         </>
//     )
// }