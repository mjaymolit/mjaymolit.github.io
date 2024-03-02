// section 1
import Img001 from '@/assets/images/works/designs-animations/0004.jpg'
import Img002 from '@/assets/images/works/designs-animations/0005.jpg'
import Img003 from '@/assets/images/works/designs-animations/0006.jpg'
import Img004 from '@/assets/images/works/designs-animations/0007.jpg'
import Img005 from '@/assets/images/works/designs-animations/0008.jpg'
import Img006 from '@/assets/images/works/designs-animations/0009.jpg'
import Img007 from '@/assets/images/works/designs-animations/0010.jpg'
import Img008 from '@/assets/images/works/designs-animations/0011.jpg'
import Img009 from '@/assets/images/works/designs-animations/0012.jpg'
import Img010 from '@/assets/images/works/designs-animations/0013.jpg'

// section 2
import Img101 from '@/assets/images/works/posters-illustrations/0004.jpg'
import Img102 from '@/assets/images/works/posters-illustrations/0005.jpg'
import Img103 from '@/assets/images/works/posters-illustrations/0006.jpg'
import Img104 from '@/assets/images/works/posters-illustrations/0007.jpg'
import Img105 from '@/assets/images/works/posters-illustrations/0008.jpg'
import Img106 from '@/assets/images/works/posters-illustrations/0009.jpg'
import Img107 from '@/assets/images/works/posters-illustrations/0010.jpg'
import Img108 from '@/assets/images/works/posters-illustrations/0011.jpg'
import Img109 from '@/assets/images/works/posters-illustrations/0012.jpg'
import Img110 from '@/assets/images/works/posters-illustrations/0013.jpg'

// section 3
import Img201 from '@/assets/images/works/video-thumbnails/0004.jpg'
import Img202 from '@/assets/images/works/video-thumbnails/0005.jpg'
import Img203 from '@/assets/images/works/video-thumbnails/0006.jpg'
import Img204 from '@/assets/images/works/video-thumbnails/0007.jpg'
import Img205 from '@/assets/images/works/video-thumbnails/0008.jpg'
import Img206 from '@/assets/images/works/video-thumbnails/0009.jpg'
import Img207 from '@/assets/images/works/video-thumbnails/0010.jpg'

// section 4
import Img301 from '@/assets/images/works/logo-branding/0004.jpg'
import Img302 from '@/assets/images/works/logo-branding/0005.jpg'
import Img303 from '@/assets/images/works/logo-branding/0006.jpg'
import Img304 from '@/assets/images/works/logo-branding/0007.jpg'
import Img305 from '@/assets/images/works/logo-branding/0008.jpg'
import Img306 from '@/assets/images/works/logo-branding/0009.jpg'
import Img307 from '@/assets/images/works/logo-branding/0010.jpg'

interface IPorfolio {
  title: string
  titleAlign: string
  footnote?: string
  items: any[]
  itemsSize: number
}

export const content: IPorfolio[] = [
  {
    title: 'Social Media Design and Animation',
    titleAlign: 'left',
    footnote: '*Some of these works are animated and the colors are based on their branding',
    items: [
      [Img001, Img006],
      [Img002, Img007],
      [Img003, Img008],
      [Img004, Img009],
      [Img005, Img010]
    ],
    itemsSize: 20
  },
  {
    title: 'Posters and Illustrations',
    titleAlign: 'right',
    items: [
      [Img101, Img106],
      [Img102, Img107],
      [Img103, Img108],
      [Img104, Img109],
      [Img105, Img110]
    ],
    itemsSize: 20
  },
  {
    title: 'Video Thumbnails',
    titleAlign: 'left',
    items: [Img201, Img202, Img203, Img204, Img205, Img206, Img207],
    itemsSize: 25
  },
  {
    title: 'Logo and Branding',
    titleAlign: 'center',
    items: [Img301, Img302, Img303, Img304, Img305, Img306, Img307],
    itemsSize: 25
  }
]
