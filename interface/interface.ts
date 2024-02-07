export interface PortofolioProps {
  position: string,
  company: string,
  description: string,
  start: Date | undefined,
  end: Date | undefined,
}

export interface DataProps {
  background: string,
  profile: string,
  name: string,
  position: string,
  description: string,
  portofolio: PortofolioProps[]
}