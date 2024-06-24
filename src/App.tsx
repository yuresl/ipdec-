import { Header } from "./components/Header/Header";
import { Post, PostProps } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from './App.module.css';

import './global.css';

type Posts = PostProps & {
id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yuresl.png',
      name: 'Yure Luniere',
      role: 'Trainee | @Ipdec'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub 🚀', },
      { type: 'link', content: 'https://github.com/yuresl/tela-login2', },
    ],
    publishedAt: new Date('2024-06-19 13:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQGjNVJedUuCjQ/profile-displayphoto-shrink_800_800/0/1677863981353?e=1724889600&v=beta&t=owUvIq6_K0GJJTAj6XadO5BqEszsuUgvE1VlZr92IyY',
      name: 'Luiz Oliveira',
      role: 'FullStack Developer | @Ipdec'
    },
    content: [
      { type: 'paragraphItalic', content: '-> Ouvindo / Me Desculpa Jay-Z - Baco Exu do Blues 🎵',},
      { type: 'link', content: '🎧 Ouvir junto', },
    ],
    publishedAt: new Date('2024-06-18 13:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQG-34m9R_aWOg/profile-displayphoto-shrink_800_800/0/1671214156651?e=1724889600&v=beta&t=MH0l22MHJ_Ue8TMJv0YSrOMiAEPCln3SxBrmGG01Bv8',
      name: 'Mauricio Rocha',
      role: 'Front-End Developer | @Ipdec'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub 🚀', },
      { type: 'link', content: 'https://github.com/MauricioDoCSS/Robotron2000', },
    ],
    publishedAt: new Date('2024-06-17 13:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQEVL82vbon_tA/profile-displayphoto-shrink_800_800/0/1660655632866?e=1724284800&v=beta&t=ZENQNoZAqBTwPPNahZ_RmQkQ5s_ubtUIA5G_pGbWq-M',
      name: 'Paulo Diniz',
      role: 'Analista de Desenvolvimento de Sistemas | @Ipdec'
    },
    content: [
      { type: 'paragraph', content: 'Greve não, eu quero me formar!!',},
    ],
    publishedAt: new Date('2024-06-17 13:00:00')
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQFkjurCeInO8w/profile-displayphoto-shrink_800_800/0/1715710525416?e=1724284800&v=beta&t=dTjSa1KMOvtVgp8KcW6AYwml687tNoCPvr3M2b71HAU',
      name: 'Angel Sales',
      role: 'UX Designer | @Ipdec'
    },
    content: [
      { type: 'paragraph', content: 'Vocês sabem qual o robô vende casas? O Corretor Automático! 😂😂😂 ',},
    ],
    publishedAt: new Date('2024-06-17 13:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
          ))}
        </main> 
      </div>     
    </div>
  )
}
