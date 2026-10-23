"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#0088CB]/25 bg-[#0088CB]/5 px-6 py-10 text-center">
        <p className="font-heading text-2xl font-semibold text-[#0a1628]">
          Thank you for submitting!
        </p>
        <p className="mt-2 text-sm text-[#0a1628]/70">
          We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[#0a1628]/80">
            First name
          </span>
          <input
            required
            name="firstName"
            className="h-11 w-full border border-[#d1d1d1] bg-white px-3 outline-none transition focus:border-[#0088CB]"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[#0a1628]/80">
            Last name
          </span>
          <input
            required
            name="lastName"
            className="h-11 w-full border border-[#d1d1d1] bg-white px-3 outline-none transition focus:border-[#0088CB]"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-[#0a1628]/80">Email</span>
        <input
          required
          type="email"
          name="email"
          className="h-11 w-full border border-[#d1d1d1] bg-white px-3 outline-none transition focus:border-[#0088CB]"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-[#0a1628]/80">
          Subject
        </span>
        <input
          name="subject"
          className="h-11 w-full border border-[#d1d1d1] bg-white px-3 outline-none transition focus:border-[#0088CB]"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-[#0a1628]/80">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y border border-[#d1d1d1] bg-white px-3 py-2.5 outline-none transition focus:border-[#0088CB]"
        />
      </label>
      <Button
        type="submit"
        className="h-11 rounded-none bg-[#0088CB] px-8 text-sm font-semibold tracking-wide text-white hover:bg-[#0070a8]"
      >
        Submit
      </Button>
    </form>
  )
}
