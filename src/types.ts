export type Launches = Array<Launch>

export type Launch = {
  id: string
  mission_name: string
  launch_date_utc: string
  launch_year: string
  rocket: {
    rocket_name: string
  }
  details: string | null
  links: {
    article_link: string | null
  }
}
