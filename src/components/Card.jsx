import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from "react-icons/fi";

export default function Card({results}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2'>
        <Link href={`/movie/${results.id}`}>
            <Image
            src={`https://image.tmdb.org/t/p/original/${results.backdrop_path || results.poster_path}`}
                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="image is not available"
            >

            </Image>
            <div className="p-2">
                    <p className="line-clamp-2 text-md">{results.overview}</p>
                    <h2 className="truncate text-lg font-bold text-amber-200">
                        {results.title || results.name}
                    </h2>
                    <p className="flex items-center">
                        {results.release_date || results.first_air_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" /> {results.vote_count}
                    </p>
                </div>
        </Link>
    </div>
  )
}
