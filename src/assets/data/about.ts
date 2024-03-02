import Img01 from '@/assets/images/img-about.jpg'

interface IEducation {
  title: string
  participationYear: string
  degree: string
  items: string[]
}

interface IExperience {
  title: string
  workingYear: string
  company: string
  items: any[]
}

export const content = {
  image: Img01,
  fullName: 'Mjay Molit',
  email: 'akocreus@gmail.com',
  quote:
    'I believe that the key to perfection and happiness lies in learning and embracing the process. Valuing uniqueness in design is a form of perfection itself.'
}

export const education: IEducation[] = [
  {
    title: 'Software Developer',
    participationYear: '2012~2013',
    degree: 'Associate degree',
    items: ['Develop programs and websites', 'Visual Basic 6, VB.NET, PHP, and C#']
  },
  {
    title: 'Information Technology',
    participationYear: '2010~2012',
    degree: 'College level',
    items: ['Introduction to programming', 'Basic principles in designing websites']
  }
]

export const experience: IExperience[] = [
  {
    title: '2D Social Media Animator',
    workingYear: '2020~',
    company: 'Digital Marketing Agency',
    items: ['2D design animator and graphics', 'Video Editor']
  },
  {
    title: 'Social Media Manager/VA',
    workingYear: '2017~2020',
    company: 'Digital Marketing Agency',
    items: ['Content Creator', 'Design graphic marketing materials']
  },
  {
    title: 'Color Quality Checker',
    workingYear: '2014~2016',
    company: 'Printing Agency',
    items: [
      { main: 'Correct color in prints', note: '99% color accuracy digital and print' },
      'Quality checker'
    ]
  }
]
