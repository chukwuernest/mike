import './App.css'

const img1 = (
  <img
    className='img'
    src='https://media.istockphoto.com/id/1470241428/photo/colorful-spring-scene-of-forest-with-pure-water-river.webp?b=1&s=612x612&w=0&k=20&c=UyAo9vJdRMXgfrdSHppWyiqYdwCuHWsrM9xEmNkvd8c='
    alt='good morning'
  />
)
const img2 = (
  <img
    className='img'
    src='https://cdn.pixabay.com/photo/2019/10/23/20/40/landscape-4572804_1280.jpg'
    alt='good afternoon'
  ></img>
)
const img3 = (
  <img
    className='img'
    src='https://cdn.pixabay.com/photo/2015/12/04/17/09/tree-1076831_640.jpg'
    alt='good moring'
  ></img>
)

let talk = ''
let greeting = ''

const d = new Date()
const time = d.getHours()
//time
if (time < 12) {
  {
    greeting = img1
  }
} else if (time < 17) {
  {
    greeting = img2
  }
} else {
  greeting = img3
}
// statments
if (time < 12) {
  {
    talk = 'GOOD MORNING'
  }
} else if (time < 17) {
  {
    talk = 'GOOD AFTERNOON'
  }
} else {
  talk = 'GOOD EVENING'
}

function App() {
  return (
    <div className='App'>
      <h1>{greeting}</h1>
      <p className='p'>{talk}</p>
    </div>
  )
}

export default App
