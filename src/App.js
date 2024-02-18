import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'

export default function App(){
   const handleChange = (event) => {
    setBookmark({ ...bookmark, [event.target.name]: event.target.value })
   }

   
   const [bookmarks, setBookmarks] = useState([])
   const [bookmark, setBookmark] = useState({
    title: '',
    url: ''
   })

    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...bookmark})
            })
            const data = await response.json() 
            const bookmarksCopy = [data, ...bookmarks]
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        } finally {
            setBookmark({
                title: '',
                url: ''
            })
        }
    }

    const listBookmarks = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            console.error(error)
        }
    } 

    const deleteBookmark = async(id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex( bookmark => id === bookmark.id )
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }

    const updateBookmark = async(id, updatedData) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarks.findIndex((bookmark) => id === bookmark._id)
            bookmarksCopy[index] = { ...bookmarksCopy[index], ...updatedData }
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {

    }, [])

    useEffect(() => {

        }
    , [])

    return (
        <>
            <CreateBookmark
                createBookmark={createBookmark}
                bookmark={bookmark}
                handleChange={handleChange}
            />

            <BookmarkList
                bookmarks={bookmarks}
                deleteBookmark={deleteBookmark}
                updateBookmark={updateBookmark}
            />
        </>
    )
} 
 