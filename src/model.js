import image from './assets/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/block'


export const model = [
    new TitleBlock('Site Constructor (on pure JS)',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.3rem',
            'user-select': 'none'
        }
    }),
    new TextBlock('Lorem ipsum dolor',{
        styles: {
            background: 'linear-gradient(to right, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock([
        'This is column #1',
        'This is column #2',
        'This is column #3'
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex', 
            'justify-content': 'center'
        },
        imageStyles: {
            width: "500px",
            height: 'auto'
        }, 
        alt: 'This is the current image'
    })
]