'use client'

import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import PromptCardList from './PromptCardList'

export default function Feed() {
  const [allPosts, setAllPosts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt')
    const data = await response.json()

    setAllPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, 'i')
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt),
    )
  }

  const handleSearchChange = (e) => {
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value)
        setSearchedResults(searchResult)
      }, 500),
    )

    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  return (
    <section className="mt-16 flex justify-center items-center flex-col gap-2">
      <form className="relative mx-auto w-full max-w-xl flex items-center justify-center">
        <Input
          placeholder="Pesquise um nome de usuário ou uma tag"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}
