export interface LibrosInterface {
    numFound: number
    start: number
    numFoundExact: boolean
    docs: LibroInterface[]
    num_found: number
    q: string
    offset: any
  }
  
  export interface LibroInterface {
    key: string
    type: string
    seed: string[]
    title: string
    title_suggest: string
    has_fulltext: boolean
    edition_count: number
    edition_key: string[]
    publish_date: string[]
    publish_year: number[]
    first_publish_year: number
    isbn: string[]
    last_modified_i: number
    ebook_count_i: number
    cover_edition_key?: string
    cover_i?: number
    publisher: string[]
    language?: string[]
    author_key: string[]
    author_name: string[]
    id_librarything?: string[]
    publisher_facet: string[]
    _version_: number
    author_facet: string[]
    number_of_pages_median?: number
    oclc?: string[]
    author_alternative_name?: string[]
    id_goodreads?: string[]
    publish_place?: string[]
    subject?: string[]
    subject_facet?: string[]
    subject_key?: string[]
  }
  

