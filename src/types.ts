export type Launches = Array<Launch>

export type Launch = {
  details: string | null
  id: string
  launch_date_utc: string
  launch_year: string
  links: {
    article_link: string | null
  }
  rocket: {
    rocket_name: string
  }
  mission_name: string
}
