import { useState, useEffect, useCallback } from 'react'

export function useTypewriter(texts, { loop = true, typeSpeed = 60, deleteSpeed = 30, pauseDuration = 2000 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentText = texts[textIdx % texts.length] || ''

  useEffect(() => {
    if (!currentText) return

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < currentText.length) {
          setDisplayed(currentText.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        } else {
          if (loop || textIdx < texts.length - 1) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(currentText.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        } else {
          setIsDeleting(false)
          setTextIdx((i) => (i + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [charIdx, isDeleting, currentText, loop, texts.length, textIdx, typeSpeed, deleteSpeed, pauseDuration])

  return { displayed, isTyping: charIdx < currentText.length && !isDeleting }
}

export function useDecryptText(finalText, { delay = 0, speed = 50, scramble = true } = {}) {
  const [displayed, setDisplayed] = useState('')
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIteration = 0
      const maxIterations = 10
      const interval = setInterval(() => {
        currentIteration++
        setDisplayed(
          finalText
            .split('')
            .map((char, idx) => {
              if (idx < currentIteration * (finalText.length / maxIterations)) return finalText[idx]
              return scramble ? chars[Math.floor(Math.random() * chars.length)] : char
            })
            .join('')
        )
        if (currentIteration >= maxIterations) {
          clearInterval(interval)
          setDisplayed(finalText)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  return displayed
}

export function useTypeOnce(text, { typeSpeed = 60, startDelay = 0 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(delay)
  }, [startDelay])

  useEffect(() => {
    if (!started || idx >= text.length) return
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, idx + 1))
      setIdx((i) => i + 1)
    }, typeSpeed)
    return () => clearTimeout(timer)
  }, [started, idx, text, typeSpeed])

  return { displayed, done: idx >= text.length }
}
